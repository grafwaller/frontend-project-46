import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');

test('gendiff', () => {
  const actual = genDiff(json1, json2);
  const expected = readFile('expected_file.txt');
  expect(actual).not.toBe(expected);
});
