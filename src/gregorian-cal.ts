export function isDivisibleByFour(year: number): boolean {
  return (year % 4) === 0;
}

export function isDivisibleByHundred(year: number): boolean {
  return (year % 100) === 0;
}

export function isDivisibleByFourHundred(year: number) {
    return (year % 400) === 0;
  }

export function isValidGregorianYear(year: number) {
  return year > 1581;
}

export function isLeapYear(year: number) {
  
}

