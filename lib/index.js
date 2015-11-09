'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.email = email;
exports.username = username;
exports.between = between;
exports.required = required;
exports.minLength = minLength;
exports.maxLength = maxLength;
exports.integer = integer;
exports.oneOf = oneOf;
exports.match = match;
var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '';
};

function email(value) {
  return !(!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value));
}

function username(value) {
  return !(!isEmpty(value) && !/^[A-Z0-9.]+$/i.test(value));
}

function between(value, min, max) {
  return !(!isEmpty(value) && (value.length < min || value.length > max));
}

function required(value) {
  return !isEmpty(value);
}

function minLength(value, min) {
  return !(!isEmpty(value) && value.length < min);
}

function maxLength(value, max) {
  return !(!isEmpty(value) && value.length > max);
}

function integer(value) {
  return Number.isInteger(Number(value));
}

function oneOf(value, enumeration) {
  return ~enumeration.indexOf(value);
}

function match(value1, value2) {
  return value1 === value2;
}