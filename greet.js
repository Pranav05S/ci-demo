// Returns a greeting for a name. Tiny on purpose: the point is the pipeline, not the app.
function greet(name) {
  if (!name) return 'Hello, stranger!';
  return `Hello, ${name}!`;
}
module.exports = { greet };
