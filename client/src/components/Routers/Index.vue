<template>
    <div class="container">
        <h2 class="mb-3 fw-bold text-light pt-3">Router Products</h2>
        <h4 class="mb-3 fw-bold text-light">Amount = {{ routers.length }} Product</h4>
        <button class="btn btn-info mb-3 fw-bold" v-on:click="navigateTo('/router/create/')">Create Router</button>
        <div class="row row-cols-2 d-flex justify-content-center fw-bold">
            <div v-for="router in routers" v-bind:key="router.id" class="col-5 mb-3 mx-1 p-3 text-start border border-2" style="background: #922B21;">
                <div class="row">
                    <div class="col-3">
                        <div class="input-group mb-3">
                            <div class="input-group-text">ID: </div>
                            <span class="form-control me-1">{{ router.id }}</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-group mb-3">
                            <div class="input-group-text">Brand: </div>
                            <span class="form-control me-1">{{ router.brand }}</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-group mb-3">
                            <div class="input-group-text">Price: </div>
                            <span class="form-control">฿{{ router.price }}</span>
                        </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-text">Product Name: </div>
                    <span class="form-control">{{ router.product }}</span>
                </div>
                <div class="row">
                    <div class="float-end">
                        <button class="btn btn-primary" v-on:click="navigateTo('/router/' + router.id)">View</button>
                        <button class="btn btn-success" v-on:click="navigateTo('/router/edit/' + router.id)">Edit</button>
                        <button class="btn btn-danger" v-on:click="deleteRouter(router)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import RoutersService from '@/services/RoutersService';
export default {
    data() {
        return {
            routers: []
        }
    },
    async created() {
        this.routers = (await RoutersService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteRouter(router) {
            let result = confirm("What to delete?")
            if (result) {
                try {
                    await RoutersService.delete(router)
                    this.refreshData()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.routers = (await RoutersService.index()).data
        },
        async back() {
            this.$router.back();
        }
    }
}
</script>
<style scoped></style>