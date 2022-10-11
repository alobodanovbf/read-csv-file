import yargs from 'yargs';
import { readFile } from './src/read-file';

yargs
  .command(
    '$0 [file]',
    'Print form table with average for spesific location and title',
    (yargs) => {
      yargs.positional('file', {
        type: 'string',
        describe: 'path to the file',
      });
    },
    function (argv) {
      readFile(argv.file, argv);
    }
  )
  .option('location', {
    demandOption: true,
    describe: 'Print averages for spesific location',
    type: 'string',
  })
  .option('field', {
    demandOption: true,
    describe: 'Print averages for spesific title',
    type: 'string',
  }).argv;
