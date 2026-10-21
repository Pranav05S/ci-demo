const http = require('http');
const { greet } = require('./greet');
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  const name = new URL(req.url, 'http://x').searchParams.get('name');
  res.end(greet(name) + '\n');
}).listen(port, () => console.log(`Listening on ${port}`));
