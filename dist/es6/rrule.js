(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("luxon"));
	else if(typeof define === 'function' && define.amd)
		define(["luxon"], factory);
	else if(typeof exports === 'object')
		exports["rrule"] = factory(require("luxon"));
	else
		root["rrule"] = factory(root["luxon"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return range; });
/* unused harmony export clone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return padStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return pymod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return divmod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return notEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return includes; });
// =============================================================================
// Helper functions
// =============================================================================
const isPresent = function (value) {
    return value !== null && value !== undefined;
};
const isNumber = function (value) {
    return typeof value === 'number';
};
const isArray = Array.isArray;
/**
 * Simplified version of python's range()
 */
const range = function (start, end = start) {
    if (arguments.length === 1) {
        end = start;
        start = 0;
    }
    const rang = [];
    for (let i = start; i < end; i++)
        rang.push(i);
    return rang;
};
const clone = function (array) {
    return [].concat(array);
};
const repeat = function (value, times) {
    let i = 0;
    const array = [];
    if (isArray(value)) {
        for (; i < times; i++)
            array[i] = [].concat(value);
    }
    else {
        for (; i < times; i++)
            array[i] = value;
    }
    return array;
};
const toArray = function (item) {
    if (isArray(item)) {
        return item;
    }
    return [item];
};
function padStart(item, targetLength, padString = ' ') {
    const str = String(item);
    targetLength = targetLength >> 0;
    if (str.length > targetLength) {
        return String(str);
    }
    targetLength = targetLength - str.length;
    if (targetLength > padString.length) {
        padString += repeat(padString, targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(str);
}
/**
 * Python like split
 */
const split = function (str, sep, num) {
    const splits = str.split(sep);
    return num
        ? splits.slice(0, num).concat([splits.slice(num).join(sep)])
        : splits;
};
/**
 * closure/goog/math/math.js:modulo
 * Copyright 2006 The Closure Library Authors.
 * The % operator in JavaScript returns the remainder of a / b, but differs from
 * some other languages in that the result will have the same sign as the
 * dividend. For example, -1 % 8 == -1, whereas in some other languages
 * (such as Python) the result would be 7. This function emulates the more
 * correct modulo behavior, which is useful for certain applications such as
 * calculating an offset index in a circular list.
 *
 * @param {number} a The dividend.
 * @param {number} b The divisor.
 * @return {number} a % b where the result is between 0 and b (either 0 <= x < b
 *     or b < x <= 0, depending on the sign of b).
 */
const pymod = function (a, b) {
    const r = a % b;
    // If r and b differ in sign, add b to wrap the result to the correct sign.
    return r * b < 0 ? r + b : r;
};
/**
 * @see: <http://docs.python.org/library/functions.html#divmod>
 */
const divmod = function (a, b) {
    return { div: Math.floor(a / b), mod: pymod(a, b) };
};
const empty = function (obj) {
    return !isPresent(obj) || obj.length === 0;
};
/**
 * Python-like boolean
 * @return {Boolean} value of an object/primitive, taking into account
 * the fact that in Python an empty list's/tuple's
 * boolean value is False, whereas in JS it's true
 */
const notEmpty = function (obj) {
    return !empty(obj);
};
/**
 * Return true if a value is in an array
 */
const includes = function (arr, val) {
    return notEmpty(arr) && arr.indexOf(val) !== -1;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/helpers.ts
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/dateutil.ts

/**
 * General date-related utilities.
 * Also handles several incompatibilities between JavaScript and Python
 *
 */
var dateutil_dateutil;
(function (dateutil) {
    dateutil.MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    /**
     * Number of milliseconds of one day
     */
    dateutil.ONE_DAY = 1000 * 60 * 60 * 24;
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.MAXYEAR>
     */
    dateutil.MAXYEAR = 9999;
    /**
     * Python uses 1-Jan-1 as the base for calculating ordinals but we don't
     * want to confuse the JS engine with milliseconds > Number.MAX_NUMBER,
     * therefore we use 1-Jan-1970 instead
     */
    dateutil.ORDINAL_BASE = new Date(Date.UTC(1970, 0, 1));
    /**
     * Python: MO-SU: 0 - 6
     * JS: SU-SAT 0 - 6
     */
    dateutil.PY_WEEKDAYS = [6, 0, 1, 2, 3, 4, 5];
    /**
     * py_date.timetuple()[7]
     */
    dateutil.getYearDay = function (date) {
        const dateNoTime = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        return (Math.ceil((dateNoTime.valueOf() -
            new Date(date.getUTCFullYear(), 0, 1).valueOf()) /
            dateutil.ONE_DAY) + 1);
    };
    dateutil.isLeapYear = function (year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };
    dateutil.isDate = function (value) {
        return value instanceof Date;
    };
    dateutil.isValidDate = function (value) {
        return dateutil.isDate(value) && !isNaN(value.getTime());
    };
    /**
     * @return {Number} the date's timezone offset in ms
     */
    dateutil.tzOffset = function (date) {
        return date.getTimezoneOffset() * 60 * 1000;
    };
    /**
     * @see: <http://www.mcfedries.com/JavaScript/DaysBetween.asp>
     */
    dateutil.daysBetween = function (date1, date2) {
        // The number of milliseconds in one day
        // Convert both dates to milliseconds
        const date1ms = date1.getTime() - dateutil.tzOffset(date1);
        const date2ms = date2.getTime() - dateutil.tzOffset(date2);
        // Calculate the difference in milliseconds
        const differencems = date1ms - date2ms;
        // Convert back to days and return
        return Math.round(differencems / dateutil.ONE_DAY);
    };
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.date.toordinal>
     */
    dateutil.toOrdinal = function (date) {
        return dateutil.daysBetween(date, dateutil.ORDINAL_BASE);
    };
    /**
     * @see - <http://docs.python.org/library/datetime.html#datetime.date.fromordinal>
     */
    dateutil.fromOrdinal = function (ordinal) {
        return new Date(dateutil.ORDINAL_BASE.getTime() + ordinal * dateutil.ONE_DAY);
    };
    dateutil.getMonthDays = function (date) {
        const month = date.getUTCMonth();
        return month === 1 && dateutil.isLeapYear(date.getUTCFullYear())
            ? 29
            : dateutil.MONTH_DAYS[month];
    };
    /**
     * @return {Number} python-like weekday
     */
    dateutil.getWeekday = function (date) {
        return dateutil.PY_WEEKDAYS[date.getUTCDay()];
    };
    /**
     * @see: <http://docs.python.org/library/calendar.html#calendar.monthrange>
     */
    dateutil.monthRange = function (year, month) {
        const date = new Date(Date.UTC(year, month, 1));
        return [dateutil.getWeekday(date), dateutil.getMonthDays(date)];
    };
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.datetime.combine>
     */
    dateutil.combine = function (date, time) {
        time = time || date;
        return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()));
    };
    dateutil.clone = function (date) {
        const dolly = new Date(date.getTime());
        return dolly;
    };
    dateutil.cloneDates = function (dates) {
        const clones = [];
        for (let i = 0; i < dates.length; i++) {
            clones.push(dateutil.clone(dates[i]));
        }
        return clones;
    };
    /**
     * Sorts an array of Date or dateutil.Time objects
     */
    dateutil.sort = function (dates) {
        dates.sort(function (a, b) {
            return a.getTime() - b.getTime();
        });
    };
    dateutil.toRfc5545DateTime = function (time, utc = true) {
        const date = new Date(time);
        return [
            Object(helpers["h" /* padStart */])(date.getUTCFullYear().toString(), 4, '0'),
            Object(helpers["h" /* padStart */])(date.getUTCMonth() + 1, 2, '0'),
            Object(helpers["h" /* padStart */])(date.getUTCDate(), 2, '0'),
            'T',
            Object(helpers["h" /* padStart */])(date.getUTCHours(), 2, '0'),
            Object(helpers["h" /* padStart */])(date.getUTCMinutes(), 2, '0'),
            Object(helpers["h" /* padStart */])(date.getUTCSeconds(), 2, '0'),
            utc ? 'Z' : ''
        ].join('');
    };
    dateutil.toRfc5545Date = function (time) {
        const date = new Date(time);
        return [
            Object(helpers["h" /* padStart */])(date.getUTCFullYear().toString(), 4, '0'),
            Object(helpers["h" /* padStart */])(date.getUTCMonth() + 1, 2, '0'),
            Object(helpers["h" /* padStart */])(date.getUTCDate(), 2, '0')
        ].join('');
    };
    dateutil.fromRfc5545DateTime = function (dt) {
        const re = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
        const bits = re.exec(dt);
        if (!bits)
            throw new Error(`Invalid date-time value: ${dt}`);
        return new Date(Date.UTC(parseInt(bits[1], 10), parseInt(bits[2], 10) - 1, parseInt(bits[3], 10), parseInt(bits[5], 10) || 0, parseInt(bits[6], 10) || 0, parseInt(bits[7], 10) || 0));
    };
    dateutil.fromRfc5545Date = function (dt) {
        const re = /^(\d{4})(\d{2})(\d{2})$/;
        const bits = re.exec(dt);
        if (!bits)
            throw new Error(`Invalid date value: ${dt}`);
        return new Date(Date.UTC(parseInt(bits[1], 10), parseInt(bits[2], 10) - 1, parseInt(bits[3], 10)));
    };
})(dateutil_dateutil || (dateutil_dateutil = {}));
/* harmony default export */ var src_dateutil = (dateutil_dateutil);

// CONCATENATED MODULE: ./src/iterresult.ts
/**
 * This class helps us to emulate python's generators, sorta.
 */
class IterResult {
    constructor(method, args) {
        this.minDate = null;
        this.maxDate = null;
        this._result = [];
        this.total = 0;
        this.method = method;
        this.args = args;
        if (method === 'between') {
            this.maxDate = args.inc
                ? args.before
                : new Date(args.before.getTime() - 1);
            this.minDate = args.inc ? args.after : new Date(args.after.getTime() + 1);
        }
        else if (method === 'before') {
            this.maxDate = args.inc ? args.dt : new Date(args.dt.getTime() - 1);
        }
        else if (method === 'after') {
            this.minDate = args.inc ? args.dt : new Date(args.dt.getTime() + 1);
        }
    }
    /**
     * Possibly adds a date into the result.
     *
     * @param {Date} date - the date isn't necessarly added to the result
     *                      list (if it is too late/too early)
     * @return {Boolean} true if it makes sense to continue the iteration
     *                   false if we're done.
     */
    accept(date) {
        ++this.total;
        const tooEarly = this.minDate && date < this.minDate;
        const tooLate = this.maxDate && date > this.maxDate;
        if (this.method === 'between') {
            if (tooEarly)
                return true;
            if (tooLate)
                return false;
        }
        else if (this.method === 'before') {
            if (tooLate)
                return false;
        }
        else if (this.method === 'after') {
            if (tooEarly)
                return true;
            this.add(date);
            return false;
        }
        return this.add(date);
    }
    /**
     *
     * @param {Date} date that is part of the result.
     * @return {Boolean} whether we are interested in more values.
     */
    add(date) {
        this._result.push(date);
        return true;
    }
    /**
     * 'before' and 'after' return only one date, whereas 'all'
     * and 'between' an array.
     * @return {Date,Array?}
     */
    getValue() {
        const res = this._result;
        switch (this.method) {
            case 'all':
            case 'between':
                return res;
            case 'before':
            case 'after':
            default:
                return (res.length ? res[res.length - 1] : null);
        }
    }
    clone() {
        return new IterResult(this.method, this.args);
    }
}

// CONCATENATED MODULE: ./src/callbackiterresult.ts

/**
 * IterResult subclass that calls a callback function on each add,
 * and stops iterating when the callback returns false.
 */
class callbackiterresult_CallbackIterResult extends IterResult {
    constructor(method, args, iterator) {
        super(method, args);
        this.iterator = iterator;
    }
    add(date) {
        if (this.iterator(date, this._result.length)) {
            this._result.push(date);
            return true;
        }
        return false;
    }
}

// CONCATENATED MODULE: ./src/types.ts
var DateTimeProperty;
(function (DateTimeProperty) {
    DateTimeProperty["START"] = "DTSTART";
    DateTimeProperty["END"] = "DTEND";
})(DateTimeProperty || (DateTimeProperty = {}));
var DateTimeValue;
(function (DateTimeValue) {
    DateTimeValue["DATE"] = "DATE";
    DateTimeValue["DATE_TIME"] = "DATE-TIME";
})(DateTimeValue || (DateTimeValue = {}));
var Frequency;
(function (Frequency) {
    Frequency[Frequency["YEARLY"] = 0] = "YEARLY";
    Frequency[Frequency["MONTHLY"] = 1] = "MONTHLY";
    Frequency[Frequency["WEEKLY"] = 2] = "WEEKLY";
    Frequency[Frequency["DAILY"] = 3] = "DAILY";
    Frequency[Frequency["HOURLY"] = 4] = "HOURLY";
    Frequency[Frequency["MINUTELY"] = 5] = "MINUTELY";
    Frequency[Frequency["SECONDLY"] = 6] = "SECONDLY";
})(Frequency || (Frequency = {}));
function freqIsDailyOrGreater(freq) {
    return freq < Frequency.HOURLY;
}

// CONCATENATED MODULE: ./src/weekday.ts
// =============================================================================
// Weekday
// =============================================================================
const WDAYS = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
class Weekday {
    constructor(weekday, n) {
        if (n === 0)
            throw new Error("Can't create weekday with n == 0");
        this.weekday = weekday;
        this.n = n;
    }
    // __call__ - Cannot call the object directly, do it through
    // e.g. RRule.TH.nth(-1) instead,
    nth(n) {
        return this.n === n ? this : new Weekday(this.weekday, n);
    }
    // __eq__
    equals(other) {
        return this.weekday === other.weekday && this.n === other.n;
    }
    // __repr__
    toString() {
        let s = WDAYS[this.weekday];
        if (this.n)
            s = (this.n > 0 ? '+' : '') + String(this.n) + s;
        return s;
    }
    getJsWeekday() {
        return this.weekday === 6 ? 0 : this.weekday + 1;
    }
}

// CONCATENATED MODULE: ./src/datetime.ts



class Time {
    constructor(hour, minute, second, millisecond) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond || 0;
    }
    getHours() {
        return this.hour;
    }
    getMinutes() {
        return this.minute;
    }
    getSeconds() {
        return this.second;
    }
    getMilliseconds() {
        return this.millisecond;
    }
    getTime() {
        return ((this.hour * 60 * 60 + this.minute * 60 + this.second) * 1000 +
            this.millisecond);
    }
}
class datetime_DateTime extends Time {
    static fromDate(date) {
        return new this(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.valueOf() % 1000);
    }
    constructor(year, month, day, hour, minute, second, millisecond) {
        super(hour, minute, second, millisecond);
        this.year = year;
        this.month = month;
        this.day = day;
    }
    getWeekday() {
        return dateutil_dateutil.getWeekday(new Date(this.getTime()));
    }
    getTime() {
        return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    addYears(years) {
        this.year += years;
    }
    addMonths(months) {
        this.month += months;
        if (this.month > 12) {
            const yearDiv = Math.floor(this.month / 12);
            const monthMod = Object(helpers["i" /* pymod */])(this.month, 12);
            this.month = monthMod;
            this.year += yearDiv;
            if (this.month === 0) {
                this.month = 12;
                --this.year;
            }
        }
    }
    addWeekly(days, wkst) {
        if (wkst > this.getWeekday()) {
            this.day += -(this.getWeekday() + 1 + (6 - wkst)) + days * 7;
        }
        else {
            this.day += -(this.getWeekday() - wkst) + days * 7;
        }
        this.fixDay();
    }
    addDaily(days) {
        this.day += days;
        this.fixDay();
    }
    addHours(hours, filtered, byhour) {
        if (filtered) {
            // Jump to one iteration before next day
            this.hour += Math.floor((23 - this.hour) / hours) * hours;
        }
        while (true) {
            this.hour += hours;
            const { div: dayDiv, mod: hourMod } = Object(helpers["a" /* divmod */])(this.hour, 24);
            if (dayDiv) {
                this.hour = hourMod;
                this.addDaily(dayDiv);
            }
            if (Object(helpers["b" /* empty */])(byhour) || Object(helpers["c" /* includes */])(byhour, this.hour))
                break;
        }
    }
    addMinutes(minutes, filtered, byhour, byminute) {
        if (filtered) {
            // Jump to one iteration before next day
            this.minute +=
                Math.floor((1439 - (this.hour * 60 + this.minute)) / minutes) * minutes;
        }
        while (true) {
            this.minute += minutes;
            const { div: hourDiv, mod: minuteMod } = Object(helpers["a" /* divmod */])(this.minute, 60);
            if (hourDiv) {
                this.minute = minuteMod;
                this.addHours(hourDiv, false, byhour);
            }
            if ((Object(helpers["b" /* empty */])(byhour) || Object(helpers["c" /* includes */])(byhour, this.hour)) &&
                (Object(helpers["b" /* empty */])(byminute) || Object(helpers["c" /* includes */])(byminute, this.minute))) {
                break;
            }
        }
    }
    addSeconds(seconds, filtered, byhour, byminute, bysecond) {
        if (filtered) {
            // Jump to one iteration before next day
            this.second +=
                Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / seconds) * seconds;
        }
        while (true) {
            this.second += seconds;
            const { div: minuteDiv, mod: secondMod } = Object(helpers["a" /* divmod */])(this.second, 60);
            if (minuteDiv) {
                this.second = secondMod;
                this.addMinutes(minuteDiv, false, byhour, byminute);
            }
            if ((Object(helpers["b" /* empty */])(byhour) || Object(helpers["c" /* includes */])(byhour, this.hour)) &&
                (Object(helpers["b" /* empty */])(byminute) || Object(helpers["c" /* includes */])(byminute, this.minute)) &&
                (Object(helpers["b" /* empty */])(bysecond) || Object(helpers["c" /* includes */])(bysecond, this.second))) {
                break;
            }
        }
    }
    fixDay() {
        if (this.day <= 28) {
            return;
        }
        let daysinmonth = dateutil_dateutil.monthRange(this.year, this.month - 1)[1];
        if (this.day <= daysinmonth) {
            return;
        }
        while (this.day > daysinmonth) {
            this.day -= daysinmonth;
            ++this.month;
            if (this.month === 13) {
                this.month = 1;
                ++this.year;
                if (this.year > dateutil_dateutil.MAXYEAR) {
                    return;
                }
            }
            daysinmonth = dateutil_dateutil.monthRange(this.year, this.month - 1)[1];
        }
    }
    add(options, filtered) {
        const { freq, interval, wkst, byhour, byminute, bysecond } = options;
        switch (freq) {
            case Frequency.YEARLY: return this.addYears(interval);
            case Frequency.MONTHLY: return this.addMonths(interval);
            case Frequency.WEEKLY: return this.addWeekly(interval, wkst);
            case Frequency.DAILY: return this.addDaily(interval);
            case Frequency.HOURLY: return this.addHours(interval, filtered, byhour);
            case Frequency.MINUTELY: return this.addMinutes(interval, filtered, byhour, byminute);
            case Frequency.SECONDLY: return this.addSeconds(interval, filtered, byhour, byminute, bysecond);
        }
    }
}

