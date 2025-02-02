const test = require('ava');
const got = require('got');
const app = require('../index.js');
const http = require('http');



test.before(async (t) => {
    t.context.server = http.createServer(app);
   // const server = t.context.server.listen();
    //const { port } = server.address();
    t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${8080}` });
    console.log('Server started');
});

// test.before(async (t) => {
// 	t.context.server = http.createServer(app);
//   const server = t.context.server.listen();
//   const { port } = server.address();
//     t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${port}` });
//   });

// After the tests
test.after.always((t) => {
    t.context.server.close();
    console.log('Server closed');
});


// Test case for getting a book by valid ID
test("GET /book/{id} - Should return a book for a valid ID", async (t) => {
    const {body, statusCode} = await t.context.got("books");
    t.is(statusCode, 200, "Response status should be 200");
});

test("GET authors/{authorId} endpoint returns valid JSON content-type header", async (t) => {
	const { headers, statusCode } = await t.context.got("authors/0");
	t.is(statusCode, 200);                   // The status code should be 200
	t.is(headers["content-type"], "application/json"); // The content-type should be JSON
});


test("GET /book/{id} - Shdfdsfould return a book for a valid ID", async (t) => {
    const {body, statusCode} = await t.context.got("authors/0");
    t.is(statusCode, 200, "Response status should be 200");
});

test("DELETE /book/{id} - Should return a book for a valid ID", async (t) => {
    const {body, statusCode} = await t.context.got.delete("books/0");
    t.is(statusCode, 200, "Response status should be 200");
});

test("autorIdPut", async (t) => {
    const {body, statusCode} = await t.context.got.put("authors/0", {json: {name: "no"}});
    t.is(statusCode, 200, "Response status should be 200");
  });
  

  const Bookdata = {
    "title": "string",
    "author_id": 0,
    "category_id": 0,
    "id": 0,
    "published_year": 0
  };
  
  test("BookPost", async (t) => {
    const{headers, statusCode} = await t.context.got.post(`books`, {json: Bookdata, responseType: 'json'});
    t.is(statusCode, 200, "Response status should be 200");
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
  });

  test("GET categories/{categoryId} endpoint returns valid JSON content-type header", async (t) => {
        const categoryId = 1;
        const {headers, statusCode} = await t.context.got(`categories/${categoryId}`);
        t.is(statusCode, 200);                   // The status code should be 200
        t.is(headers["content-type"], "application/json"); // The content-type should be JSON
  });

  test("DELETE categories/{categoryId} endpoint returns valid JSON content-type header", async (t) => {
    const categoryId = 1;
    const{headers, statusCode} = await t.context.got.delete(`categories/${categoryId}`);
    t.is(statusCode, 200);                   // The status code should be 200
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
});