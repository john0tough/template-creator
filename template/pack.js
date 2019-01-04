const shell = require('shelljs');
const DIST_DIR = 'dist'
shell.mv(`-f`, '*.tgz', `${DIST_DIR}`);