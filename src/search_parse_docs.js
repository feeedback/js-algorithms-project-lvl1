import _ from 'lodash';

export default (docs) => {
  const mapWordsToDocsId = {};

  docs.forEach(({ id, text }) => {
    const docUniqWords = _.uniq(_.words(text));

    docUniqWords.forEach((word) => {
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

      return mapWordsToDocsId[word];
    },
  };
};

// const mapWordsToDocsId = docs.reduce((acc, { id, text }) => {
//   const docUniqWords = _.uniq(_.words(text));

//   docUniqWords.forEach((word) => {
//     if (acc[word]) {
//       acc[word].push(id);
//     } else {
//       acc[word] = [id];
//     }
//   });
//   return acc;
// }, {});
