import IterResult from './iterresult';
import dateutil from './dateutil';
import { isArray } from './helpers';
export class Cache {
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
                    ? dateutil.clone(value)
                    : dateutil.cloneDates(value);
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
        else if (isArray(cachedObject)) {
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
        return isArray(cached)
            ? dateutil.cloneDates(cached)
            : cached instanceof Date
                ? dateutil.clone(cached)
                : cached;
    }
}
//# sourceMappingURL=cache.js.map