// CONCATENATED MODULE: ./src/parseoptions.ts






function initializeOptions(options) {
    const invalid = [];
    const keys = Object.keys(options);
    const initializedOptions = {};
    // Shallow copy for options and origOptions and check for invalid
    keys.forEach(key => {
        const value = options[key];
        initializedOptions[key] = value;
        if (!Object(helpers["c" /* includes */])(rrule_defaultKeys, key))
            invalid.push(key);
        if (src_dateutil.isDate(value) && !src_dateutil.isValidDate(value))
            invalid.push(key);
    });
    if (invalid.length) {
        throw new Error('Invalid options: ' + invalid.join(', '));
    }
    return initializedOptions;
}
function parseOptions(options) {
    const opts = initializeOptions(options);
    const keys = Object.keys(options);
    // Merge in default options
    rrule_defaultKeys.forEach(key => {
        if (!Object(helpers["c" /* includes */])(keys, key) || !Object(helpers["f" /* isPresent */])(opts[key]))
            opts[key] = DEFAULT_OPTIONS[key];
    });
    if (Object(helpers["f" /* isPresent */])(opts.byeaster))
        opts.freq = rrule_RRule.YEARLY;
    if (!(Object(helpers["f" /* isPresent */])(opts.freq) && rrule_RRule.FREQUENCIES[opts.freq])) {
        throw new Error(`Invalid frequency: ${opts.freq} ${options.freq}`);
    }
    if (!opts.dtstart)
        opts.dtstart = new Date(new Date().setMilliseconds(0));
    if (!Object(helpers["f" /* isPresent */])(opts.wkst)) {
        opts.wkst = rrule_RRule.MO.weekday;
    }
    else if (Object(helpers["e" /* isNumber */])(opts.wkst)) {
        // cool, just keep it like that
    }
    else {
        opts.wkst = opts.wkst.weekday;
    }
    if (Object(helpers["f" /* isPresent */])(opts.bysetpos)) {
        if (Object(helpers["e" /* isNumber */])(opts.bysetpos))
            opts.bysetpos = [opts.bysetpos];
        for (let i = 0; i < opts.bysetpos.length; i++) {
            const v = opts.bysetpos[i];
            if (v === 0 || !(v >= -366 && v <= 366)) {
                throw new Error('bysetpos must be between 1 and 366,' + ' or between -366 and -1');
            }
        }
    }
    if (!(Boolean(opts.byweekno) ||
        Object(helpers["g" /* notEmpty */])(opts.byweekno) ||
        Object(helpers["g" /* notEmpty */])(opts.byyearday) ||
        Boolean(opts.bymonthday) ||
        Object(helpers["g" /* notEmpty */])(opts.bymonthday) ||
        Object(helpers["f" /* isPresent */])(opts.byweekday) ||
        Object(helpers["f" /* isPresent */])(opts.byeaster))) {
        switch (opts.freq) {
            case rrule_RRule.YEARLY:
                if (!opts.bymonth)
                    opts.bymonth = opts.dtstart.getUTCMonth() + 1;
                opts.bymonthday = opts.dtstart.getUTCDate();
                break;
            case rrule_RRule.MONTHLY:
                opts.bymonthday = opts.dtstart.getUTCDate();
                break;
            case rrule_RRule.WEEKLY:
                opts.byweekday = [src_dateutil.getWeekday(opts.dtstart)];
                break;
        }
    }
    // bymonth
    if (Object(helpers["f" /* isPresent */])(opts.bymonth) && !Object(helpers["d" /* isArray */])(opts.bymonth)) {
        opts.bymonth = [opts.bymonth];
    }
    // byyearday
    if (Object(helpers["f" /* isPresent */])(opts.byyearday) &&
        !Object(helpers["d" /* isArray */])(opts.byyearday) &&
        Object(helpers["e" /* isNumber */])(opts.byyearday)) {
        opts.byyearday = [opts.byyearday];
    }
    // bymonthday
    if (!Object(helpers["f" /* isPresent */])(opts.bymonthday)) {
        opts.bymonthday = [];
        opts.bynmonthday = [];
    }
    else if (Object(helpers["d" /* isArray */])(opts.bymonthday)) {
        const bymonthday = [];
        const bynmonthday = [];
        for (let i = 0; i < opts.bymonthday.length; i++) {
            const v = opts.bymonthday[i];
            if (v > 0) {
                bymonthday.push(v);
            }
            else if (v < 0) {
                bynmonthday.push(v);
            }
        }
        opts.bymonthday = bymonthday;
        opts.bynmonthday = bynmonthday;
    }
    else if (opts.bymonthday < 0) {
        opts.bynmonthday = [opts.bymonthday];
        opts.bymonthday = [];
    }
    else {
        opts.bynmonthday = [];
        opts.bymonthday = [opts.bymonthday];
    }
    // byweekno
    if (Object(helpers["f" /* isPresent */])(opts.byweekno) && !Object(helpers["d" /* isArray */])(opts.byweekno)) {
        opts.byweekno = [opts.byweekno];
    }
    // byweekday / bynweekday
    if (!Object(helpers["f" /* isPresent */])(opts.byweekday)) {
        opts.bynweekday = null;
    }
    else if (Object(helpers["e" /* isNumber */])(opts.byweekday)) {
        opts.byweekday = [opts.byweekday];
        opts.bynweekday = null;
    }
    else if (opts.byweekday instanceof Weekday) {
        if (!opts.byweekday.n || opts.freq > rrule_RRule.MONTHLY) {
            opts.byweekday = [opts.byweekday.weekday];
            opts.bynweekday = null;
        }
        else {
            opts.bynweekday = [[opts.byweekday.weekday, opts.byweekday.n]];
            opts.byweekday = null;
        }
    }
    else {
        const byweekday = [];
        const bynweekday = [];
        for (let i = 0; i < opts.byweekday.length; i++) {
            const wday = opts.byweekday[i];
            if (Object(helpers["e" /* isNumber */])(wday)) {
                byweekday.push(wday);
                continue;
            }
            const wd = wday;
            if (!wd.n || opts.freq > rrule_RRule.MONTHLY) {
                byweekday.push(wd.weekday);
            }
            else {
                bynweekday.push([wd.weekday, wd.n]);
            }
        }
        opts.byweekday = Object(helpers["g" /* notEmpty */])(byweekday) ? byweekday : null;
        opts.bynweekday = Object(helpers["g" /* notEmpty */])(bynweekday) ? bynweekday : null;
    }
    // byhour
    if (!Object(helpers["f" /* isPresent */])(opts.byhour)) {
        opts.byhour =
            opts.freq < rrule_RRule.HOURLY ? [opts.dtstart.getUTCHours()] : null;
    }
    else if (Object(helpers["e" /* isNumber */])(opts.byhour)) {
        opts.byhour = [opts.byhour];
    }
    // byminute
    if (!Object(helpers["f" /* isPresent */])(opts.byminute)) {
        opts.byminute =
            opts.freq < rrule_RRule.MINUTELY ? [opts.dtstart.getUTCMinutes()] : null;
    }
    else if (Object(helpers["e" /* isNumber */])(opts.byminute)) {
        opts.byminute = [opts.byminute];
    }
    // bysecond
    if (!Object(helpers["f" /* isPresent */])(opts.bysecond)) {
        opts.bysecond =
            opts.freq < rrule_RRule.SECONDLY ? [opts.dtstart.getUTCSeconds()] : null;
    }
    else if (Object(helpers["e" /* isNumber */])(opts.bysecond)) {
        opts.bysecond = [opts.bysecond];
    }
    return { parsedOptions: opts };
}
function buildTimeset(opts) {
    const millisecondModulo = opts.dtstart.getTime() % 1000;
    if (!freqIsDailyOrGreater(opts.freq)) {
        return [];
    }
    const timeset = [];
    opts.byhour.forEach(hour => {
        opts.byminute.forEach(minute => {
            opts.bysecond.forEach(second => {
                timeset.push(new Time(hour, minute, second, millisecondModulo));
            });
        });
    });
    return timeset;
}

// CONCATENATED MODULE: ./src/parsestring.ts




