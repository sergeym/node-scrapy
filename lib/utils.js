/**
 * Same as Array.isArray
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * @param {*} value The value to be checked.
 * @returns {boolean} true if the value is an Array; otherwise, false.
 */
const { isArray } = Array

/**
 * Handy wrapper around Object#hasOwnProperty.
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 * @param {Object} obj Object to check into.
 * @param {string} prop Property name to check for.
 * @returns {boolean} true if obj has the specified prop as own property; otherwise, false.
 */
const has = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)

/**
 * Check if the given value is an object; that's it, a non-primitive value.
 * @param {*} value The value to check.
 * @returns {boolean} true if the value provided is not a primitive
 */
const isObject = (value) => Object(value) === value

/**
 * Check is the given argument value is a primitive string.
 * @param {*} string The value to check.
 * @returns {boolean} true if the provided value is a primitive string.
 */
const isString = (string) => typeof string === 'string'

module.exports = {
  has,
  isArray,
  isObject,
  isString,
}