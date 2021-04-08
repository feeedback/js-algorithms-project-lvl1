import _ from 'lodash';

const search = (mapWordsToDocsId, mapDocIdToWordsCount, docsCount) => (wordRaw) => {
  const words = _.words(wordRaw);
  const wordsIncludesInDocsId = words.map((word) => mapWordsToDocsId[word]);
  const wordsExistInDocsId = wordsIncludesInDocsId.map((docId) => _.uniq(docId));

  const mapDocIdToUniqWordCountInDocs = _.countBy(wordsExistInDocsId.flat());
  const mapDocIdToWordCountInDocs = _.countBy(wordsIncludesInDocsId.flat());

  const uniqDocsId = _.uniq(wordsIncludesInDocsId.flat());

  const getTfIdf = (word) => {
    const tf = mapDocIdToWordCountInDocs[word] / mapDocIdToWordsCount[word];

    const docsCountIncludesThisWord = (mapWordsToDocsId[word]?.length || 0);
    const idf = Math.log10(docsCount / docsCountIncludesThisWord);

    return tf * idf;
  };

  return uniqDocsId.sort(
    (a, b) => mapDocIdToUniqWordCountInDocs[b] - mapDocIdToUniqWordCountInDocs[a]
      || getTfIdf(b) - getTfIdf(a),
  );
};

export default (docs) => {
  const mapWordsToDocsId = {};
  const mapDocIdToWordsCount = docs
    .reduce((acc, { id, text }) => ({ ...acc, [id]: _.words(text).length }), {});
  const docsCount = docs.length;

  docs.forEach(({ id, text }) => {
    _.words(text).forEach((word) => {
      if (mapWordsToDocsId[word]) {
        mapWordsToDocsId[word].push(id);
      } else {
        mapWordsToDocsId[word] = [id];
      }
    });
  });

  return { search: search(mapWordsToDocsId, mapDocIdToWordsCount, docsCount) };
};
