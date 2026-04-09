import TicketsModel from "../models/Tickets.js";

class TicketsController
{
    constructor() {}

    async create(request, reply)
    {
        try
        {
            const ticket = await TicketsModel.create(request.body);

            if (ticket) reply.status(200).send({status: true, id: ticket.id});
        } catch(err)
        {
            console.error(err);
            reply.status(500).send({error: err});
        }
    }

    async getAll(request, reply)
    {
        try
        {
            const where = {...request.query};

            const list = await TicketsModel.findAll({where});
            reply.status(200).send(list);
        } catch(err)
        {
            console.error(err);
            reply.status(500).send({error: err});
        }
    }

    async getOne(request, reply)
    {
        try
        {
            const { id } = request.params;
            const ticket = await TicketsModel.findByPk(id);

            if (ticket) reply.status(200).send(ticket);
            else reply.status(404).send({error: 'ticket not found'});
        } catch(err)
        {
            console.error(err);
            reply.status(500).send({error: err});
        }
    }

    async update(request, reply)
    {
        try
        {
            const { id } = request.params;
            const data = request.body;
            delete data.id;

            const ticket = await TicketsModel.update(data, {
                where: {id}
            });

            if (typeof ticket[0] !== 'undefined' && ticket[0] === 1) reply.status(200).send({status: true});
            else reply.status(404).send({error: 'ticket not found'});
        } catch(err)
        {
            console.error(err);
            reply.status(500).send({error: err});
        }
    }

    async delete(request, reply)
    {
        try
        {
            const { id } = request.params;

            const result = await TicketsModel.destroy({
                where: {id}
            });

            if (result) reply.status(200).send({status: true});
            else reply.status(404).send({error: 'ticket not found'});
        } catch(err)
        {
            console.error(err);
            reply.status(500).send({error: err});
        }
    }
}

export default new TicketsController();