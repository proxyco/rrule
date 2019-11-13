import dateutil from './dateutil';
import { DateTime } from 'luxon';
export class DateWithZone {
    constructor(date, tzid) {
        this.date = date;
        this.tzid = tzid;
    }
    get isUTC() {
        return !this.tzid || this.tzid.toUpperCase() === 'UTC';
    }
    toString() {
        const datestr = dateutil.toRfc5545DateTime(this.date.getTime(), this.isUTC);
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
            const datetime = DateTime
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
//# sourceMappingURL=datewithzone.js.map