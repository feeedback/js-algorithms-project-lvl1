import _ from 'lodash';

const search = (mapWordsToDocsId) => (wordRaw) => {
  const words = _.words(wordRaw);

  const wordsIncludesInDocsId = words.map((word) => mapWordsToDocsId[word]);
  const wordsExistInDocsId = wordsIncludesInDocsId.map((docId) => _.uniq(docId));

  const mapDocIdByUniqWordCountInDocs = _.countBy(wordsExistInDocsId.flat());
  const mapDocIdByWordCountInDocs = _.countBy(wordsIncludesInDocsId.flat());

  const uniqDocsId = _.uniq(wordsIncludesInDocsId.flat());

  return uniqDocsId.sort(
    (a, b) => mapDocIdByUniqWordCountInDocs[b] - mapDocIdByUniqWordCountInDocs[a]
      || mapDocIdByWordCountInDocs[b] - mapDocIdByWordCountInDocs[a],
  );
};

export default (docs) => {
  const mapWordsToDocsId = {};

  docs.forEach(({ id, text }) => {
    _.words(text).forEach((word) => {
      if (mapWordsToDocsId[word]) {
        mapWordsToDocsId[word].push(id);
      } else {
        mapWordsToDocsId[word] = [id];
      }
    });
  });

  return { search: search(mapWordsToDocsId) };
};
