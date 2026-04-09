import StoreModel from "../models/Stores.js";

class StoreController
{
    constructor() {}

    async create(request, reply)
    {
        try
        {
            const store = await StoreModel.create(request.body);

            if (store) reply.status(200).send({status: true, id: store.id});
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

            const list = await StoreModel.findAll({where});
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
            const store = await StoreModel.findByPk(id);

            if (store) reply.status(200).send(store);
            else reply.status(404).send({error: 'store not found'});
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

            const store = await StoreModel.update(data, {
                where: {id}
            });

            if (typeof store[0] !== 'undefined' && store[0] === 1) reply.status(200).send({status: true});
            else reply.status(404).send({error: 'store not found'});
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

            const result = await StoreModel.destroy({
                where: {id}
            });

            if (result) reply.status(200).send({status: true});
            else reply.status(404).send({error: 'store not found'});
        } catch(err)
        {
            console.error(err);
            reply.status(500).send({error: err});
        }
    }
}

export default new StoreController();