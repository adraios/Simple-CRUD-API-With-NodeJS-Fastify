import UserController from "./controllers/Users.js";
import StoreController from "./controllers/Stores.js";
import TicketsController from "./controllers/Tickets.js";

const routes = [
    
    /////////////// USERS ///////////////
    {
        method: 'POST',
        url: '/users',
        handler: UserController.create
    },
    {
        method: 'GET',
        url: '/users',
        handler: UserController.getAll
    },
    {
        method: 'GET',
        url: '/users/:id',
        handler: UserController.getOne
    },
    {
        method: 'PUT',
        url: '/users/:id',
        handler: UserController.update
    },
    {
        method: 'DELETE',
        url: '/users/:id',
        handler: UserController.delete
    },

    /////////////// STORES ///////////////
    {
        method: 'POST',
        url: '/store',
        handler: StoreController.create
    },
    {
        method: 'GET',
        url: '/store',
        handler: StoreController.getAll
    },
    {
        method: 'GET',
        url: '/store/:id',
        handler: StoreController.getOne
    },
    {
        method: 'PUT',
        url: '/store/:id',
        handler: StoreController.update
    },
    {
        method: 'DELETE',
        url: '/store/:id',
        handler: StoreController.delete
    },

    /////////////// TICKETS ///////////////
    {
        method: 'POST',
        url: '/ticket',
        handler: TicketsController.create
    },
    {
        method: 'GET',
        url: '/ticket',
        handler: TicketsController.getAll
    },
    {
        method: 'GET',
        url: '/ticket/:id',
        handler: TicketsController.getOne
    },
    {
        method: 'PUT',
        url: '/ticket/:id',
        handler: TicketsController.update
    },
    {
        method: 'DELETE',
        url: '/ticket/:id',
        handler: TicketsController.delete
    }
];

export default routes;