function parseString(rfcString) {
    const options = rfcString.split('\n').map(parseLine).filter(x => x !== null);
    /**
     * From [RFC 5545](https://tools.ietf.org/html/rfc5545):
     *
     * 3.8.2.2. Date-Time End ("DTEND")
     *
     * The value type of this property MUST be the same as the "DTSTART" property, and its
     * value MUST be later in time than the value of the "DTSTART" property. Furthermore,
     * this property MUST be specified as a date with local time if and only if the
     * "DTSTART" property is also specified as a date with local time.
     */
    return options.reduce((acc, cur) => {
        let existing;
        if (cur.dtstart) {
            if (acc.dtstart) {
                throw new Error('Invalid rule: DTSTART must occur only once');
            }
            if (acc.dtend && acc.dtend.valueOf() <= cur.dtstart.valueOf()) {
                throw new Error('Invalid rule: DTEND must be later than DTSTART');
            }
            existing = acc.dtend;
        }
        if (cur.dtend) {
            if (acc.dtend) {
                throw new Error('Invalid rule: DTEND must occur only once');
            }
            if (acc.dtstart && acc.dtstart.valueOf() >= cur.dtend.valueOf()) {
                throw new Error('Invalid rule: DTEND must be later than DTSTART');
            }
            existing = acc.dtstart;
        }
        if (existing && acc.dtvalue !== cur.dtvalue) {
            // Different value types.
            throw new Error('Invalid rule: DTSTART and DTEND must have the same value type');
        }
        else if (existing && acc.tzid !== cur.tzid) {
            // Different timezones.
            throw new Error('Invalid rule: DTSTART and DTEND must have the same timezone');
        }
        else if (existing && acc.dtfloating !== cur.dtfloating) {
            // Different floating types.
            throw new Error('Invalid rule: DTSTART and DTEND must both be floating');
        }
        return Object.assign(acc, cur);
    }, {}) || {};
}
function parseDateTime(line, prop = DateTimeProperty.START) {
    const options = {};
    const dtWithZone = new RegExp(`${prop}(?:;TZID=([^:=]+?))?(?:;VALUE=(DATE|DATE-TIME))?(?::|=)([^;\\s]+)`, 'i').exec(line);
    if (!dtWithZone) {
        return options;
    }
    const [_, tzid, dtvalue, dt] = dtWithZone;
    if (tzid) {
        if (dt.endsWith('Z')) {
            throw new Error(`Invalid UTC date-time value with timezone: ${line}`);
        }
        options.tzid = tzid;
    }
    else if (dt.endsWith('Z')) {
        options.tzid = 'UTC';
    }
    if (dtvalue === DateTimeValue.DATE) {
        if (prop === DateTimeProperty.START) {
            options.dtstart = src_dateutil.fromRfc5545Date(dt);
        }
        else {
            options.dtend = src_dateutil.fromRfc5545Date(dt);
        }
        options.dtvalue = DateTimeValue.DATE;
        options.dtfloating = true;
        if (options.tzid) {
            throw new Error(`Invalid date value with timezone: ${line}`);
        }
    }
    else { // Default value type is DATE-TIME
        if (prop === DateTimeProperty.START) {
            options.dtstart = src_dateutil.fromRfc5545DateTime(dt);
        }
        else {
            options.dtend = src_dateutil.fromRfc5545DateTime(dt);
        }
        if (dtvalue) {
            options.dtvalue = DateTimeValue.DATE_TIME;
        }
        if (!tzid && !dt.endsWith('Z')) {
            options.dtfloating = true;
        }
    }
    return options;
}
function parseLine(rfcString) {
    rfcString = rfcString.replace(/^\s+|\s+$/, '');
    if (!rfcString.length)
        return null;
    const header = /^([A-Z]+?)[:;]/.exec(rfcString.toUpperCase());
    if (!header) {
        return parseRrule(rfcString);
    }
    const [_, key] = header;
    switch (key.toUpperCase()) {
        case 'RRULE':
        case 'EXRULE':
            return parseRrule(rfcString);
        case 'DTSTART':
            return parseDateTime(rfcString, DateTimeProperty.START);
        case 'DTEND':
            return parseDateTime(rfcString, DateTimeProperty.END);
        default:
            throw new Error(`Unsupported RFC prop ${key} in ${rfcString}`);
    }
}
function parseRrule(line) {
    const strippedLine = line.replace(/^RRULE:/i, '');
    const options = parseDateTime(strippedLine);
    const attrs = line.replace(/^(?:RRULE|EXRULE):/i, '').split(';');
    attrs.forEach(attr => {
        const [key, value] = attr.split('=');
        switch (key.toUpperCase()) {
            case 'FREQ':
                options.freq = Frequency[value.toUpperCase()];
                break;
            case 'WKST':
                options.wkst = Days[value.toUpperCase()];
                break;
            case 'COUNT':
            case 'INTERVAL':
            case 'BYSETPOS':
            case 'BYMONTH':
            case 'BYMONTHDAY':
            case 'BYYEARDAY':
            case 'BYWEEKNO':
            case 'BYHOUR':
            case 'BYMINUTE':
            case 'BYSECOND':
                const num = parseNumber(value);
                const optionKey = key.toLowerCase();
                // @ts-ignore
                options[optionKey] = num;
                break;
            case 'BYWEEKDAY':
            case 'BYDAY':
                options.byweekday = parseWeekday(value);
                break;
            case 'DTSTART':
            case 'TZID':
                // for backwards compatibility
                const dtstart = parseDateTime(line);
                options.tzid = dtstart.tzid;
                options.dtstart = dtstart.dtstart;
                if (dtstart.dtvalue) {
                    options.dtvalue = dtstart.dtvalue;
                }
                if (dtstart.dtfloating) {
                    options.dtfloating = dtstart.dtfloating;
                }
                break;
            case 'UNTIL':
                options.until = src_dateutil.fromRfc5545DateTime(value);
                break;
            case 'BYEASTER':
                options.byeaster = Number(value);
                break;
            default:
                throw new Error("Unknown RRULE property '" + key + "'");
        }
    });
    return options;
}
function parseNumber(value) {
    if (value.indexOf(',') !== -1) {
        const values = value.split(',');
        return values.map(parseIndividualNumber);
    }
    return parseIndividualNumber(value);
}
function parseIndividualNumber(value) {
    if (/^[+-]?\d+$/.test(value)) {
        return Number(value);
    }
    return value;
}
function parseWeekday(value) {
    const days = value.split(',');
    return days.map(day => {
        if (day.length === 2) {
            // MO, TU, ...
            return Days[day]; // wday instanceof Weekday
        }
        // -1MO, +3FR, 1SO, 13TU ...
        const parts = day.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
        const n = Number(parts[1]);
        const wdaypart = parts[2];
        const wday = Days[wdaypart].weekday;
        return new Weekday(wday, n);
    });
}

// EXTERNAL MODULE: external "luxon"
var external_luxon_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/datewithzone.ts


class datewithzone_DateWithZone {
    constructor(date, tzid) {
        this.date = date;
        this.tzid = tzid;
    }
    get isUTC() {
        return !this.tzid || this.tzid.toUpperCase() === 'UTC';
    }
    toString() {
        const datestr = src_dateutil.toRfc5545DateTime(this.date.getTime(), this.isUTC);
        if (!this.isUTC) {
            return `;TZID=${this.tzid}:${datestr}`;
        }
        return `:${datestr}`;
    }
    getTime() {
        return this.date.getTime();
    }
    rezonedDate() {
        if (this.isUTC) {
            return this.date;
        }
        try {
            const datetime = external_luxon_["DateTime"]
                .fromJSDate(this.date);
            const rezoned = datetime.setZone(this.tzid, { keepLocalTime: true });
            return rezoned.toJSDate();
        }
        catch (e) {
            if (e instanceof TypeError) {
                console.error('Using TZID without Luxon available is unsupported. Returned times are in UTC, not the requested time zone');
            }
            return this.date;
        }
    }
}

// CONCATENATED MODULE: ./src/optionstostring.ts






function optionsToString(options) {
    let rrule = [];
    let dtstart = '';
    let dtend = '';
    const keys = Object.keys(options);
    const defaultKeys = Object.keys(DEFAULT_OPTIONS);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === 'tzid')
            continue;
        if (!Object(helpers["c" /* includes */])(defaultKeys, keys[i]))
            continue;
        let key = keys[i].toUpperCase();
        const value = options[keys[i]];
        let outValue = '';
        if (!Object(helpers["f" /* isPresent */])(value) || (Object(helpers["d" /* isArray */])(value) && !value.length))
            continue;
        switch (key) {
            case 'FREQ':
                outValue = rrule_RRule.FREQUENCIES[options.freq];
                break;
            case 'WKST':
                if (Object(helpers["e" /* isNumber */])(value)) {
                    outValue = new Weekday(value).toString();
                }
                else {
                    outValue = value.toString();
                }
                break;
            case 'BYWEEKDAY':
                /*
                NOTE: BYWEEKDAY is a special case.
                RRule() deconstructs the rule.options.byweekday array
                into an array of Weekday arguments.
                On the other hand, rule.origOptions is an array of Weekdays.
                We need to handle both cases here.
                It might be worth change RRule to keep the Weekdays.
      
                Also, BYWEEKDAY (used by RRule) vs. BYDAY (RFC)
      
                */
                key = 'BYDAY';
                outValue = Object(helpers["m" /* toArray */])(value).map(wday => {
                    if (wday instanceof Weekday) {
                        return wday;
                    }
                    if (Object(helpers["d" /* isArray */])(wday)) {
                        return new Weekday(wday[0], wday[1]);
                    }
                    return new Weekday(wday);
                }).toString();
                break;
            case 'DTSTART':
                dtstart = formatDateTime(value, options, DateTimeProperty.START);
                break;
            case 'DTEND':
                dtend = formatDateTime(value, options, DateTimeProperty.END);
                break;
            case 'DTVALUE':
            case 'DTFLOATING':
                break;
            case 'UNTIL':
                /**
                 * From [RFC 5545](https://tools.ietf.org/html/rfc5545):
                 *
                 * 3.3.10. Recurrence Rule
                 *
                 * The value of the UNTIL rule part MUST have the same value type as the
                 * "DTSTART" property. Furthermore, if the "DTSTART" property is specified as
                 * a date with local time, then the UNTIL rule part MUST also be specified as
                 * a date with local time. If the "DTSTART" property is specified as a date
                 * with UTC time or a date with local time and time zone reference, then the
                 * UNTIL rule part MUST be specified as a date with UTC time.
                 */
                if (options.dtvalue === DateTimeValue.DATE) {
                    outValue = src_dateutil.toRfc5545Date(value);
                }
                else {
                    outValue = src_dateutil.toRfc5545DateTime(value, !options.dtfloating);
                }
                break;
            default:
                if (Object(helpers["d" /* isArray */])(value)) {
                    const strValues = [];
                    for (let j = 0; j < value.length; j++) {
                        strValues[j] = String(value[j]);
                    }
                    outValue = strValues.toString();
                }
                else {
                    outValue = String(value);
                }
        }
        if (outValue) {
            rrule.push([key, outValue]);
        }
    }
    const rules = rrule.map(([key, value]) => `${key}=${value.toString()}`).join(';');
    let ruleString = '';
    if (rules !== '') {
        ruleString = `RRULE:${rules}`;
    }
    return [dtstart, dtend, ruleString].filter(x => !!x).join('\n');
}
function formatDateTime(dt, options = {}, prop = DateTimeProperty.START) {
    if (!dt) {
        return '';
    }
    let prefix = prop.toString();
    if (options.dtvalue) {
        prefix += ';VALUE=' + options.dtvalue.toString();
    }
    if (options.dtfloating) {
        if (options.dtvalue === DateTimeValue.DATE) {
            return prefix + ':' + src_dateutil.toRfc5545Date(dt);
        }
        else {
            return prefix + ':' + src_dateutil.toRfc5545DateTime(dt, false);
        }
    }
    return prefix + new datewithzone_DateWithZone(new Date(dt), options.tzid).toString();
}

// CONCATENATED MODULE: ./src/cache.ts



class cache_Cache {
    constructor() {
        this.all = false;
        this.before = [];
        this.after = [];
        this.between = [];
    }
    /**
     * @param {String} what - all/before/after/between
     * @param {Array,Date} value - an array of dates, one date, or null
     * @param {Object?} args - _iter arguments
     */
    _cacheAdd(what, value, args) {
        if (value) {
            value =
                value instanceof Date
                    ? src_dateutil.clone(value)
                    : src_dateutil.cloneDates(value);
        }
        if (what === 'all') {
            this.all = value;
        }
        else {
            args._value = value;
            this[what].push(args);
        }
    }
    /**
     * @return false - not in the cache
     *         null  - cached, but zero occurrences (before/after)
     *         Date  - cached (before/after)
     *         []    - cached, but zero occurrences (all/between)
     *         [Date1, DateN] - cached (all/between)
     */
    _cacheGet(what, args) {
        let cached = false;
        const argsKeys = args ? Object.keys(args) : [];
        const findCacheDiff = function (item) {
            for (let i = 0; i < argsKeys.length; i++) {
                const key = argsKeys[i];
                if (String(args[key]) !== String(item[key])) {
                    return true;
                }
            }
            return false;
        };
        const cachedObject = this[what];
        if (what === 'all') {
            cached = this.all;
        }
        else if (Object(helpers["d" /* isArray */])(cachedObject)) {
            // Let's see whether we've already called the
            // 'what' method with the same 'args'
            for (let i = 0; i < cachedObject.length; i++) {
                const item = cachedObject[i];
                if (argsKeys.length && findCacheDiff(item))
                    continue;
                cached = item._value;
                break;
            }
        }
        if (!cached && this.all) {
            // Not in the cache, but we already know all the occurrences,
            // so we can find the correct dates from the cached ones.
            const iterResult = new IterResult(what, args);
            for (let i = 0; i < this.all.length; i++) {
                if (!iterResult.accept(this.all[i]))
                    break;
            }
            cached = iterResult.getValue();
            this._cacheAdd(what, cached, args);
        }
        return Object(helpers["d" /* isArray */])(cached)
            ? src_dateutil.cloneDates(cached)
            : cached instanceof Date
                ? src_dateutil.clone(cached)
                : cached;
    }
}

