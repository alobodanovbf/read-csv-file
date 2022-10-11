import fs from 'fs';
import { parse } from '@fast-csv/parse';
import { transformer } from './lib/transformer';
import { tableView } from './table';

export async function readFile(filePath, argv) {
  const table = new tableView(3);
  let count = 0;
  let total = 0;

  return fs
    .createReadStream(filePath)
    .pipe(parse({ headers: true, columns: true }))
    .transform(transformer)
    .on('data', (row) => {
      if (row.field === argv.field && row.id === argv.location) {
        count++;
        total += Number(row.total);
      }
    })
    .on('end', () => {
      if (count > 0) {
        table.resultStream([
          argv.location,
          argv.field,
          (total / count).toFixed(2),
        ]);
      } else {
        console.log('No Data');
      }
    });
}
