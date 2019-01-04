let fs = require('fs');
let path = require('path');
function copyFolderSync(from, to) {
    fs.mkdirSync(to);
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}
function replaceInFile (filePath, token, replaceValue){
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
         
        const result = data.replace(token,replaceValue);
        fs.writeFile(filePath, result, 'utf8', function(err) {
            if (err) {
               return console.log(err);
            };
        });
    });
}

const params =  [...process.argv].slice(2);
const from = `${__dirname}/template`;
const to = `${__dirname}/../${params[0]}/`;
const files = [
    'webpack.common.js',
    'package.json',
    'src/package.json'
];
const token = '__TEMPLATE_NAME__';
const replaceValue = params[0];

copyFolderSync(from, to);
files.forEach((filePath) => {
    replaceInFile(to + filePath, token, replaceValue);
});