// CONCATENATED MODULE: ./src/masks.ts

// =============================================================================
// Date masks
// =============================================================================
// Every mask is 7 days longer to handle cross-year weekly periods.
const M365MASK = [
    ...Object(helpers["k" /* repeat */])(1, 31),
    ...Object(helpers["k" /* repeat */])(2, 28),
    ...Object(helpers["k" /* repeat */])(3, 31),
    ...Object(helpers["k" /* repeat */])(4, 30),
    ...Object(helpers["k" /* repeat */])(5, 31),
    ...Object(helpers["k" /* repeat */])(6, 30),
    ...Object(helpers["k" /* repeat */])(7, 31),
    ...Object(helpers["k" /* repeat */])(8, 31),
    ...Object(helpers["k" /* repeat */])(9, 30),
    ...Object(helpers["k" /* repeat */])(10, 31),
    ...Object(helpers["k" /* repeat */])(11, 30),
    ...Object(helpers["k" /* repeat */])(12, 31),
    ...Object(helpers["k" /* repeat */])(1, 7)
];
const M366MASK = [
    ...Object(helpers["k" /* repeat */])(1, 31),
    ...Object(helpers["k" /* repeat */])(2, 29),
    ...Object(helpers["k" /* repeat */])(3, 31),
    ...Object(helpers["k" /* repeat */])(4, 30),
    ...Object(helpers["k" /* repeat */])(5, 31),
    ...Object(helpers["k" /* repeat */])(6, 30),
    ...Object(helpers["k" /* repeat */])(7, 31),
    ...Object(helpers["k" /* repeat */])(8, 31),
    ...Object(helpers["k" /* repeat */])(9, 30),
    ...Object(helpers["k" /* repeat */])(10, 31),
    ...Object(helpers["k" /* repeat */])(11, 30),
    ...Object(helpers["k" /* repeat */])(12, 31),
    ...Object(helpers["k" /* repeat */])(1, 7)
];
const M28 = Object(helpers["j" /* range */])(1, 29);
const M29 = Object(helpers["j" /* range */])(1, 30);
const M30 = Object(helpers["j" /* range */])(1, 31);
const M31 = Object(helpers["j" /* range */])(1, 32);
const MDAY366MASK = [
    ...M31,
    ...M29,
    ...M31,
    ...M30,
    ...M31,
    ...M30,
    ...M31,
    ...M31,
    ...M30,
    ...M31,
    ...M30,
    ...M31,
    ...M31.slice(0, 7)
];
const MDAY365MASK = [
    ...M31,
    ...M28,
    ...M31,
    ...M30,
    ...M31,
    ...M30,
    ...M31,
    ...M31,
    ...M30,
    ...M31,
    ...M30,
    ...M31,
    ...M31.slice(0, 7)
];
const NM28 = Object(helpers["j" /* range */])(-28, 0);
const NM29 = Object(helpers["j" /* range */])(-29, 0);
const NM30 = Object(helpers["j" /* range */])(-30, 0);
const NM31 = Object(helpers["j" /* range */])(-31, 0);
const NMDAY366MASK = [
    ...NM31,
    ...NM29,
    ...NM31,
    ...NM30,
    ...NM31,
    ...NM30,
    ...NM31,
    ...NM31,
    ...NM30,
    ...NM31,
    ...NM30,
    ...NM31,
    ...NM31.slice(0, 7)
];
const NMDAY365MASK = [
    ...NM31,
    ...NM28,
    ...NM31,
    ...NM30,
    ...NM31,
    ...NM30,
    ...NM31,
    ...NM31,
    ...NM30,
    ...NM31,
    ...NM30,
    ...NM31,
    ...NM31.slice(0, 7)
];
const M366RANGE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
const M365RANGE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
const WDAYMASK = (function () {
    let wdaymask = [];
    for (let i = 0; i < 55; i++)
        wdaymask = wdaymask.concat(Object(helpers["j" /* range */])(7));
    return wdaymask;
})();


// CONCATENATED MODULE: ./src/iterinfo/yearinfo.ts



function rebuildYear(year, options) {
    const firstyday = new Date(Date.UTC(year, 0, 1));
    const yearlen = src_dateutil.isLeapYear(year) ? 366 : 365;
    const nextyearlen = src_dateutil.isLeapYear(year + 1) ? 366 : 365;
    const yearordinal = src_dateutil.toOrdinal(firstyday);
    const yearweekday = src_dateutil.getWeekday(firstyday);
    const result = Object.assign({ yearlen,
        nextyearlen,
        yearordinal,
        yearweekday }, baseYearMasks(year), { wnomask: null });
    if (Object(helpers["b" /* empty */])(options.byweekno)) {
        return result;
    }
    result.wnomask = Object(helpers["k" /* repeat */])(0, yearlen + 7);
    let firstwkst;
    let wyearlen;
    let no1wkst = firstwkst = Object(helpers["i" /* pymod */])(7 - yearweekday + options.wkst, 7);
    if (no1wkst >= 4) {
        no1wkst = 0;
        // Number of days in the year, plus the days we got
        // from last year.
        wyearlen =
            result.yearlen + Object(helpers["i" /* pymod */])(yearweekday - options.wkst, 7);
    }
    else {
        // Number of days in the year, minus the days we
        // left in last year.
        wyearlen = yearlen - no1wkst;
    }
    const div = Math.floor(wyearlen / 7);
    const mod = Object(helpers["i" /* pymod */])(wyearlen, 7);
    const numweeks = Math.floor(div + mod / 4);
    for (let j = 0; j < options.byweekno.length; j++) {
        let n = options.byweekno[j];
        if (n < 0) {
            n += numweeks + 1;
        }
        if (!(n > 0 && n <= numweeks)) {
            continue;
        }
        let i;
        if (n > 1) {
            i = no1wkst + (n - 1) * 7;
            if (no1wkst !== firstwkst) {
                i -= 7 - firstwkst;
            }
        }
        else {
            i = no1wkst;
        }
        for (let k = 0; k < 7; k++) {
            result.wnomask[i] = 1;
            i++;
            if (result.wdaymask[i] === options.wkst)
                break;
        }
    }
    if (Object(helpers["c" /* includes */])(options.byweekno, 1)) {
        // Check week number 1 of next year as well
        // orig-TODO : Check -numweeks for next year.
        let i = no1wkst + numweeks * 7;
        if (no1wkst !== firstwkst)
            i -= 7 - firstwkst;
        if (i < yearlen) {
            // If week starts in next year, we
            // don't care about it.
            for (let j = 0; j < 7; j++) {
                result.wnomask[i] = 1;
                i += 1;
                if (result.wdaymask[i] === options.wkst)
                    break;
            }
        }
    }
    if (no1wkst) {
        // Check last week number of last year as
        // well. If no1wkst is 0, either the year
        // started on week start, or week number 1
        // got days from last year, so there are no
        // days from last year's last week number in
        // this year.
        let lnumweeks;
        if (!Object(helpers["c" /* includes */])(options.byweekno, -1)) {
            const lyearweekday = src_dateutil.getWeekday(new Date(Date.UTC(year - 1, 0, 1)));
            let lno1wkst = Object(helpers["i" /* pymod */])(7 - lyearweekday.valueOf() + options.wkst, 7);
            const lyearlen = src_dateutil.isLeapYear(year - 1) ? 366 : 365;
            let weekst;
            if (lno1wkst >= 4) {
                lno1wkst = 0;
                weekst = lyearlen + Object(helpers["i" /* pymod */])(lyearweekday - options.wkst, 7);
            }
            else {
                weekst = yearlen - no1wkst;
            }
            lnumweeks = Math.floor(52 + Object(helpers["i" /* pymod */])(weekst, 7) / 4);
        }
        else {
            lnumweeks = -1;
        }
        if (Object(helpers["c" /* includes */])(options.byweekno, lnumweeks)) {
            for (let i = 0; i < no1wkst; i++)
                result.wnomask[i] = 1;
        }
    }
    return result;
}
function baseYearMasks(year) {
    const yearlen = src_dateutil.isLeapYear(year) ? 366 : 365;
    const firstyday = new Date(Date.UTC(year, 0, 1));
    const wday = src_dateutil.getWeekday(firstyday);
    if (yearlen === 365) {
        return {
            mmask: M365MASK,
            mdaymask: MDAY365MASK,
            nmdaymask: NMDAY365MASK,
            wdaymask: WDAYMASK.slice(wday),
            mrange: M365RANGE
        };
    }
    return {
        mmask: M366MASK,
        mdaymask: MDAY366MASK,
        nmdaymask: NMDAY366MASK,
        wdaymask: WDAYMASK.slice(wday),
        mrange: M366RANGE
    };
}

// CONCATENATED MODULE: ./src/iterinfo/monthinfo.ts


function rebuildMonth(year, month, yearlen, mrange, wdaymask, options) {
    const result = {
        lastyear: year,
        lastmonth: month,
        nwdaymask: []
    };
    let ranges = [];
    if (options.freq === rrule_RRule.YEARLY) {
        if (Object(helpers["b" /* empty */])(options.bymonth)) {
            ranges = [[0, yearlen]];
        }
        else {
            for (let j = 0; j < options.bymonth.length; j++) {
                month = options.bymonth[j];
                ranges.push(mrange.slice(month - 1, month + 1));
            }
        }
    }
    else if (options.freq === rrule_RRule.MONTHLY) {
        ranges = [mrange.slice(month - 1, month + 1)];
    }
    if (Object(helpers["b" /* empty */])(ranges)) {
        return result;
    }
    // Weekly frequency won't get here, so we may not
    // care about cross-year weekly periods.
    result.nwdaymask = Object(helpers["k" /* repeat */])(0, yearlen);
    for (let j = 0; j < ranges.length; j++) {
        const rang = ranges[j];
        const first = rang[0];
        const last = rang[1] - 1;
        for (let k = 0; k < options.bynweekday.length; k++) {
            let i;
            const [wday, n] = options.bynweekday[k];
            if (n < 0) {
                i = last + (n + 1) * 7;
                i -= Object(helpers["i" /* pymod */])(wdaymask[i] - wday, 7);
            }
            else {
                i = first + (n - 1) * 7;
                i += Object(helpers["i" /* pymod */])(7 - wdaymask[i] + wday, 7);
            }
            if (first <= i && i <= last)
                result.nwdaymask[i] = 1;
        }
    }
    return result;
}

