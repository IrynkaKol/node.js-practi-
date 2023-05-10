/*
1. Given year as integer and return "true" is it's leap year and "false" if not.
2. If given invalid argument throw error with such message 

2008 - true (ділиться на 4 без залишку)
2003 - false
1900 - false (якщо ділиться на 100 без залишку)
2000 - true (ділиться на 4 та на 100 без залишку)

2008.4 - error "Year must be integral"
() - error "Year must be exist"
'2008' - error "Year must be number"
"false" / "true" - error "Year must be number"
null - error "Year must be number"
() => {} - error "Year must be number"
{} - error "Year must be number"
[] - error "Year must be number"


*/

const isLeapYear = require("./isLeapYear");
describe("test isLeapYear function", () => 
{
    test("2008 - true", () => {
        const result = isLeapYear(2008);
        expect(result).toBe(true) // перевіряє чи result дорівнює true
        /*
        const expext = result => {
            return {
                result,
                toBe(value) {
                    return this.result === value
                }

            }
        }
        */
    })
    test("2003 - false", () => {
        expect(isLeapYear(2003)).toBe(false)
    })
    test("1900 - false", () => {
        expect(isLeapYear(1900)).toBe(false)
    })
    test("2000 - true", () => {
        expect(isLeapYear(2000)).toBe(true)
    })
    test("2008.4 - error 'Year must be integral'", () => {
        expect(() => isLeapYear(2008.4)).toThrow('Year must be integral')
    })
    test("() - error 'Year must be exist'", () => {
        expect(() => isLeapYear()).toThrow('Year must be exist')
    })
    test("'2008' - error 'Year must be number'", () => {
        expect(() => isLeapYear('2008')).toThrow('Year must be number')
    })
    test("false - error 'Year must be number'", () => {
        expect(() => isLeapYear(false)).toThrow('Year must be number')
    })
    test("true - error 'Year must be number'", () => {
        expect(() => isLeapYear(true)).toThrow('Year must be number')
    })
    test("null - error 'Year must be number'", () => {
        expect(() => isLeapYear(null)).toThrow('Year must be number')
    })
    test("() => {} - error 'Year must be number'", () => {
        expect(() => isLeapYear(()=> {})).toThrow('Year must be number')
    })
    test("{} - error 'Year must be number'", () => {
        expect(() => isLeapYear({})).toThrow('Year must be number')
    })
    
    test("[] - error 'Year must be number'", () => {
        expect(() => isLeapYear([])).toThrow('Year must be number')
    })
}) // створює групи тестів