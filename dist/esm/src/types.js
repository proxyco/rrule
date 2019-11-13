export var DateTimeProperty;
(function (DateTimeProperty) {
    DateTimeProperty["START"] = "DTSTART";
    DateTimeProperty["END"] = "DTEND";
})(DateTimeProperty || (DateTimeProperty = {}));
export var DateTimeValue;
(function (DateTimeValue) {
    DateTimeValue["DATE"] = "DATE";
    DateTimeValue["DATE_TIME"] = "DATE-TIME";
})(DateTimeValue || (DateTimeValue = {}));
export var Frequency;
(function (Frequency) {
    Frequency[Frequency["YEARLY"] = 0] = "YEARLY";
    Frequency[Frequency["MONTHLY"] = 1] = "MONTHLY";
    Frequency[Frequency["WEEKLY"] = 2] = "WEEKLY";
    Frequency[Frequency["DAILY"] = 3] = "DAILY";
    Frequency[Frequency["HOURLY"] = 4] = "HOURLY";
    Frequency[Frequency["MINUTELY"] = 5] = "MINUTELY";
    Frequency[Frequency["SECONDLY"] = 6] = "SECONDLY";
})(Frequency || (Frequency = {}));
export function freqIsDailyOrGreater(freq) {
    return freq < Frequency.HOURLY;
}
//# sourceMappingURL=types.js.map