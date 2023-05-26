import _ from 'lodash';

const findDiff = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const differences = sortedKeys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (!Object.hasOwn(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]} `;
    }
    return `    ${key}: ${data1[key]}`;
  });
  return `{\n${differences.join('\n')}\n}`;
};

const makeDiffTree = (data1, data2) => findDiff(data1, data2);

export default makeDiffTree;
