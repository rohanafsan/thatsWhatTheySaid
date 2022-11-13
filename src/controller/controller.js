const pool = require('../db/db');
const queries = require('../queries/queries')

const getCharacters = (req, res) => {
  pool.query(queries.charQuery, (error, results) => {
        if (error) throw (error);
        res.status(200).json(results.rows);
    });
};

const postCharacters = (req, res) => {
  const { firstname, secondname } = req.body;
  pool.query(queries.postQuery, [firstname, secondname], (error, results) => {
        if (error) throw (error);
        res.redirect(200, '/characters');
    });
};


const getCharacterQuotes = (req, res) => {
  pool.query(queries.quoteQuery, (error, results) => {
        if (error) throw (error);
        res.status(200).json(results.rows);
    });
};

const getCharacterQuotesByID = (req, res) => {
  const { id } = req.params;
  pool.query(queries.quoteQueryID, [id], (error, results) => {
        if (error) throw (error);
        res.status(200).json(results.rows);
    });
};


const postQuote = (req, res) => {
  const { firstname, quote } = req.body;

  pool.query(queries.checkQuote, [firstname, quote], (error, results) => {
    if (results.rows.length) {
      res.send("Quote for this character alredy exists");
    }

    pool.query(queries.postQuote, [firstname, quote], (error, results) => {
      if (error) throw (error);
      res.status(201).send('Quote created successfully');
    });
  });
};


const deleteCharacterQuotesByID = (req, res) => {
  const { id } = request.params.id;
  pool.query(queries.deleteID, [id], (error, results) => {
        if (error) throw (error);
        res.redirect(200, '/theOfficequotes');
    });
};


const getTrivia = (req, res) => {
  pool.query(queries.getTrivia, (error, results) => {
        if (error) throw (error);
        res.status(200).json(results.rows);
    });
};


module.exports = {
  getCharacters,
  postCharacters,
  getCharacterQuotes,
  getCharacterQuotesByID,
  postQuote,
  deleteCharacterQuotesByID,
  getTrivia,
};
