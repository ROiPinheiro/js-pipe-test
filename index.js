const {
  isEmptyArray,
  getLastItem,
  getUserName,
  scream,
  toUppercase,
} = require("./utils");

const array = [{ id: 1, name: "Carlin" }];

const getLastUsernameParsed = (usersArray = []) =>
  array
  |> isEmptyArray
  |> getLastItem
  |> getUserName
  |> toUppercase
  |> scream;

const lastUsernameParsed = getLastUsernameParsed(array);

console.log(lastUsernameParsed);
