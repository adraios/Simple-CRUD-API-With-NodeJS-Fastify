import Fastify from 'fastify';
import routes from './routes.js';
import db from './db.js';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });
await fastify.register(cors, {

});

// POST         - Create
// GET          - Read
// PUT, PATCH   - Update
// DELETE       - Delete

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

routes.forEach((route) => {
    fastify.route(route);
});

async function database()
{
    try
    {
        await db.sync();
        console.log('Database synchronized successfully.');
    } catch(err)
    {
        console.error(err);
    }
}

try
{
    fastify.listen({ port:3500 });
    database();
} catch(err)
{
    console.error(err);
}