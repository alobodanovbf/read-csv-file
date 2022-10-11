import { createStream } from 'table';

export class tableView {
  constructor(numOfColumns) {
    this.config = {
      columnDefault: {
        width: 20,
      },
      columns: {
        0: {
          width: 10,
        },
        1: {
          width: 50,
        },
        2: {
          width: 10,
        },
      },
      columnCount: numOfColumns,
    };
    this.stream = createStream(this.config);
  }

  resultStream(data) {
    this.stream.write(data);
  }
}
