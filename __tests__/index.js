import { test, expect } from '@jest/globals';
import buildSearchEngine from '../src/index.js';

// создание документа // документ имеет два атрибута "id" и "text"
const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
const doc3 = { id: 'doc3', text: "I'm your shooter." };
const docs = [doc1, doc2, doc3];

let searchEngine = null;
beforeEach(async () => {
  searchEngine = buildSearchEngine(docs); // поисковый движок запомнил документы
});

test('searchEngine - simple search', () => {
  expect(searchEngine.search('shoot')).toStrictEqual(['doc1', 'doc2']);
});
test('searchEngine - search word filtered from punctuation marks', () => {
  expect(searchEngine.search('pint')).toStrictEqual(searchEngine.search('pint!'));
});
test('searchEngine - search string. Result sorted by the number of occurrences of words', () => {
  expect(searchEngine.search('shoot at me')).toStrictEqual(['doc2', 'doc1']);
});