// CONCATENATED MODULE: ./src/iterinfo/easter.ts
function easter(y, offset = 0) {
    const a = y % 19;
    const b = Math.floor(y / 100);
    const c = y % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = Math.floor(19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = Math.floor(32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    const date = Date.UTC(y, month - 1, day + offset);
    const yearStart = Date.UTC(y, 0, 1);
    return [Math.ceil((date - yearStart) / (1000 * 60 * 60 * 24))];
}

// CONCATENATED MODULE: ./src/iterinfo/index.ts







// =============================================================================
// Iterinfo
// =============================================================================
class iterinfo_Iterinfo {
    constructor(options) {
        this.options = options;
    }
    rebuild(year, month) {
        const options = this.options;
        if (year !== this.lastyear) {
            this.yearinfo = rebuildYear(year, options);
        }
        if (Object(helpers["g" /* notEmpty */])(options.bynweekday) &&
            (month !== this.lastmonth || year !== this.lastyear)) {
            const { yearlen, mrange, wdaymask } = this.yearinfo;
            this.monthinfo = rebuildMonth(year, month, yearlen, mrange, wdaymask, options);
        }
        if (Object(helpers["f" /* isPresent */])(options.byeaster)) {
            this.eastermask = easter(year, options.byeaster);
        }
    }
    get lastyear() {
        return this.monthinfo ? this.monthinfo.lastyear : null;
    }
    get lastmonth() {
        return this.monthinfo ? this.monthinfo.lastmonth : null;
    }
    get yearlen() {
        return this.yearinfo.yearlen;
    }
    get yearordinal() {
        return this.yearinfo.yearordinal;
    }
    get mrange() {
        return this.yearinfo.mrange;
    }
    get wdaymask() {
        return this.yearinfo.wdaymask;
    }
    get mmask() {
        return this.yearinfo.mmask;
    }
    get wnomask() {
        return this.yearinfo.wnomask;
    }
    get nwdaymask() {
        return this.monthinfo ? this.monthinfo.nwdaymask : [];
    }
    get nextyearlen() {
        return this.yearinfo.nextyearlen;
    }
    get mdaymask() {
        return this.yearinfo.mdaymask;
    }
    get nmdaymask() {
        return this.yearinfo.nmdaymask;
    }
    ydayset() {
        return [Object(helpers["j" /* range */])(this.yearlen), 0, this.yearlen];
    }
    mdayset(_, month, __) {
        const start = this.mrange[month - 1];
        const end = this.mrange[month];
        const set = Object(helpers["k" /* repeat */])(null, this.yearlen);
        for (let i = start; i < end; i++)
            set[i] = i;
        return [set, start, end];
    }
    wdayset(year, month, day) {
        // We need to handle cross-year weeks here.
        const set = Object(helpers["k" /* repeat */])(null, this.yearlen + 7);
        let i = src_dateutil.toOrdinal(new Date(Date.UTC(year, month - 1, day))) -
            this.yearordinal;
        const start = i;
        for (let j = 0; j < 7; j++) {
            set[i] = i;
            ++i;
            if (this.wdaymask[i] === this.options.wkst)
                break;
        }
        return [set, start, i];
    }
    ddayset(year, month, day) {
        const set = Object(helpers["k" /* repeat */])(null, this.yearlen);
        const i = src_dateutil.toOrdinal(new Date(Date.UTC(year, month - 1, day))) -
            this.yearordinal;
        set[i] = i;
        return [set, i, i + 1];
    }
    htimeset(hour, _, second, millisecond) {
        let set = [];
        this.options.byminute.forEach(minute => {
            set = set.concat(this.mtimeset(hour, minute, second, millisecond));
        });
        src_dateutil.sort(set);
        return set;
    }
    mtimeset(hour, minute, _, millisecond) {
        const set = this.options.bysecond.map(second => new Time(hour, minute, second, millisecond));
        src_dateutil.sort(set);
        return set;
    }
    stimeset(hour, minute, second, millisecond) {
        return [new Time(hour, minute, second, millisecond)];
    }
    getdayset(freq) {
        switch (freq) {
            case Frequency.YEARLY: return this.ydayset.bind(this);
            case Frequency.MONTHLY: return this.mdayset.bind(this);
            case Frequency.WEEKLY: return this.wdayset.bind(this);
            case Frequency.DAILY: return this.ddayset.bind(this);
            default: return this.ddayset.bind(this);
        }
    }
    gettimeset(freq) {
        switch (freq) {
            case Frequency.HOURLY: return this.htimeset.bind(this);
            case Frequency.MINUTELY: return this.mtimeset.bind(this);
            case Frequency.SECONDLY: return this.stimeset.bind(this);
        }
    }
}

// CONCATENATED MODULE: ./src/iter/poslist.ts


function buildPoslist(bysetpos, timeset, start, end, ii, dayset) {
    const poslist = [];
    for (let j = 0; j < bysetpos.length; j++) {
        let daypos;
        let timepos;
        const pos = bysetpos[j];
        if (pos < 0) {
            daypos = Math.floor(pos / timeset.length);
            timepos = Object(helpers["i" /* pymod */])(pos, timeset.length);
        }
        else {
            daypos = Math.floor((pos - 1) / timeset.length);
            timepos = Object(helpers["i" /* pymod */])(pos - 1, timeset.length);
        }
        const tmp = [];
        for (let k = start; k < end; k++) {
            const val = dayset[k];
            if (!Object(helpers["f" /* isPresent */])(val))
                continue;
            tmp.push(val);
        }
        let i;
        if (daypos < 0) {
            i = tmp.slice(daypos)[0];
        }
        else {
            i = tmp[daypos];
        }
        const time = timeset[timepos];
        const date = src_dateutil.fromOrdinal(ii.yearordinal + i);
        const res = src_dateutil.combine(date, time);
        // XXX: can this ever be in the array?
        // - compare the actual date instead?
        if (!Object(helpers["c" /* includes */])(poslist, res))
            poslist.push(res);
    }
    src_dateutil.sort(poslist);
    return poslist;
}

// CONCATENATED MODULE: ./src/iter/index.ts









function iter(iterResult, options) {
    const { dtstart, freq, interval, until, bysetpos } = options;
    let count = options.count;
    if (count === 0 || interval === 0) {
        return emitResult(iterResult);
    }
    let counterDate = datetime_DateTime.fromDate(dtstart);
    const ii = new iterinfo_Iterinfo(options);
    ii.rebuild(counterDate.year, counterDate.month);
    let timeset = makeTimeset(ii, counterDate, options);
    while (true) {
        let [dayset, start, end] = ii.getdayset(freq)(counterDate.year, counterDate.month, counterDate.day);
        let filtered = removeFilteredDays(dayset, start, end, ii, options);
        if (Object(helpers["g" /* notEmpty */])(bysetpos)) {
            const poslist = buildPoslist(bysetpos, timeset, start, end, ii, dayset);
            for (let j = 0; j < poslist.length; j++) {
                const res = poslist[j];
                if (until && res > until) {
                    return emitResult(iterResult);
                }
                if (res >= dtstart) {
                    const rezonedDate = rezoneIfNeeded(res, options);
                    if (!iterResult.accept(rezonedDate)) {
                        return emitResult(iterResult);
                    }
                    if (count) {
                        --count;
                        if (!count) {
                            return emitResult(iterResult);
                        }
                    }
                }
            }
        }
        else {
            for (let j = start; j < end; j++) {
                const currentDay = dayset[j];
                if (!Object(helpers["f" /* isPresent */])(currentDay)) {
                    continue;
                }
                const date = src_dateutil.fromOrdinal(ii.yearordinal + currentDay);
                for (let k = 0; k < timeset.length; k++) {
                    const time = timeset[k];
                    const res = src_dateutil.combine(date, time);
                    if (until && res > until) {
                        return emitResult(iterResult);
                    }
                    if (res >= dtstart) {
                        const rezonedDate = rezoneIfNeeded(res, options);
                        if (!iterResult.accept(rezonedDate)) {
                            return emitResult(iterResult);
                        }
                        if (count) {
                            --count;
                            if (!count) {
                                return emitResult(iterResult);
                            }
                        }
                    }
                }
            }
        }
        if (options.interval === 0) {
            return emitResult(iterResult);
        }
        // Handle frequency and interval
        counterDate.add(options, filtered);
        if (counterDate.year > src_dateutil.MAXYEAR) {
            return emitResult(iterResult);
        }
        if (!freqIsDailyOrGreater(freq)) {
            timeset = ii.gettimeset(freq)(counterDate.hour, counterDate.minute, counterDate.second, 0);
        }
        ii.rebuild(counterDate.year, counterDate.month);
    }
}
function isFiltered(ii, currentDay, options) {
    const { bymonth, byweekno, byweekday, byeaster, bymonthday, bynmonthday, byyearday } = options;
    return ((Object(helpers["g" /* notEmpty */])(bymonth) && !Object(helpers["c" /* includes */])(bymonth, ii.mmask[currentDay])) ||
        (Object(helpers["g" /* notEmpty */])(byweekno) && !ii.wnomask[currentDay]) ||
        (Object(helpers["g" /* notEmpty */])(byweekday) && !Object(helpers["c" /* includes */])(byweekday, ii.wdaymask[currentDay])) ||
        (Object(helpers["g" /* notEmpty */])(ii.nwdaymask) && !ii.nwdaymask[currentDay]) ||
        (byeaster !== null && !Object(helpers["c" /* includes */])(ii.eastermask, currentDay)) ||
        ((Object(helpers["g" /* notEmpty */])(bymonthday) || Object(helpers["g" /* notEmpty */])(bynmonthday)) &&
            !Object(helpers["c" /* includes */])(bymonthday, ii.mdaymask[currentDay]) &&
            !Object(helpers["c" /* includes */])(bynmonthday, ii.nmdaymask[currentDay])) ||
        (Object(helpers["g" /* notEmpty */])(byyearday) &&
            ((currentDay < ii.yearlen &&
                !Object(helpers["c" /* includes */])(byyearday, currentDay + 1) &&
                !Object(helpers["c" /* includes */])(byyearday, -ii.yearlen + currentDay)) ||
                (currentDay >= ii.yearlen &&
                    !Object(helpers["c" /* includes */])(byyearday, currentDay + 1 - ii.yearlen) &&
                    !Object(helpers["c" /* includes */])(byyearday, -ii.nextyearlen + currentDay - ii.yearlen)))));
}
function rezoneIfNeeded(date, options) {
    return new datewithzone_DateWithZone(date, options.tzid).rezonedDate();
}
function emitResult(iterResult) {
    return iterResult.getValue();
}
function removeFilteredDays(dayset, start, end, ii, options) {
    let filtered = false;
    for (let dayCounter = start; dayCounter < end; dayCounter++) {
        let currentDay = dayset[dayCounter];
        filtered = isFiltered(ii, currentDay, options);
        if (filtered)
            dayset[currentDay] = null;
    }
    return filtered;
}
function makeTimeset(ii, counterDate, options) {
    const { freq, byhour, byminute, bysecond } = options;
    if (freqIsDailyOrGreater(freq)) {
        return buildTimeset(options);
    }
    if ((freq >= rrule_RRule.HOURLY &&
        Object(helpers["g" /* notEmpty */])(byhour) &&
        !Object(helpers["c" /* includes */])(byhour, counterDate.hour)) ||
        (freq >= rrule_RRule.MINUTELY &&
            Object(helpers["g" /* notEmpty */])(byminute) &&
            !Object(helpers["c" /* includes */])(byminute, counterDate.minute)) ||
        (freq >= rrule_RRule.SECONDLY &&
            Object(helpers["g" /* notEmpty */])(bysecond) &&
            !Object(helpers["c" /* includes */])(bysecond, counterDate.second))) {
        return [];
    }
    return ii.gettimeset(freq)(counterDate.hour, counterDate.minute, counterDate.second, counterDate.millisecond);
}

// CONCATENATED MODULE: ./src/rrule.ts










const getnlp = function () {
    // Lazy, runtime import to avoid circular refs.
    if (!getnlp._nlp) {
        getnlp._nlp = __webpack_require__(3);
    }
    return getnlp._nlp;
};
// =============================================================================
// RRule
// =============================================================================
const Days = {
    MO: new Weekday(0),
    TU: new Weekday(1),
    WE: new Weekday(2),
    TH: new Weekday(3),
    FR: new Weekday(4),
    SA: new Weekday(5),
    SU: new Weekday(6)
};
const DEFAULT_OPTIONS = {
    freq: Frequency.YEARLY,
    dtstart: null,
    dtend: null,
    dtvalue: DateTimeValue.DATE_TIME,
    dtfloating: false,
    interval: 1,
    wkst: Days.MO,
    count: null,
    until: null,
    tzid: null,
    bysetpos: null,
    bymonth: null,
    bymonthday: null,
    bynmonthday: null,
    byyearday: null,
    byweekno: null,
    byweekday: null,
    bynweekday: null,
    byhour: null,
    byminute: null,
    bysecond: null,
    byeaster: null
};
const rrule_defaultKeys = Object.keys(DEFAULT_OPTIONS);
/**
 *
 * @param {Options?} options - see <http://labix.org/python-dateutil/#head-cf004ee9a75592797e076752b2a889c10f445418>
 *        The only required option is `freq`, one of RRule.YEARLY, RRule.MONTHLY, ...
 * @constructor
 */
class rrule_RRule {
    constructor(options = {}, noCache = false) {
        // RFC string
        this._cache = noCache ? null : new cache_Cache();
        // used by toString()
        this.origOptions = initializeOptions(options);
        const { parsedOptions } = parseOptions(options);
        this.options = parsedOptions;
    }
    static parseText(text, language) {
        return getnlp().parseText(text, language);
    }
    static fromText(text, language) {
        return getnlp().fromText(text, language);
    }
    static fromString(str) {
        /* From [RFC 5545](https://tools.ietf.org/html/rfc5545):
         *
         * 3.3.10. Recurrence Rule
         *
         * The BYSECOND, BYMINUTE, and BYHOUR rule parts MUST NOT be specified when the
         * associated "DTSTART" property has a DATE value type. These rule parts MUST be
         * ignored in RECUR value that violate the above requirement (e.g., generated by
         * applications that pre-date this revision of iCalendar).
         *
         * TODO: ^^^
         */
        return new rrule_RRule(rrule_RRule.parseString(str) || undefined);
    }
    _iter(iterResult) {
        return iter(iterResult, this.options);
    }
    _cacheGet(what, args) {
        if (!this._cache)
            return false;
        return this._cache._cacheGet(what, args);
    }
    _cacheAdd(what, value, args) {
        if (!this._cache)
            return;
        return this._cache._cacheAdd(what, value, args);
    }
    /**
     * @param {Function} iterator - optional function that will be called
     *                   on each date that is added. It can return false
     *                   to stop the iteration.
     * @return Array containing all recurrences.
     */
    all(iterator) {
        if (iterator) {
            return this._iter(new callbackiterresult_CallbackIterResult('all', {}, iterator));
        }
        let result = this._cacheGet('all');
        if (result === false) {
            result = this._iter(new IterResult('all', {}));
            this._cacheAdd('all', result);
        }
        return result;
    }
    /**
     * Returns all the occurrences of the rrule between after and before.
     * The inc keyword defines what happens if after and/or before are
     * themselves occurrences. With inc == True, they will be included in the
     * list, if they are found in the recurrence set.
     * @return Array
     */
    between(after, before, inc = false, iterator) {
        if (!src_dateutil.isValidDate(after) || !src_dateutil.isValidDate(before))
            throw new Error('Invalid date passed in to RRule.between');
        const args = {
            before,
            after,
            inc
        };
        if (iterator) {
            return this._iter(new callbackiterresult_CallbackIterResult('between', args, iterator));
        }
        let result = this._cacheGet('between', args);
        if (result === false) {
            result = this._iter(new IterResult('between', args));
            this._cacheAdd('between', result, args);
        }
        return result;
    }
    /**
     * Returns the last recurrence before the given datetime instance.
     * The inc keyword defines what happens if dt is an occurrence.
     * With inc == True, if dt itself is an occurrence, it will be returned.
     * @return Date or null
     */
    before(dt, inc = false) {
        if (!src_dateutil.isValidDate(dt))
            throw new Error('Invalid date passed in to RRule.before');
        const args = { dt: dt, inc: inc };
        let result = this._cacheGet('before', args);
        if (result === false) {
            result = this._iter(new IterResult('before', args));
            this._cacheAdd('before', result, args);
        }
        return result;
    }
    /**
     * Returns the first recurrence after the given datetime instance.
     * The inc keyword defines what happens if dt is an occurrence.
     * With inc == True, if dt itself is an occurrence, it will be returned.
     * @return Date or null
     */
    after(dt, inc = false) {
        if (!src_dateutil.isValidDate(dt))
            throw new Error('Invalid date passed in to RRule.after');
        const args = { dt: dt, inc: inc };
        let result = this._cacheGet('after', args);
        if (result === false) {
            result = this._iter(new IterResult('after', args));
            this._cacheAdd('after', result, args);
        }
        return result;
    }
    /**
     * Returns the number of recurrences in this set. It will have go trough
     * the whole recurrence, if this hasn't been done before.
     */
    count() {
        return this.all().length;
    }
    /**
     * Converts the rrule into its string representation
     * @see <http://www.ietf.org/rfc/rfc2445.txt>
     * @return String
     */
    toString() {
        return optionsToString(this.origOptions);
    }
    /**
     * Will convert all rules described in nlp:ToText
     * to text.
     */
    toText(gettext, language, dateFormatter) {
        return getnlp().toText(this, gettext, language, dateFormatter);
    }
    isFullyConvertibleToText() {
        return getnlp().isFullyConvertible(this);
    }
    /**
     * @return a RRule instance with the same freq and options
     *          as this one (cache is not cloned)
     */
    clone() {
        return new rrule_RRule(this.origOptions);
    }
}
// RRule class 'constants'
rrule_RRule.FREQUENCIES = [
    'YEARLY',
    'MONTHLY',
    'WEEKLY',
    'DAILY',
    'HOURLY',
    'MINUTELY',
    'SECONDLY'
];
rrule_RRule.YEARLY = Frequency.YEARLY;
rrule_RRule.MONTHLY = Frequency.MONTHLY;
rrule_RRule.WEEKLY = Frequency.WEEKLY;
rrule_RRule.DAILY = Frequency.DAILY;
rrule_RRule.HOURLY = Frequency.HOURLY;
rrule_RRule.MINUTELY = Frequency.MINUTELY;
rrule_RRule.SECONDLY = Frequency.SECONDLY;
rrule_RRule.MO = Days.MO;
rrule_RRule.TU = Days.TU;
rrule_RRule.WE = Days.WE;
rrule_RRule.TH = Days.TH;
rrule_RRule.FR = Days.FR;
rrule_RRule.SA = Days.SA;
rrule_RRule.SU = Days.SU;
rrule_RRule.parseString = parseString;
rrule_RRule.optionsToString = optionsToString;

// CONCATENATED MODULE: ./src/iterset.ts



function iterSet(iterResult, _rrule, _exrule, _rdate, _exdate, tzid) {
    const _exdateHash = {};
    const _accept = iterResult.accept;
    function evalExdate(after, before) {
        _exrule.forEach(function (rrule) {
            rrule.between(after, before, true).forEach(function (date) {
                _exdateHash[Number(date)] = true;
            });
        });
    }
    _exdate.forEach(function (date) {
        const zonedDate = new datewithzone_DateWithZone(date, tzid).rezonedDate();
        _exdateHash[Number(zonedDate)] = true;
    });
    iterResult.accept = function (date) {
        const dt = Number(date);
        if (!_exdateHash[dt]) {
            evalExdate(new Date(dt - 1), new Date(dt + 1));
            if (!_exdateHash[dt]) {
                _exdateHash[dt] = true;
                return _accept.call(this, date);
            }
        }
        return true;
    };
    if (iterResult.method === 'between') {
        evalExdate(iterResult.args.after, iterResult.args.before);
        iterResult.accept = function (date) {
            const dt = Number(date);
            if (!_exdateHash[dt]) {
                _exdateHash[dt] = true;
                return _accept.call(this, date);
            }
            return true;
        };
    }
    for (let i = 0; i < _rdate.length; i++) {
        const zonedDate = new datewithzone_DateWithZone(_rdate[i], tzid).rezonedDate();
        if (!iterResult.accept(new Date(zonedDate.getTime())))
            break;
    }
    _rrule.forEach(function (rrule) {
        iter(iterResult, rrule.options);
    });
    const res = iterResult._result;
    src_dateutil.sort(res);
    switch (iterResult.method) {
        case 'all':
        case 'between':
            return res;
        case 'before':
            return ((res.length && res[res.length - 1]) || null);
        case 'after':
        default:
            return ((res.length && res[0]) || null);
    }
}

// CONCATENATED MODULE: ./src/rrulestr.ts






/**
 * RRuleStr
 *  To parse a set of rrule strings
 */
const rrulestr_DEFAULT_OPTIONS = {
    dtstart: null,
    dtend: null,
    dtvalue: null,
    dtfloating: false,
    cache: false,
    unfold: false,
    forceset: false,
    compatible: false,
    tzid: null
};
function parseInput(s, options) {
    let rrulevals = [];
    let rdatevals = [];
    let exrulevals = [];
    let exdatevals = [];
    let { dtstart, dtfloating, dtvalue, tzid } = parseDateTime(s);
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
                    else if (dtstart && dtfloating !== parsed.dtfloating) {
                        // Different floating types.
                        throw new Error('Invalid rule: DTSTART and DTEND must both be floating');
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
        dtfloating,
        tzid,
        rrulevals,
        rdatevals,
        exrulevals,
        exdatevals
    };
}
function buildRule(s, options) {
    const { rrulevals, rdatevals, exrulevals, exdatevals, dtstart, dtend, dtvalue, dtfloating, tzid } = parseInput(s, options);
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
        const rset = new rruleset_RRuleSet(noCache);
        rset.dtstart(dtstart);
        rset.dtend(dtend);
        rset.tzid(tzid || undefined);
        rrulevals.forEach(val => {
            rset.rrule(new rrule_RRule(groomRruleOptions(val, dtstart, dtend, dtvalue, dtfloating, tzid), noCache));
        });
        rdatevals.forEach(date => {
            rset.rdate(date);
        });
        exrulevals.forEach(val => {
            rset.exrule(new rrule_RRule(groomRruleOptions(val, dtstart, dtend, dtvalue, dtfloating, tzid), noCache));
        });
        exdatevals.forEach(date => {
            rset.exdate(date);
        });
        if (options.compatible && options.dtstart)
            rset.rdate(dtstart);
        return rset;
    }
    const val = rrulevals[0] || {};
    return new rrule_RRule(groomRruleOptions(val, val.dtstart || options.dtstart || dtstart, val.dtend || options.dtend || dtend, val.dtvalue || options.dtvalue || dtvalue, val.dtfloating || options.dtfloating || dtfloating, val.tzid || options.tzid || tzid), noCache);
}
function rrulestr(s, options = {}) {
    return buildRule(s, rrulestr_initializeOptions(options));
}
function groomRruleOptions(val, dtstart, dtend, dtvalue, dtfloating, tzid) {
    return Object.assign({}, val, { dtstart,
        dtend,
        dtvalue,
        dtfloating,
        tzid });
}
function rrulestr_initializeOptions(options) {
    const invalid = [];
    const keys = Object.keys(options);
    const defaultKeys = Object.keys(rrulestr_DEFAULT_OPTIONS);
    keys.forEach(function (key) {
        if (!Object(helpers["c" /* includes */])(defaultKeys, key))
            invalid.push(key);
    });
    if (invalid.length) {
        throw new Error('Invalid options: ' + invalid.join(', '));
    }
    const initializedOptions = Object.assign({}, options);
    // Merge in default options
    defaultKeys.forEach(function (key) {
        if (!Object(helpers["c" /* includes */])(keys, key))
            initializedOptions[key] = rrulestr_DEFAULT_OPTIONS[key];
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
    const [name, value] = Object(helpers["l" /* split */])(line, ':', 1);
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
        .map(datestr => src_dateutil.fromRfc5545DateTime(datestr));
}

// CONCATENATED MODULE: ./src/rruleset.ts






function createGetterSetter(fieldName) {
    return (field) => {
        if (field !== undefined) {
            this[`_${fieldName}`] = field;
        }
        if (this[`_${fieldName}`] !== undefined) {
            return this[`_${fieldName}`];
        }
        for (let i = 0; i < this._rrule.length; i++) {
            const field = this._rrule[i].origOptions[fieldName];
            if (field) {
                return field;
            }
        }
    };
}
class rruleset_RRuleSet extends rrule_RRule {
    /**
     *
     * @param {Boolean?} noCache
     *  The same stratagy as RRule on cache, default to false
     * @constructor
     */
    constructor(noCache = false) {
        super({}, noCache);
        this.dtstart = createGetterSetter.apply(this, ['dtstart']);
        this.dtend = createGetterSetter.apply(this, ['dtend']);
        this.tzid = createGetterSetter.apply(this, ['tzid']);
        this._rrule = [];
        this._rdate = [];
        this._exrule = [];
        this._exdate = [];
    }
    _iter(iterResult) {
        return iterSet(iterResult, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
    }
    /**
     * Adds an RRule to the set
     *
     * @param {RRule}
     */
    rrule(rrule) {
        _addRule(rrule, this._rrule);
    }
    /**
     * Adds an EXRULE to the set
     *
     * @param {RRule}
     */
    exrule(rrule) {
        _addRule(rrule, this._exrule);
    }
    /**
     * Adds an RDate to the set
     *
     * @param {Date}
     */
    rdate(date) {
        _addDate(date, this._rdate);
    }
    /**
     * Adds an EXDATE to the set
     *
     * @param {Date}
     */
    exdate(date) {
        _addDate(date, this._exdate);
    }
    /**
     * Get list of included rrules in this recurrence set.
     *
     * @return List of rrules
     */
    rrules() {
        return this._rrule.map(e => rrulestr(e.toString()));
    }
    /**
     * Get list of excluded rrules in this recurrence set.
     *
     * @return List of exrules
     */
    exrules() {
        return this._exrule.map(e => rrulestr(e.toString()));
    }
    /**
     * Get list of included datetimes in this recurrence set.
     *
     * @return List of rdates
     */
    rdates() {
        return this._rdate.map(e => new Date(e.getTime()));
    }
    /**
     * Get list of included datetimes in this recurrence set.
     *
     * @return List of exdates
     */
    exdates() {
        return this._exdate.map(e => new Date(e.getTime()));
    }
    valueOf() {
        let result = [];
        if (!this._rrule.length && this._dtstart) {
            result = result.concat(optionsToString({ dtstart: this._dtstart }));
        }
        if (!this._rrule.length && this._dtend) {
            result = result.concat(optionsToString({ dtend: this._dtend }));
        }
        this._rrule.forEach(function (rrule) {
            result = result.concat(rrule.toString().split('\n'));
        });
        this._exrule.forEach(function (exrule) {
            result = result.concat(exrule.toString().split('\n')
                .map(line => line.replace(/^RRULE:/, 'EXRULE:'))
                .filter(line => !/^DTSTART/.test(line)));
        });
        if (this._rdate.length) {
            result.push(rdatesToString('RDATE', this._rdate, this.tzid()));
        }
        if (this._exdate.length) {
            result.push(rdatesToString('EXDATE', this._exdate, this.tzid()));
        }
        return result;
    }
    /**
     * to generate recurrence field such as:
     *   DTSTART:19970902T010000Z
     *   RRULE:FREQ=YEARLY;COUNT=2;BYDAY=TU
     *   RRULE:FREQ=YEARLY;COUNT=1;BYDAY=TH
     */
    toString() {
        return this.valueOf().join('\n');
    }
    /**
     * Create a new RRuleSet Object completely base on current instance
     */
    clone() {
        const rrs = new rruleset_RRuleSet(!!this._cache);
        this._rrule.forEach(rule => rrs.rrule(rule.clone()));
        this._exrule.forEach(rule => rrs.exrule(rule.clone()));
        this._rdate.forEach(date => rrs.rdate(new Date(date.getTime())));
        this._exdate.forEach(date => rrs.exdate(new Date(date.getTime())));
        return rrs;
    }
}
function _addRule(rrule, collection) {
    if (!(rrule instanceof rrule_RRule)) {
        throw new TypeError(String(rrule) + ' is not RRule instance');
    }
    if (!Object(helpers["c" /* includes */])(collection.map(String), String(rrule))) {
        collection.push(rrule);
    }
}
function _addDate(date, collection) {
    if (!(date instanceof Date)) {
        throw new TypeError(String(date) + ' is not Date instance');
    }
    if (!Object(helpers["c" /* includes */])(collection.map(Number), Number(date))) {
        collection.push(date);
        src_dateutil.sort(collection);
    }
}
function rdatesToString(param, rdates, tzid) {
    const isUTC = !tzid || tzid.toUpperCase() === 'UTC';
    const header = isUTC ? `${param}:` : `${param};TZID=${tzid}:`;
    const dateString = rdates
        .map(rdate => src_dateutil.toRfc5545DateTime(rdate.valueOf(), isUTC))
        .join(',');
    return `${header}${dateString}`;
}

// CONCATENATED MODULE: ./src/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Frequency", function() { return Frequency; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Weekday", function() { return Weekday; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RRule", function() { return rrule_RRule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RRuleSet", function() { return rruleset_RRuleSet; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "rrulestr", function() { return rrulestr; });
/*!
 * rrule.js - Library for working with recurrence rules for calendar dates.
 * https://github.com/jakubroztocil/rrule
 *
 * Copyright 2010, Jakub Roztocil and Lars Schoning
 * Licenced under the BSD licence.
 * https://github.com/jakubroztocil/rrule/blob/master/LICENCE
 *
 * Based on:
 * python-dateutil - Extensions to the standard Python datetime module.
 * Copyright (c) 2003-2011 - Gustavo Niemeyer <gustavo@niemeyer.net>
 * Copyright (c) 2012 - Tomi Pieviläinen <tomi.pievilainen@iki.fi>
 * https://github.com/jakubroztocil/rrule/blob/master/LICENCE
 *
 */





// =============================================================================
// Export
// =============================================================================

/* harmony default export */ var src = __webpack_exports__["default"] = (rrule_RRule);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/nlp/i18n.ts
// =============================================================================
// i18n
// =============================================================================
const ENGLISH = {
    dayNames: [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
        'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October',
        'November', 'December'
    ],
    tokens: {
        'SKIP': /^[ \r\n\t]+|^\.$/,
        'number': /^[1-9][0-9]*/,
        'numberAsText': /^(one|two|three)/i,
        'every': /^every/i,
        'day(s)': /^days?/i,
        'weekday(s)': /^weekdays?/i,
        'week(s)': /^weeks?/i,
        'hour(s)': /^hours?/i,
        'minute(s)': /^minutes?/i,
        'month(s)': /^months?/i,
        'year(s)': /^years?/i,
        'on': /^(on|in)/i,
        'at': /^(at)/i,
        'the': /^the/i,
        'first': /^first/i,
        'second': /^second/i,
        'third': /^third/i,
        'nth': /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
        'last': /^last/i,
        'for': /^for/i,
        'time(s)': /^times?/i,
        'until': /^(un)?til/i,
        'monday': /^mo(n(day)?)?/i,
        'tuesday': /^tu(e(s(day)?)?)?/i,
        'wednesday': /^we(d(n(esday)?)?)?/i,
        'thursday': /^th(u(r(sday)?)?)?/i,
        'friday': /^fr(i(day)?)?/i,
        'saturday': /^sa(t(urday)?)?/i,
        'sunday': /^su(n(day)?)?/i,
        'january': /^jan(uary)?/i,
        'february': /^feb(ruary)?/i,
        'march': /^mar(ch)?/i,
        'april': /^apr(il)?/i,
        'may': /^may/i,
        'june': /^june?/i,
        'july': /^july?/i,
        'august': /^aug(ust)?/i,
        'september': /^sep(t(ember)?)?/i,
        'october': /^oct(ober)?/i,
        'november': /^nov(ember)?/i,
        'december': /^dec(ember)?/i,
        'comma': /^(,\s*|(and|or)\s*)+/i
    }
};
/* harmony default export */ var i18n = (ENGLISH);

// EXTERNAL MODULE: ./src/index.ts + 22 modules
var src = __webpack_require__(1);

// EXTERNAL MODULE: ./src/helpers.ts
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/nlp/totext.ts



// =============================================================================
// Helper functions
// =============================================================================
/**
 * Return true if a value is in an array
 */
const contains = function (arr, val) {
    return arr.indexOf(val) !== -1;
};
const defaultGetText = id => id.toString();
const defaultDateFormatter = (year, month, day) => `${month} ${day}, ${year}`;
/**
 *
 * @param {RRule} rrule
 * Optional:
 * @param {Function} gettext function
 * @param {Object} language definition
 * @constructor
 */
class totext_ToText {
    constructor(rrule, gettext = defaultGetText, language = i18n, dateFormatter = defaultDateFormatter) {
        this.text = [];
        this.language = language || i18n;
        this.gettext = gettext;
        this.dateFormatter = dateFormatter;
        this.rrule = rrule;
        this.options = rrule.options;
        this.origOptions = rrule.origOptions;
        if (this.origOptions.bymonthday) {
            const bymonthday = [].concat(this.options.bymonthday);
            const bynmonthday = [].concat(this.options.bynmonthday);
            bymonthday.sort((a, b) => a - b);
            bynmonthday.sort((a, b) => b - a);
            // 1, 2, 3, .., -5, -4, -3, ..
            this.bymonthday = bymonthday.concat(bynmonthday);
            if (!this.bymonthday.length)
                this.bymonthday = null;
        }
        if (Object(helpers["f" /* isPresent */])(this.origOptions.byweekday)) {
            const byweekday = !Object(helpers["d" /* isArray */])(this.origOptions.byweekday)
                ? [this.origOptions.byweekday]
                : this.origOptions.byweekday;
            const days = String(byweekday);
            this.byweekday = {
                allWeeks: byweekday.filter(function (weekday) {
                    return !weekday.n;
                }),
                someWeeks: byweekday.filter(function (weekday) {
                    return Boolean(weekday.n);
                }),
                isWeekdays: days.indexOf('MO') !== -1 &&
                    days.indexOf('TU') !== -1 &&
                    days.indexOf('WE') !== -1 &&
                    days.indexOf('TH') !== -1 &&
                    days.indexOf('FR') !== -1 &&
                    days.indexOf('SA') === -1 &&
                    days.indexOf('SU') === -1,
                isEveryDay: days.indexOf('MO') !== -1 &&
                    days.indexOf('TU') !== -1 &&
                    days.indexOf('WE') !== -1 &&
                    days.indexOf('TH') !== -1 &&
                    days.indexOf('FR') !== -1 &&
                    days.indexOf('SA') !== -1 &&
                    days.indexOf('SU') !== -1
            };
            const sortWeekDays = function (a, b) {
                return a.weekday - b.weekday;
            };
            this.byweekday.allWeeks.sort(sortWeekDays);
            this.byweekday.someWeeks.sort(sortWeekDays);
            if (!this.byweekday.allWeeks.length)
                this.byweekday.allWeeks = null;
            if (!this.byweekday.someWeeks.length)
                this.byweekday.someWeeks = null;
        }
        else {
            this.byweekday = null;
        }
    }
    /**
     * Test whether the rrule can be fully converted to text.
     * @param {RRule} rrule
     * @return {Boolean}
     */
    static isFullyConvertible(rrule) {
        let canConvert = true;
        if (!(rrule.options.freq in totext_ToText.IMPLEMENTED))
            return false;
        if (rrule.origOptions.until && rrule.origOptions.count)
            return false;
        for (let key in rrule.origOptions) {
            if (contains(['dtstart', 'dtend', 'wkst', 'freq'], key))
                return true;
            if (!contains(totext_ToText.IMPLEMENTED[rrule.options.freq], key))
                return false;
        }
        return canConvert;
    }
    isFullyConvertible() {
        return totext_ToText.isFullyConvertible(this.rrule);
    }
    /**
     * Perform the conversion. Only some of the frequencies are supported.
     * If some of the rrule's options aren't supported, they'll
     * be omitted from the output an "(~ approximate)" will be appended.
     * @return {*}
     */
    toString() {
        const gettext = this.gettext;
        if (!(this.options.freq in totext_ToText.IMPLEMENTED)) {
            return gettext('RRule error: Unable to fully convert this rrule to text');
        }
        this.text = [gettext('every')];
        // @ts-ignore
        this[src["default"].FREQUENCIES[this.options.freq]]();
        if (this.options.until) {
            this.add(gettext('until'));
            const until = this.options.until;
            this.add(this.dateFormatter(until.getUTCFullYear(), this.language.monthNames[until.getUTCMonth()], until.getUTCDate()));
        }
        else if (this.options.count) {
            this.add(gettext('for'))
                .add(this.options.count.toString())
                .add(this.plural(this.options.count) ? gettext('times') : gettext('time'));
        }
        if (!this.isFullyConvertible())
            this.add(gettext('(~ approximate)'));
        return this.text.join('');
    }
    HOURLY() {
        const gettext = this.gettext;
        if (this.options.interval !== 1)
            this.add(this.options.interval.toString());
        this.add(this.plural(this.options.interval) ? gettext('hours') : gettext('hour'));
    }
    MINUTELY() {
        const gettext = this.gettext;
        if (this.options.interval !== 1)
            this.add(this.options.interval.toString());
        this.add(this.plural(this.options.interval)
            ? gettext('minutes')
            : gettext('minutes'));
    }
    DAILY() {
        const gettext = this.gettext;
        if (this.options.interval !== 1)
            this.add(this.options.interval.toString());
        if (this.byweekday && this.byweekday.isWeekdays) {
            this.add(this.plural(this.options.interval)
                ? gettext('weekdays')
                : gettext('weekday'));
        }
        else {
            this.add(this.plural(this.options.interval) ? gettext('days') : gettext('day'));
        }
        if (this.origOptions.bymonth) {
            this.add(gettext('in'));
            this._bymonth();
        }
        if (this.bymonthday) {
            this._bymonthday();
        }
        else if (this.byweekday) {
            this._byweekday();
        }
        else if (this.origOptions.byhour) {
            this._byhour();
        }
    }
    WEEKLY() {
        const gettext = this.gettext;
        if (this.options.interval !== 1) {
            this.add(this.options.interval.toString()).add(this.plural(this.options.interval) ? gettext('weeks') : gettext('week'));
        }
        if (this.byweekday && this.byweekday.isWeekdays) {
            if (this.options.interval === 1) {
                this.add(this.plural(this.options.interval)
                    ? gettext('weekdays')
                    : gettext('weekday'));
            }
            else {
                this.add(gettext('on')).add(gettext('weekdays'));
            }
        }
        else if (this.byweekday && this.byweekday.isEveryDay) {
            this.add(this.plural(this.options.interval) ? gettext('days') : gettext('day'));
        }
        else {
            if (this.options.interval === 1)
                this.add(gettext('week'));
            if (this.origOptions.bymonth) {
                this.add(gettext('in'));
                this._bymonth();
            }
            if (this.bymonthday) {
                this._bymonthday();
            }
            else if (this.byweekday) {
                this._byweekday();
            }
        }
    }
    MONTHLY() {
        const gettext = this.gettext;
        if (this.origOptions.bymonth) {
            if (this.options.interval !== 1) {
                this.add(this.options.interval.toString()).add(gettext('months'));
                if (this.plural(this.options.interval))
                    this.add(gettext('in'));
            }
            else {
                // this.add(gettext('MONTH'))
            }
            this._bymonth();
        }
        else {
            if (this.options.interval !== 1)
                this.add(this.options.interval.toString());
            this.add(this.plural(this.options.interval)
                ? gettext('months')
                : gettext('month'));
        }
        if (this.bymonthday) {
            this._bymonthday();
        }
        else if (this.byweekday && this.byweekday.isWeekdays) {
            this.add(gettext('on')).add(gettext('weekdays'));
        }
        else if (this.byweekday) {
            this._byweekday();
        }
    }
    YEARLY() {
        const gettext = this.gettext;
        if (this.origOptions.bymonth) {
            if (this.options.interval !== 1) {
                this.add(this.options.interval.toString());
                this.add(gettext('years'));
            }
            else {
                // this.add(gettext('YEAR'))
            }
            this._bymonth();
        }
        else {
            if (this.options.interval !== 1)
                this.add(this.options.interval.toString());
            this.add(this.plural(this.options.interval) ? gettext('years') : gettext('year'));
        }
        if (this.bymonthday) {
            this._bymonthday();
        }
        else if (this.byweekday) {
            this._byweekday();
        }
        if (this.options.byyearday) {
            this.add(gettext('on the'))
                .add(this.list(this.options.byyearday, this.nth, gettext('and')))
                .add(gettext('day'));
        }
        if (this.options.byweekno) {
            this.add(gettext('in'))
                .add(this.plural(this.options.byweekno.length)
                ? gettext('weeks')
                : gettext('week'))
                .add(this.list(this.options.byweekno, undefined, gettext('and')));
        }
    }
    _bymonthday() {
        const gettext = this.gettext;
        if (this.byweekday && this.byweekday.allWeeks) {
            this.add(gettext('on'))
                .add(this.list(this.byweekday.allWeeks, this.weekdaytext, gettext('or')))
                .add(gettext('the'))
                .add(this.list(this.bymonthday, this.nth, gettext('or')));
        }
        else {
            this.add(gettext('on the')).add(this.list(this.bymonthday, this.nth, gettext('and')));
        }
        // this.add(gettext('DAY'))
    }
    _byweekday() {
        const gettext = this.gettext;
        if (this.byweekday.allWeeks && !this.byweekday.isWeekdays) {
            this.add(gettext('on')).add(this.list(this.byweekday.allWeeks, this.weekdaytext));
        }
        if (this.byweekday.someWeeks) {
            if (this.byweekday.allWeeks)
                this.add(gettext('and'));
            this.add(gettext('on the')).add(this.list(this.byweekday.someWeeks, this.weekdaytext, gettext('and')));
        }
    }
    _byhour() {
        const gettext = this.gettext;
        this.add(gettext('at')).add(this.list(this.origOptions.byhour, undefined, gettext('and')));
    }
    _bymonth() {
        this.add(this.list(this.options.bymonth, this.monthtext, this.gettext('and')));
    }
    nth(n) {
        n = parseInt(n.toString(), 10);
        let nth;
        let npos;
        const gettext = this.gettext;
        if (n === -1)
            return gettext('last');
        npos = Math.abs(n);
        switch (npos) {
            case 1:
            case 21:
            case 31:
                nth = npos + gettext('st');
                break;
            case 2:
            case 22:
                nth = npos + gettext('nd');
                break;
            case 3:
            case 23:
                nth = npos + gettext('rd');
                break;
            default:
                nth = npos + gettext('th');
        }
        return n < 0 ? nth + ' ' + gettext('last') : nth;
    }
    monthtext(m) {
        return this.language.monthNames[m - 1];
    }
    weekdaytext(wday) {
        const weekday = Object(helpers["e" /* isNumber */])(wday) ? (wday + 1) % 7 : wday.getJsWeekday();
        return ((wday.n ? this.nth(wday.n) + ' ' : '') + this.language.dayNames[weekday]);
    }
    plural(n) {
        return n % 100 !== 1;
    }
    add(s) {
        this.text.push(' ');
        this.text.push(s);
        return this;
    }
    list(arr, callback, finalDelim, delim = ',') {
        if (!Object(helpers["d" /* isArray */])(arr)) {
            arr = [arr];
        }
        const delimJoin = function (array, delimiter, finalDelimiter) {
            let list = '';
            for (let i = 0; i < array.length; i++) {
                if (i !== 0) {
                    if (i === array.length - 1) {
                        list += ' ' + finalDelimiter + ' ';
                    }
                    else {
                        list += delimiter + ' ';
                    }
                }
                list += array[i];
            }
            return list;
        };
        callback =
            callback ||
                function (o) {
                    return o.toString();
                };
        const self = this;
        const realCallback = function (arg) {
            return callback && callback.call(self, arg);
        };
        if (finalDelim) {
            return delimJoin(arr.map(realCallback), delim, finalDelim);
        }
        else {
            return arr.map(realCallback).join(delim + ' ');
        }
    }
}

// CONCATENATED MODULE: ./src/nlp/parsetext.ts


// =============================================================================
// Parser
// =============================================================================
class Parser {
    constructor(rules) {
        this.done = true;
        this.rules = rules;
    }
    start(text) {
        this.text = text;
        this.done = false;
        return this.nextSymbol();
    }
    isDone() {
        return this.done && this.symbol === null;
    }
    nextSymbol() {
        let best;
        let bestSymbol;
        const p = this;
        this.symbol = null;
        this.value = null;
        do {
            if (this.done)
                return false;
            let rule;
            best = null;
            for (let name in this.rules) {
                rule = this.rules[name];
                const match = rule.exec(p.text);
                if (match) {
                    if (best === null || match[0].length > best[0].length) {
                        best = match;
                        bestSymbol = name;
                    }
                }
            }
            if (best != null) {
                this.text = this.text.substr(best[0].length);
                if (this.text === '')
                    this.done = true;
            }
            if (best == null) {
                this.done = true;
                this.symbol = null;
                this.value = null;
                return;
            }
            // @ts-ignore
        } while (bestSymbol === 'SKIP');
        // @ts-ignore
        this.symbol = bestSymbol;
        this.value = best;
        return true;
    }
    accept(name) {
        if (this.symbol === name) {
            if (this.value) {
                const v = this.value;
                this.nextSymbol();
                return v;
            }
            this.nextSymbol();
            return true;
        }
        return false;
    }
    acceptNumber() {
        return this.accept('number');
    }
    expect(name) {
        if (this.accept(name))
            return true;
        throw new Error('expected ' + name + ' but found ' + this.symbol);
    }
}
function parseText(text, language = i18n) {
    const options = {};
    const ttr = new Parser(language.tokens);
    if (!ttr.start(text))
        return null;
    S();
    return options;
    function S() {
        // every [n]
        ttr.expect('every');
        let n = ttr.acceptNumber();
        if (n)
            options.interval = parseInt(n[0], 10);
        if (ttr.isDone())
            throw new Error('Unexpected end');
        switch (ttr.symbol) {
            case 'day(s)':
                options.freq = src["default"].DAILY;
                if (ttr.nextSymbol()) {
                    AT();
                    F();
                }
                break;
            // FIXME Note: every 2 weekdays != every two weeks on weekdays.
            // DAILY on weekdays is not a valid rule
            case 'weekday(s)':
                options.freq = src["default"].WEEKLY;
                options.byweekday = [
                    src["default"].MO,
                    src["default"].TU,
                    src["default"].WE,
                    src["default"].TH,
                    src["default"].FR
                ];
                ttr.nextSymbol();
                F();
                break;
            case 'week(s)':
                options.freq = src["default"].WEEKLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'hour(s)':
                options.freq = src["default"].HOURLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'minute(s)':
                options.freq = src["default"].MINUTELY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'month(s)':
                options.freq = src["default"].MONTHLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'year(s)':
                options.freq = src["default"].YEARLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                options.freq = src["default"].WEEKLY;
                const key = ttr.symbol.substr(0, 2).toUpperCase();
                options.byweekday = [src["default"][key]];
                if (!ttr.nextSymbol())
                    return;
                // TODO check for duplicates
                while (ttr.accept('comma')) {
                    if (ttr.isDone())
                        throw new Error('Unexpected end');
                    let wkd = decodeWKD();
                    if (!wkd) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + ', expected weekday');
                    }
                    // @ts-ignore
                    options.byweekday.push(src["default"][wkd]);
                    ttr.nextSymbol();
                }
                MDAYs();
                F();
                break;
            case 'january':
            case 'february':
            case 'march':
            case 'april':
            case 'may':
            case 'june':
            case 'july':
            case 'august':
            case 'september':
            case 'october':
            case 'november':
            case 'december':
                options.freq = src["default"].YEARLY;
                options.bymonth = [decodeM()];
                if (!ttr.nextSymbol())
                    return;
                // TODO check for duplicates
                while (ttr.accept('comma')) {
                    if (ttr.isDone())
                        throw new Error('Unexpected end');
                    let m = decodeM();
                    if (!m) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + ', expected month');
                    }
                    options.bymonth.push(m);
                    ttr.nextSymbol();
                }
                ON();
                F();
                break;
            default:
                throw new Error('Unknown symbol');
        }
    }
    function ON() {
        const on = ttr.accept('on');
        const the = ttr.accept('the');
        if (!(on || the))
            return;
        do {
            let nth = decodeNTH();
            let wkd = decodeWKD();
            let m = decodeM();
            // nth <weekday> | <weekday>
            if (nth) {
                // ttr.nextSymbol()
                if (wkd) {
                    ttr.nextSymbol();
                    if (!options.byweekday)
                        options.byweekday = [];
                    // @ts-ignore
                    options.byweekday.push(src["default"][wkd].nth(nth));
                }
                else {
                    if (!options.bymonthday)
                        options.bymonthday = [];
                    // @ts-ignore
                    options.bymonthday.push(nth);
                    ttr.accept('day(s)');
                }
                // <weekday>
            }
            else if (wkd) {
                ttr.nextSymbol();
                if (!options.byweekday)
                    options.byweekday = [];
                // @ts-ignore
                options.byweekday.push(src["default"][wkd]);
            }
            else if (ttr.symbol === 'weekday(s)') {
                ttr.nextSymbol();
                if (!options.byweekday) {
                    options.byweekday = [
                        src["default"].MO,
                        src["default"].TU,
                        src["default"].WE,
                        src["default"].TH,
                        src["default"].FR
                    ];
                }
            }
            else if (ttr.symbol === 'week(s)') {
                ttr.nextSymbol();
                let n = ttr.acceptNumber();
                if (!n) {
                    throw new Error('Unexpected symbol ' + ttr.symbol + ', expected week number');
                }
                options.byweekno = [parseInt(n[0], 10)];
                while (ttr.accept('comma')) {
                    n = ttr.acceptNumber();
                    if (!n) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + '; expected monthday');
                    }
                    options.byweekno.push(parseInt(n[0], 10));
                }
            }
            else if (m) {
                ttr.nextSymbol();
                if (!options.bymonth)
                    options.bymonth = [];
                // @ts-ignore
                options.bymonth.push(m);
            }
            else {
                return;
            }
        } while (ttr.accept('comma') || ttr.accept('the') || ttr.accept('on'));
    }
    function AT() {
        const at = ttr.accept('at');
        if (!at)
            return;
        do {
            let n = ttr.acceptNumber();
            if (!n) {
                throw new Error('Unexpected symbol ' + ttr.symbol + ', expected hour');
            }
            options.byhour = [parseInt(n[0], 10)];
            while (ttr.accept('comma')) {
                n = ttr.acceptNumber();
                if (!n) {
                    throw new Error('Unexpected symbol ' + ttr.symbol + '; expected hour');
                }
                options.byhour.push(parseInt(n[0], 10));
            }
        } while (ttr.accept('comma') || ttr.accept('at'));
    }
    function decodeM() {
        switch (ttr.symbol) {
            case 'january':
                return 1;
            case 'february':
                return 2;
            case 'march':
                return 3;
            case 'april':
                return 4;
            case 'may':
                return 5;
            case 'june':
                return 6;
            case 'july':
                return 7;
            case 'august':
                return 8;
            case 'september':
                return 9;
            case 'october':
                return 10;
            case 'november':
                return 11;
            case 'december':
                return 12;
            default:
                return false;
        }
    }
    function decodeWKD() {
        switch (ttr.symbol) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                return ttr.symbol.substr(0, 2).toUpperCase();
            default:
                return false;
        }
    }
    function decodeNTH() {
        switch (ttr.symbol) {
            case 'last':
                ttr.nextSymbol();
                return -1;
            case 'first':
                ttr.nextSymbol();
                return 1;
            case 'second':
                ttr.nextSymbol();
                return ttr.accept('last') ? -2 : 2;
            case 'third':
                ttr.nextSymbol();
                return ttr.accept('last') ? -3 : 3;
            case 'nth':
                const v = parseInt(ttr.value[1], 10);
                if (v < -366 || v > 366)
                    throw new Error('Nth out of range: ' + v);
                ttr.nextSymbol();
                return ttr.accept('last') ? -v : v;
            default:
                return false;
        }
    }
    function MDAYs() {
        ttr.accept('on');
        ttr.accept('the');
        let nth = decodeNTH();
        if (!nth)
            return;
        options.bymonthday = [nth];
        ttr.nextSymbol();
        while (ttr.accept('comma')) {
            nth = decodeNTH();
            if (!nth) {
                throw new Error('Unexpected symbol ' + ttr.symbol + '; expected monthday');
            }
            options.bymonthday.push(nth);
            ttr.nextSymbol();
        }
    }
    function F() {
        if (ttr.symbol === 'until') {
            const date = Date.parse(ttr.text);
            if (!date)
                throw new Error('Cannot parse until date:' + ttr.text);
            options.until = new Date(date);
        }
        else if (ttr.accept('for')) {
            options.count = parseInt(ttr.value[0], 10);
            ttr.expect('number');
            // ttr.expect('times')
        }
    }
}

