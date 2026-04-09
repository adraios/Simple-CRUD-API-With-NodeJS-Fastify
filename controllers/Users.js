import { where } from "sequelize";
import UserModel from "../models/Users.js";

class UserController
{
    constructor() {}

    async create(request, reply)
    {
        try
        {
            const user = await UserModel.create(request.body);

            if (user) reply.status(200).send({status: true, id: user.id});
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

            const list = await UserModel.findAll({where});
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
            const user = await UserModel.findByPk(id);

            if (user) reply.status(200).send(user);
            else reply.status(404).send({error: 'User not found'});
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

            const user = await UserModel.update(request.body, {
                where: {id}
            });

            if (typeof user[0] !== 'undefined' && user[0] === 1) reply.status(200).send({status: true});
            else reply.status(404).send({error: 'User not found'});
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

            const result = await UserModel.destroy({
                where: {id}
            });

            if (result) reply.status(200).send({status: true});
            else reply.status(404).send({error: 'User not found'});
        } catch(err)
        {
            console.error(err);
            reply.status(500).send({error: err});
        }
    }
}

export default new UserController();