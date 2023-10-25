import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('routers')
    },
    show (routerId) {
        return Api().get('router/' + routerId)
    },
    post (router) {
        return Api().post('router/', router)
    },
    put (router) {
        return Api().put('router/' + router.id, router)
    },
    delete (router) {
        return Api().delete('router/' + router.id, router)
    },
}