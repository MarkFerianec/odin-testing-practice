function capitalize(string) {
  let capitalizedFirstLetter = string[0].toUpperCase();
  let restOfString = string.slice(1);
  let newString = (capitalizedFirstLetter += restOfString);
  return newString;
}

export { capitalize };
