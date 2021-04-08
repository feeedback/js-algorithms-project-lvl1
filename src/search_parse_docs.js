import _ from 'lodash';

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

  return {
    search: (wordRaw) => {
      const [word] = _.words(wordRaw);

      const docsId = mapWordsToDocsId[word];
      const mapIdToFreq = _.countBy(docsId);

      const result = _.uniq(docsId).sort((a, b) => mapIdToFreq[b] - mapIdToFreq[a]);
      return result;
    },
  };
};
