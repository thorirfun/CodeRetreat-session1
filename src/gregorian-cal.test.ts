import * as greg from './gregorian-cal';

const leapYears: Array<{year: number, isLeapYear: boolean}> = [
  { year: -1, isLeapYear: false },
  { year: 1, isLeapYear: false },
  { year: 4, isLeapYear: false },
  { year: 1581, isLeapYear: false },
]

test('year is divisible by 4', () => {
  const yearInput = 1988;
  const expected = true;

  const result = greg.isDivisibleByFour(yearInput);
  expect(result).toBe(expected);
});

test('year is divisible by 100', () => {
  const yearInput = 2000;
  const expected = true;

  const result = greg.isDivisibleByHundred(yearInput);
  expect(result).toBe(expected);
})

test('year is divisible by 400', () => {
  const yearInput = 2000;
  const expected = true;

  const result = greg.isDivisibleByFourHundred(yearInput);
  expect(result).toBe(expected);
})

const checkGregorianYears: Array<{year: number, isGregorianYear: boolean}> = [
  { year: -1, isGregorianYear: false },
  { year: 1, isGregorianYear: false },
  { year: 1581, isGregorianYear: false },
  { year: 1582, isGregorianYear: true },
  { year: 2022, isGregorianYear: true },
]
checkGregorianYears.forEach(input => {
  test(`Check if Gregorian valid year input: ${input.year}`, () => {
    const result = greg.isValidGregorianYear(input.year);
    expect(result).toBe(input.isGregorianYear);
  });
});

leapYears.forEach(input => {
  test(`Check if leap year: ${input.year}`, () => {
    const result = greg.isLeapYear(input.year);
    expect(result).toBe(input.isLeapYear);
  });
});