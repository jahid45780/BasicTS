"use strict";
{
    // type assertion
    const KgToGm = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result = KgToGm(1000);
}
