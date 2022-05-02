// const http = require('http');

// const HOSTNAME = process.env.HOSTNAME || 'localhost';
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader('content-Type', 'text/plain');
//   response.end('Hello world');
// });

// server.listen(PORT, HOSTNAME, () => {
//   console.log(`server running at http://${HOSTNAME}:${PORT}`);
// });

// console.log(__dirname);
// console.log(__filename);

//////////////////////////////////////////////////////////////
// const fs = require('fs');
// const { writeFile, writeFileSync } = require('fs');

// // Async readFile
// fs.readFile('hi.txt', (err, data) => {
//   if(err) {
//     console.log(err);
//     return
//   }
//   console.log(data.toString());
// })

// // Sync readFileSync
// try {
//   const data = fs.readFileSync('hi.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

// console.log('Log from outside');

//////////////////////////////////////////////////////
// Writing to file
// const newContent = '\nThis is some new text';

// // Async writeFile
// writeFile('hi.txt', newContent, { flag: 'a' }, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('content written!');
// });

// // Sync writeFileSync
// try {
//   writeFileSync('hi.txt', newContent);
//   console.log('Content written!');
// } catch (err) {
//   console.error(err);
// }

/////////////////////////////////////
// // Append Files
// const { appendFile } = require('fs');

// appendFile('hi.txt', newContent, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Content written!');
// });

/////////////////////////////////////////////
// Renaming and Deleting(unlink)

// const { rename, unlink } = require('fs');

// // Rename
// rename('hi.txt', 'hello.txt', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File renamed');
// });

// // Delete
// unlink('hello.txt', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File Deleted');
// });

////////////////////////////////////////////////
// // Modules- Export and Import

// // const addNumbs = require('./addNumbs'); // commonJS module
//  import { addNumbs } from "./addNumbs.js"; // ESModule

// const sum = addNumbs(2, 2);
// console.log(sum);

////////////////////////////////////////////////
// // Basic HTML content

// const http = require('http');

// const PORT = process.env.PORT || 3000;

// http
//   .createServer((req, res) => {
//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Type', 'text/html');

//     // res.write('Hello world');
//     // res.write('\nHello world again');
//     // res.end('\nTHE END');
//     res.end('<h1>Hello World</h1>');
//   })
//   .listen(PORT, () => console.log(`Server listening on port ${PORT}`));

////////////////////////////////////////////////
// // Basic Web server with HTML File

// const http = require('http');
// const fs = require('fs');

// const PORT = process.env.PORT || 3000;

// http
//   .createServer((req, res) => {
//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Type', 'text/html');

//     fs.readFile('index.html', (err, data) => {
//       if (err) console.error(err);

//       res.end(data);
//     });
//   })
//   .listen(PORT, () => console.log(`Server listening on port ${PORT}`));

////////////////////////////////////////////////
// // Basic Web server Routing

const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');

  let path = './';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      // res.setHeader('Location', '/')
      // res.statusCode = 301;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) console.error(err);

    res.end(data);
  });
});
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
