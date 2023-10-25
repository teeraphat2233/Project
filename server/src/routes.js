const RouterController = require('./controllers/RouterController')

module.exports = (app) => {
    /* RESFUL Api dor users management */

    // get all router
    app.get('/routers', RouterController.index)

    // create router
    app.post('/router', RouterController.create)

    // edit router, suspend, active
    app.put('/router/:routerId', RouterController.put)

    // delete router
    app.delete('/router/:routerId', RouterController.remove)

    // get router by id
    app.get('/router/:routerId', RouterController.show)
}