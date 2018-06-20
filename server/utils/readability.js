const syllable = require('syllable');
const flesch = require('flesch');

module.exports = text => {
  const numSentences = text.split('.').length;
  const words = text.split(' ');
  const syllables = words
    .map(word => syllable(word))
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return flesch({
    sentence: numSentences,
    word: words.length,
    syllable: syllables,
  });
};
