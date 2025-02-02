'use strict';

// Import utility functions for writing JSON responses
var utils = require('../utils/writer.js');
// Import service functions for handling requests
var Default = require('../service/DefaultService');

// Handler for DELETE request to delete an author by ID
module.exports.authorsAuthorIdDELETE = function authorsAuthorIdDELETE (req, res, _, authorId) {
  Default.authorsAuthorIdDELETE(authorId)
    .then(function (response) {
      // Respond with the result of the delete operation
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for GET request to retrieve an author by ID
module.exports.authorsAuthorIdGET = function authorsAuthorIdGET (req, res, _, authorId) {
  Default.authorsAuthorIdGET(authorId)
    .then(function (response) {
      // Respond with the retrieved author data
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for PUT request to update an author by ID
module.exports.authorsAuthorIdPUT = function authorsAuthorIdPUT (req, res, _, body, authorId) {
  Default.authorsAuthorIdPUT(body, authorId)
    .then(function (response) {
      // Respond with the result of the update operation
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for GET request to retrieve all authors
module.exports.authorsGET = function authorsGET (req, res, _) {
  Default.authorsGET()
    .then(function (response) {
      // Respond with the list of authors
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for POST request to create a new author
module.exports.authorsPOST = function authorsPOST (req, res, _, body) {
  Default.authorsPOST(body)
    .then(function (response) {
      // Respond with the result of the create operation
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for DELETE request to delete a book by ID
module.exports.booksBookIdDELETE = function booksBookIdDELETE (req, res, _, bookId) {
  Default.booksBookIdDELETE(bookId)
    .then(function (response) {
      // Respond with the result of the delete operation
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for GET request to retrieve a book by ID
module.exports.booksBookIdGET = function booksBookIdGET (req, res, _, bookId) {
  Default.booksBookIdGET(bookId)
    .then(function (response) {
      // Respond with the retrieved book data
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for PUT request to update a book by ID
module.exports.booksBookIdPUT = function booksBookIdPUT (req, res, _, body, bookId) {
  Default.booksBookIdPUT(body, bookId)
    .then(function (response) {
      // Respond with the result of the update operation
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for GET request to retrieve all books
module.exports.booksGET = function booksGET (req, res, _) {
  Default.booksGET()
    .then(function (response) {
      // Respond with the list of books
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for POST request to create a new book
module.exports.booksPOST = function booksPOST (req, res, _, body) {
  Default.booksPOST(body)
    .then(function (response) {
      // Respond with the result of the create operation
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for DELETE request to delete a category by ID
module.exports.categoriesCategoryIdDELETE = function categoriesCategoryIdDELETE (req, res, _, categoryId) {
  Default.categoriesCategoryIdDELETE(categoryId)
    .then(function (response) {
      // Respond with the result of the delete operation
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for GET request to retrieve a category by ID
module.exports.categoriesCategoryIdGET = function categoriesCategoryIdGET (req, res, _, categoryId) {
  Default.categoriesCategoryIdGET(categoryId)
    .then(function (response) {
      // Respond with the retrieved category data
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for PUT request to update a category by ID
module.exports.categoriesCategoryIdPUT = function categoriesCategoryIdPUT (req, res, _, body, categoryId) {
  Default.categoriesCategoryIdPUT(body, categoryId)
    .then(function (response) {
      // Respond with the result of the update operation
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for GET request to retrieve all categories
module.exports.categoriesGET = function categoriesGET (req, res, _) {
  Default.categoriesGET()
    .then(function (response) {
      // Respond with the list of categories
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};

// Handler for POST request to create a new category
module.exports.categoriesPOST = function categoriesPOST (req, res, _, body) {
  Default.categoriesPOST(body)
    .then(function (response) {
      // Respond with the result of the create operation
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle errors by responding with the error message
      utils.writeJson(res, response);
    });
};