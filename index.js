import Fastify from 'fastify';
import routes from './routes.js';
import db from './db.js';
import cors from '@fastify/cors';

const port = process.env.PORT || 3500;
const host = ('RENDER' in process.env) ? '0.0.0.0' : 'localhost'; 

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
    fastify.listen({ host: host, port: port });
    database();
} catch(err)
{
    console.error(err);
}