// CONCATENATED MODULE: ./src/nlp/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromText", function() { return fromText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullyConvertible", function() { return isFullyConvertible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toText", function() { return toText; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "parseText", function() { return parseText; });




/*!
* rrule.js - Library for working with recurrence rules for calendar dates.
* https://github.com/jakubroztocil/rrule
*
* Copyright 2010, Jakub Roztocil and Lars Schoning
* Licenced under the BSD licence.
* https://github.com/jakubroztocil/rrule/blob/master/LICENCE
*
*/
/**
 *
 * Implementation of RRule.fromText() and RRule::toText().
 *
 *
 * On the client side, this file needs to be included
 * when those functions are used.
 *
 */
// =============================================================================
// fromText
// =============================================================================
/**
 * Will be able to convert some of the below described rules from
 * text format to a rule object.
 *
 *
 * RULES
 *
 * Every ([n])
 *       day(s)
 *     | [weekday], ..., (and) [weekday]
 *     | weekday(s)
 *     | week(s)
 *     | month(s)
 *     | [month], ..., (and) [month]
 *     | year(s)
 *
 *
 * Plus 0, 1, or multiple of these:
 *
 * on [weekday], ..., (or) [weekday] the [monthday], [monthday], ... (or) [monthday]
 *
 * on [weekday], ..., (and) [weekday]
 *
 * on the [monthday], [monthday], ... (and) [monthday] (day of the month)
 *
 * on the [nth-weekday], ..., (and) [nth-weekday] (of the month/year)
 *
 *
 * Plus 0 or 1 of these:
 *
 * for [n] time(s)
 *
 * until [date]
 *
 * Plus (.)
 *
 *
 * Definitely no supported for parsing:
 *
 * (for year):
 *     in week(s) [n], ..., (and) [n]
 *
 *     on the [yearday], ..., (and) [n] day of the year
 *     on day [yearday], ..., (and) [n]
 *
 *
 * NON-TERMINALS
 *
 * [n]: 1, 2 ..., one, two, three ..
 * [month]: January, February, March, April, May, ... December
 * [weekday]: Monday, ... Sunday
 * [nth-weekday]: first [weekday], 2nd [weekday], ... last [weekday], ...
 * [monthday]: first, 1., 2., 1st, 2nd, second, ... 31st, last day, 2nd last day, ..
 * [date]:
 *     [month] (0-31(,) ([year])),
 *     (the) 0-31.(1-12.([year])),
 *     (the) 0-31/(1-12/([year])),
 *     [weekday]
 *
 * [year]: 0000, 0001, ... 01, 02, ..
 *
 * Definitely not supported for parsing:
 *
 * [yearday]: first, 1., 2., 1st, 2nd, second, ... 366th, last day, 2nd last day, ..
 *
 * @param {String} text
 * @return {Object, Boolean} the rule, or null.
 */
const fromText = function (text, language = i18n) {
    return new src["default"](parseText(text, language) || undefined);
};
const common = [
    'count',
    'until',
    'interval',
    'byweekday',
    'bymonthday',
    'bymonth'
];
totext_ToText.IMPLEMENTED = [];
totext_ToText.IMPLEMENTED[src["default"].HOURLY] = common;
totext_ToText.IMPLEMENTED[src["default"].MINUTELY] = common;
totext_ToText.IMPLEMENTED[src["default"].DAILY] = ['byhour'].concat(common);
totext_ToText.IMPLEMENTED[src["default"].WEEKLY] = common;
totext_ToText.IMPLEMENTED[src["default"].MONTHLY] = common;
totext_ToText.IMPLEMENTED[src["default"].YEARLY] = ['byweekno', 'byyearday'].concat(common);
// =============================================================================
// Export
// =============================================================================
const toText = function (rrule, gettext, language, dateFormatter) {
    return new totext_ToText(rrule, gettext, language, dateFormatter).toString();
};
const { isFullyConvertible } = totext_ToText;



/***/ })
/******/ ]);
});
//# sourceMappingURL=rrule.js.map