#!/usr/bin/node
const fs = require('fs');
if (process.argv.length < 4) process.exit(1);
const fp = process.argv[2];
const strWrite = process.argv[3];
fs.writeFile(fp, strWrite, 'utf-8', (err) => {
  if (err) console.log(err);
});