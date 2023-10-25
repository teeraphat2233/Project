const { Router } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const routers = await Router.findAll()
            res.send(routers)
        } catch (error) {
            res.status(500).send({
                error: 'The routers information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const router = await Router.create(req.body)
            res.send(router.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'Create router incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Router.update(req.body, {
                where: {
                    id: req.params.routerId
                }
            })
            res.send(req.body)
        } catch (error) {
            res.status(500).send({
                error: 'Update router incorrect'
            })
        }
    },

    async remove(req, res) {
        try {
            const router = await Router.findOne({
                where: {
                    id: req.params.routerId
                }
            })

            if (!router) {
                return res.status(403).send({
                    error: 'The router information was incorrect'
                })
            }

            await router.destroy()
            res.send(router)
        } catch (error) {
            res.status(500).send({
                error: 'The router information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const router = await Router.findByPk(req.params.routerId)
            res.send(router)
        } catch (error) {
            res.status(500).send({
                error: 'The router information was incorrect'
            })
        }
    }
}