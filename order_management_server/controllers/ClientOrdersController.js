import Clients from '../models/Clients';
import Orders from "../models/Orders";

export default class ClientOrdersController {
    static getClientsWithOrders = async (req, res, next) => {
        try {
            const clients = await Clients.findAll({
                include: [
                    {
                        model: Orders,
                        through: { attributes: [] },
                    },
                ],
            });

            res.json({
                status: 200,
                clients
            })
        }catch(err) {
            next(err);
        }
    }

    static createClient = async (req, res, next) => {
        try {
            const {client_name} = req.body;

            await Clients.create({client_name});

            res.json({
                status: 200,
            })

        }catch (e){
            next(e)
        }
    }

    static createOrder = async (req, res, next) => {
        try {
            const {order_name, client_id = 2} = req.body;

            const order = await Orders.create({order_name});
            const client = await Clients.findByPk(client_id);

            if (client) {
                await client?.addOrder(order);
            }

            res.json({
                status: 200,
            })
        }catch (e){
            next(e)
        }
    }

    static getAllClients = async (req, res, next) => {
        try {
            const clients =await Clients.findAll()

            res.json({
                status: 200,
                clients
            })

        }catch (e){
            next(e)
        }
    }

}