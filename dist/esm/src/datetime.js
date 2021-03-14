import { Frequency } from './types';
import { pymod, divmod, empty, includes } from './helpers';
import { dateutil } from './dateutil';
export class Time {
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
export class DateTime extends Time {
    constructor(year, month, day, hour, minute, second, millisecond) {
        super(hour, minute, second, millisecond);
        this.year = year;
        this.month = month;
        this.day = day;
    }
    static fromDate(date) {
        return new this(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.valueOf() % 1000);
    }
    getWeekday() {
        return dateutil.getWeekday(new Date(this.getTime()));
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
            const monthMod = pymod(this.month, 12);
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
            const { div: dayDiv, mod: hourMod } = divmod(this.hour, 24);
            if (dayDiv) {
                this.hour = hourMod;
                this.addDaily(dayDiv);
            }
            if (empty(byhour) || includes(byhour, this.hour))
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
            const { div: hourDiv, mod: minuteMod } = divmod(this.minute, 60);
            if (hourDiv) {
                this.minute = minuteMod;
                this.addHours(hourDiv, false, byhour);
            }
            if ((empty(byhour) || includes(byhour, this.hour)) &&
                (empty(byminute) || includes(byminute, this.minute))) {
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
            const { div: minuteDiv, mod: secondMod } = divmod(this.second, 60);
            if (minuteDiv) {
                this.second = secondMod;
                this.addMinutes(minuteDiv, false, byhour, byminute);
            }
            if ((empty(byhour) || includes(byhour, this.hour)) &&
                (empty(byminute) || includes(byminute, this.minute)) &&
                (empty(bysecond) || includes(bysecond, this.second))) {
                break;
            }
        }
    }
    fixDay() {
        if (this.day <= 28) {
            return;
        }
        let daysinmonth = dateutil.monthRange(this.year, this.month - 1)[1];
        if (this.day <= daysinmonth) {
            return;
        }
        while (this.day > daysinmonth) {
            this.day -= daysinmonth;
            ++this.month;
            if (this.month === 13) {
                this.month = 1;
                ++this.year;
                if (this.year > dateutil.MAXYEAR) {
                    return;
                }
            }
            daysinmonth = dateutil.monthRange(this.year, this.month - 1)[1];
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
//# sourceMappingURL=datetime.js.map