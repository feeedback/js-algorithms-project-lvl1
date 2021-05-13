### Hexlet tests and linter status:

[![Actions Status](https://github.com/feeedback/js-algorithms-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/feeedback/js-algorithms-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/b88e83aa538061d87a77/maintainability)](https://codeclimate.com/github/feeedback/js-algorithms-project-lvl1/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b88e83aa538061d87a77/test_coverage)](https://codeclimate.com/github/feeedback/js-algorithms-project-lvl1/test_coverage)
[![wakatime](https://wakatime.com/badge/github/feeedback/js-algorithms-project-lvl1.svg)](https://wakatime.com/badge/github/feeedback/js-algorithms-project-lvl1)

Реализация учебного проекта Hexlet Алгоритмы №1 https://ru.hexlet.io/programs/js-algorithms/projects/69

**Поисковый движок**

Всемирную сеть сложно представить без поисковиков. На большинстве сайтов так же есть встроенный поисковик. Все они используют под собой самые разные поисковые движки. В этом проекте мы напишем собственную реализацию поискового движка. Распространённая поисковая система с открытым исходным кодом — ElasticSearch.

_Пример использования:_

```
import buildSearchEngine from '@hexlet-code';

const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
const doc3 = { id: 'doc3', text: "I'm your shooter." };
const docs = [doc1, doc2, doc3];

const searchEngine = buildSearchEngine(docs);

searchEngine.search('shoot'); // ['doc1', 'doc2']
```
