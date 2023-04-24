// Import from module1 and module2

// module1
import hello from './module1.js';
// module2
import {greet, go} from './module2.js';

// Call from module1 and module2
// module1
hello();

// module2
console.log(greet('john'), go());

// Create Table
class Table {
  constructor(datas, columns) {
    this.datas = datas;
    this.columns = columns;
  };
  
  // Create Header
  headRow() {
    let open = `<thead><tr>`;
    let close = `</tr></thead>`;

    this.columns.forEach((column) => {
      open += `<th>${column}</th>`;
    });
    return open + close;
  };

  // Create Body
  body() {
    let open = `<tbody>`;
    let close = `</tbody>`;

    this.datas.forEach((row) => {
      open += `<tr>`;

      this.columns.forEach((column) => {
        open += `<td>${row[column]}</td>`;
      });
      open += `</tr>`;
    });
    return open + close;
  };

  // Create Table
  render(merger) {
    let table =
    `<table class="table table-hover" border="1">
    ${this.headRow()}
    ${this.body()}
    </table>`;
    merger.innerHTML = table;
  };
};

// Input data and columns
const data = [
  {
    Name: "Brenda E. Wilson",
    Email: "nided42238@raotus.com",
    Phone: "+1 505-346-4886",
  },
  {
    Name: "Maria Luisa Padovesi",
    Email: "pozusa@lyft.live",
    Phone: "+39 375 984 463",
  },
  {
    Name: "Unohana Retsu",
    Email: "kemabeh399@raotus.com",
    Phone: "+81 90-3374-8138",
  },
  {
    Name: "Kung Lao",
    Email: "tipiyo9773@momoshe.com",
    Phone: "+90 561 615 20 75",
  },
  {
    Name: "Liu Kang",
    Email: "waxam96086@momoshe.com",
    Phone: "+420 608 663 220",
  },
  {
    Name: "Shang Tsung",
    Email: "lodyca@clout.wiki",
    Phone: "+86 174 0133 9258",
  },
];

const columns = ["Name", "Email", "Phone"];

const table = new Table(data, columns);

const library = document.getElementById("library");
table.render(library);