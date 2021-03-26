export class Formatter {

    /**
     * @description Formats an Integer to a USD Currency value 
     *              for a given decimal precision
     * 
     * @param {float} value currency value to format
     * @param {integer} precision indicates the decimal precision for the value
     * @return {float} Returns a float value formateted to USD
     */
    static formatToCurrUsd(value, precision) {
        return new Intl.NumberFormat('en-US', { 
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: precision
        }).format(value);
    }

    /**
     * @description Formats a date value into the date format MM/dd/yyyy
     * 
     * @param {date} date given date to format
     * @param {string=} delimiter (optional) delimiter for formatting the date value
     * @return {string} date value
     */
    static formatDate(date, delimiter = '-') {
        // dateValues = [yyyy,mm,dd]
        const dateValues = date.split('-'),
            month = dateValues[1],
            day = dateValues[2],
            year = dateValues[0];

        return [month, day, year].join(delimiter);
    }
    
    /**
     * @description Formats a UTC date/time value into the 
     *              date/time format MM/dd/yyyy, hh:mm:ss
     * @param {date} dateTime
     * @returns {string} date/time string value
     * 
     * @example
     *      9/01/2020, 10:50:36 AM
     */
    static formatDateTimetoLocale(dateTime) {
        const values = dateTime.split('T'),
            dateValue = values[0].split('-'),
            timeValue = values[1].split(':'),
            year = parseInt(dateValue[0]),
            month = parseInt(dateValue[1]),
            day = parseInt(dateValue[2]),
            hours = parseInt(timeValue[0]),
            minutes = parseInt(timeValue[1]),
            seconds = parseInt(timeValue[2].split('.')[0]);

        return new Date(Date.UTC(year, month-1, day, hours, minutes, seconds)).toLocaleString();
    }
}