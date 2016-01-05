'use strict';

module.exports = function hackerCase(text) {
  var upperCase = false;

  return text.replace(/\w/g, function(char) {
    return char[(upperCase = !upperCase) ? 'toLocaleUpperCase' : 'toLocaleLowerCase']();
  });
};
