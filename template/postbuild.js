const shell = require('shelljs');
const DIST_DIR = 'dist'
shell.cp(`-Rf`, ['README.md', 'src/package.json'], `${DIST_DIR}`);
