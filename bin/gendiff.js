#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js'

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format <type>', 'output format')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .action((filepath1, filepath2, formatName) => {
        const diff = genDiff(filepath1, filepath2, formatName.format);
        console.log(diff);
    });
    
program.parse(program.argv);