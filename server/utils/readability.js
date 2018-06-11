const syllable = require('syllable');
const fleshKincaid = require('flesch-kincaid');

module.exports = text => {
  const numSentences = text.split('.').length;
  const words = text.split(' ');
  const syllables = words
    .map(word => syllable(word))
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return fleshKincaid({
    sentence: numSentences,
    word: words.length,
    syllable: syllables,
  });
};
