const assert = require('assert');

const removeEWords = require('../problems/04-remove-e-words-filter');

describe('removeEWords()', function () {
  it('return a new string, containing only the words that don\'t have the letter "e" in them', function () {
    assert.equal(removeEWords('What time is it everyone?'), 'What is it');
    assert.equal(removeEWords('Enter the building'), 'building');
  });
});


