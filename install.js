const fs = require('fs');
const path = require('path');

let folderPath = path.resolve(__dirname, './.swc');
const packageJsonPath = path.resolve(folderPath, 'package.json');

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}
if (!fs.existsSync(packageJsonPath)) {
  fs.writeFileSync(packageJsonPath, JSON.stringify({
    name: 'swc',
    version: "1.0.0",
    dependencies: {
      "@swc/core": "1.3.73"
    }
  }));
}

console.log('installing @swc/core for this platform and arch');

require('child_process').spawnSync(process.env.NODE, [
  process.env.npm_execpath,
  'install'
], {
  cwd: folderPath,
  stdio: 'inherit'
}).toString().trim();
