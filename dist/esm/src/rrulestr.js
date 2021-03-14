import RRule from './rrule';
import RRuleSet from './rruleset';
import dateutil from './dateutil';
import { includes, split } from './helpers';
import { DateTimeProperty } from './types';
import { parseString, parseDateTime } from './parsestring';
/**
 * RRuleStr
 *  To parse a set of rrule strings
 */
const DEFAULT_OPTIONS = {
    dtstart: null,
    dtend: null,
    dtvalue: null,
    cache: false,
    unfold: false,
    forceset: false,
    compatible: false,
    tzid: null
};
export function parseInput(s, options) {
    let rrulevals = [];
    let rdatevals = [];
    let exrulevals = [];
    let exdatevals = [];
    let { dtstart, dtvalue, tzid } = parseDateTime(s);
    let dtend = null;
    const lines = splitIntoLines(s, options.unfold);
    lines.forEach(line => {
        if (!line)
            return;
        const { name, parms, value } = breakDownLine(line);
        switch (name.toUpperCase()) {
            case 'RRULE':
                if (parms.length) {
                    throw new Error(`unsupported RRULE parm: ${parms.join(',')}`);
                }
                rrulevals.push(parseString(line));
                break;
            case 'RDATE':
                const [_, rdateTzid] = /RDATE(?:;TZID=([^:=]+))?/i.exec(line);
                if (rdateTzid && !tzid) {
                    tzid = rdateTzid;
                }
                rdatevals = rdatevals.concat(parseRDate(value, parms));
                break;
            case 'EXRULE':
                if (parms.length) {
                    throw new Error(`unsupported EXRULE parm: ${parms.join(',')}`);
                }
                exrulevals.push(parseString(value));
                break;
            case 'EXDATE':
                exdatevals = exdatevals.concat(parseRDate(value, parms));
                break;
            case 'DTSTART':
                break;
            case 'DTEND':
                let parsed = parseDateTime(s, DateTimeProperty.END);
                if (parsed.dtend) {
                    if (dtend) {
                        throw new Error('Invalid rule: DTEND must occur only once');
                    }
                    if (dtstart && dtstart.valueOf() >= parsed.dtend.valueOf()) {
                        throw new Error('Invalid rule: DTEND must be later than DTSTART');
                    }
                    if (dtstart && dtvalue !== parsed.dtvalue) {
                        // Different value types.
                        throw new Error('Invalid rule: DTSTART and DTEND must have the same value type');
                    }
                    else if (dtstart && tzid !== parsed.tzid) {
                        // Different timezones.
                        throw new Error('Invalid rule: DTSTART and DTEND must have the same timezone');
                    }
                    dtend = parsed.dtend;
                }
                break;
            default:
                throw new Error('unsupported property: ' + name);
        }
    });
    return {
        dtstart,
        dtend,
        dtvalue,
        tzid,
        rrulevals,
        rdatevals,
        exrulevals,
        exdatevals
    };
}
function buildRule(s, options) {
    const { rrulevals, rdatevals, exrulevals, exdatevals, dtstart, dtend, dtvalue, tzid } = parseInput(s, options);
    const noCache = options.cache === false;
    if (options.compatible) {
        options.forceset = true;
        options.unfold = true;
    }
    if (options.forceset ||
        rrulevals.length > 1 ||
        rdatevals.length ||
        exrulevals.length ||
        exdatevals.length) {
        const rset = new RRuleSet(noCache);
        rset.dtstart(dtstart);
        rset.dtend(dtend);
        rset.tzid(tzid || undefined);
        rrulevals.forEach(val => {
            rset.rrule(new RRule(groomRruleOptions(val, dtstart, dtend, dtvalue, tzid), noCache));
        });
        rdatevals.forEach(date => {
            rset.rdate(date);
        });
        exrulevals.forEach(val => {
            rset.exrule(new RRule(groomRruleOptions(val, dtstart, dtend, dtvalue, tzid), noCache));
        });
        exdatevals.forEach(date => {
            rset.exdate(date);
        });
        if (options.compatible && options.dtstart)
            rset.rdate(dtstart);
        return rset;
    }
    const val = rrulevals[0] || {};
    return new RRule(groomRruleOptions(val, val.dtstart || options.dtstart || dtstart, val.dtend || options.dtend || dtend, val.dtvalue || options.dtvalue || dtvalue, val.tzid || options.tzid || tzid), noCache);
}
export function rrulestr(s, options = {}) {
    return buildRule(s, initializeOptions(options));
}
function groomRruleOptions(val, dtstart, dtend, dtvalue, tzid) {
    return Object.assign(Object.assign({}, val), { dtstart,
        dtend,
        dtvalue,
        tzid });
}
function initializeOptions(options) {
    const invalid = [];
    const keys = Object.keys(options);
    const defaultKeys = Object.keys(DEFAULT_OPTIONS);
    keys.forEach(function (key) {
        if (!includes(defaultKeys, key))
            invalid.push(key);
    });
    if (invalid.length) {
        throw new Error('Invalid options: ' + invalid.join(', '));
    }
    const initializedOptions = Object.assign({}, options);
    // Merge in default options
    defaultKeys.forEach(function (key) {
        // @ts-ignore
        if (!includes(keys, key))
            initializedOptions[key] = DEFAULT_OPTIONS[key];
    });
    return initializedOptions;
}
function extractName(line) {
    if (line.indexOf(':') === -1) {
        return {
            name: 'RRULE',
            value: line
        };
    }
    const [name, value] = split(line, ':', 1);
    return {
        name,
        value
    };
}
function breakDownLine(line) {
    const { name, value } = extractName(line);
    let parms = name.split(';');
    if (!parms)
        throw new Error('empty property name');
    return {
        name: parms[0].toUpperCase(),
        parms: parms.slice(1),
        value
    };
}
function splitIntoLines(s, unfold = false) {
    s = s && s.trim();
    if (!s)
        throw new Error('Invalid empty string');
    // More info about 'unfold' option
    // Go head to http://www.ietf.org/rfc/rfc2445.txt
    if (!unfold) {
        return s.split(/\s/);
    }
    const lines = s.split('\n');
    let i = 0;
    while (i < lines.length) {
        // TODO
        const line = (lines[i] = lines[i].replace(/\s+$/g, ''));
        if (!line) {
            lines.splice(i, 1);
        }
        else if (i > 0 && line[0] === ' ') {
            lines[i - 1] += line.slice(1);
            lines.splice(i, 1);
        }
        else {
            i += 1;
        }
    }
    return lines;
}
function validateDateParm(parms) {
    parms.forEach(parm => {
        if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(parm)) {
            throw new Error('unsupported RDATE/EXDATE parm: ' + parm);
        }
    });
}
function parseRDate(rdateval, parms) {
    validateDateParm(parms);
    return rdateval
        .split(',')
        .map(datestr => dateutil.fromRfc5545DateTime(datestr));
}
//# sourceMappingURL=rrulestr.js.map