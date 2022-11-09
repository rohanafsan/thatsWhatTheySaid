const charQuery = 'SELECT * FROM characters ORDER BY id ASC';
const postQuery = 'INSERT INTO characters(firstname, secondname) VALUES($1, $2)';
const quoteQuery = 'SELECT * FROM characterquotes';
const quoteQueryID = 'SELECT quote FROM characterquotes WHERE firstname = $1 ORDER BY RANDOM() LIMIT 1';
const postQuote = 'INSERT INTO characterquotes(firstname, quote) VALUES($1, $2)';
const deleteID = 'DELETE FROM characterquotes WHERE id=($1)';
const checkQuote = 'SELECT quote FROM characterquotes WHERE firstname = $1 AND quote = $2'


module.exports = {
  charQuery,
  postQuery,
  quoteQuery,
  quoteQueryID,
  postQuote,
  deleteID,
  checkQuote,
};
