const fs = require('fs');
const path = require('path');

console.log('process.env.SPREADSHEET_CREDENTIALS_JSON')
console.log(process.env.SPREADSHEET_CREDENTIALS_JSON)

console.log(process.env.SPREADSHEET_CREDENTIALS_JSON.split(String.raw`\n`).join('\n'))

if (process.env.SPREADSHEET_CREDENTIALS_JSON) {
  fs.writeFileSync(
    path.resolve(process.cwd(), 'spreadsheet-service-account.json'),
    process.env.SPREADSHEET_CREDENTIALS_JSON.split(String.raw`\n`).join('\n')
  );
} else {
  console.error(
    'SPREADSHEET_CREDENTIALS_JSON environment variable is not set.'
  );
  process.exit(1);
}
