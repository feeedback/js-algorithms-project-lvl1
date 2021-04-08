import { test, expect } from '@jest/globals';
// import { createFixturesFilePath } from '../src/utils.js';
// import buildSearchEngine from '../src/index.js';

import buildSearchEngine from '../src/search_parse_docs.js';

// const filepathJsonA = createFixturesFilePath('json/file_deep1.json');
// const filepathJsonB = createFixturesFilePath('json/file_deep2.json');
// const filepathYamlA = createFixturesFilePath('yaml/file_deep1.yml');
// const filepathYamlB = createFixturesFilePath('yaml/file_deep2.yml');

// создание документа // документ имеет два атрибута "id" и "text"
const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
const doc3 = { id: 'doc3', text: "I'm your shooter." };
const docs = [doc1, doc2, doc3];

let searchEngine = null;
beforeEach(async () => {
  searchEngine = buildSearchEngine(docs); // поисковый движок запомнил документы
});

test('buildSearchEngine - simple search', () => {
  expect(searchEngine.search('shoot')).toStrictEqual(['doc2', 'doc1']);
  expect(searchEngine.search('pint')).toStrictEqual(searchEngine.search('pint!'));
  expect(searchEngine.search('shoot at me')).toStrictEqual(['doc2', 'doc1']);
});
