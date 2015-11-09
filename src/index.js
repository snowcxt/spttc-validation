const isEmpty = value => value === undefined || value === null || value === '';

export function email(value) {
  return !(!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value));
}

export function username(value) {
  return !(!isEmpty(value) && !/^[A-Z0-9.]+$/i.test(value));
}

export function between(value, min, max) {
  return !(!isEmpty(value) && (value.length < min || value.length > max));
}

export function required(value) {
  return !isEmpty(value);
}

export function minLength(value, min) {
  return !(!isEmpty(value) && value.length < min);
}

export function maxLength(value, max) {
  return !(!isEmpty(value) && value.length > max);
}

export function integer(value) {
  return Number.isInteger(Number(value));
}

export function oneOf(value, enumeration) {
  return ~enumeration.indexOf(value);
}

export function match(value1, value2) {
  return value1 === value2;
}
