const getLastItem = (arr = []) => arr[arr.length - 1];
const isEmptyArray = (arr = []) => (arr.length > 0 ? arr : throw new Error("Empty array"));
const getUserName = (user = {}) => user.name || throw new Error("user.name property not found");
const toUppercase = (string = "") => string.toLocaleUpperCase();
const scream = (string = "") => string + "!!!";

module.exports = { getLastItem, isEmptyArray, getUserName, toUppercase, scream };
