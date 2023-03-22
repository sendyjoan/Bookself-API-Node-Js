const { addBookHandler, getAllBookHandler, getBookByIdHandler, putBookByIdHandler, deleteBookByIdHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },{
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },{
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
    },{
        method: 'PUT',
        path: '/books/{id}',
        handler: putBookByIdHandler,
    },{
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
    }
];

module.exports = routes;