<template>
    <div class="container position-relative position-absolute top-50 start-50 translate-middle">
        <div class="d-flex justify-content-center">
            <form v-on:submit.prevent="createRouter" class="row text-start rounded-5 p-3" style="background: #922B21;">
                <h1 class="text-center fw-bold mb-3 mt-3 text-light">Create Router</h1>
                <hr>
                <div class="col">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Product Name: </span>
                        <input type="text" class="form-control" v-model="router.product">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Brand Name: </span>
                        <input type="text" class="form-control" v-model="router.brand">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Network Standard: </span>
                        <input type="text" class="form-control" v-model="router.network_standard">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Modem Internet: </span>
                        <input type="text" class="form-control" v-model="router.modem_internet">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Device Interfaces: </span>
                        <input type="text" class="form-control" v-model="router.device_interfaces">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Wireless Technology: </span>
                        <input type="text" class="form-control" v-model="router.wireless_technology">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Operation Mode: </span>
                        <input type="text" class="form-control" v-model="router.operation_mode">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Special Feature: </span>
                        <input type="text" class="form-control" v-model="router.special_feature">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Power Input: </span>
                        <input type="text" class="form-control" v-model="router.power_input">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Operating Temperature: </span>
                        <input type="text" class="form-control" v-model="router.operating_temperature">
                    </div>
                </div>
                <div class="col">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Storage Temperature: </span>
                        <input type="text" class="form-control" v-model="router.storage_temperature">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Operating Humidity: </span>
                        <input type="text" class="form-control" v-model="router.operating_humidity">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Storage Humidity: </span>
                        <input type="text" class="form-control" v-model="router.storage_humidity">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Certification: </span>
                        <input type="text" class="form-control" v-model="router.certification">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Dimensions: </span>
                        <input type="text" class="form-control me-2" v-model="router.dimensions">
                        <span class="input-group-text">Weight: </span>
                        <input type="text" class="form-control" v-model="router.weight">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Color: </span>
                        <input type="text" class="form-control me-2" v-model="router.color">
                        <span class="input-group-text">Warranty: </span>
                        <input type="text" class="form-control" v-model="router.warranty">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Option: </span>
                        <input type="text" class="form-control me-2" v-model="router.option">
                        <span class="input-group-text">Price: </span>
                        <input type="number" class="form-control" v-model="router.price">
                    </div>
                    <div class="mb-3 d-flex justify-content-start">
                        <button type="submit" class="btn btn-success border me-2">Create</button>
                        <a @click="$router.back()" class="btn btn-danger border">Go Back</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import RoutersService from '@/services/RoutersService'

export default {
    data() {
        return {
            router: {
                product: '',
                brand: '',
                network_standard: '',
                modem_internet: '',
                wireless_technology: '',
                device_interfaces: '',
                operation_mode: '',
                special_feature: '',
                power_input: '',
                operating_temperature: '',
                storage_temperature: '',
                operating_humidity: '',
                storage_humidity: '',
                certification: '',
                dimensions: '',
                weight: '',
                color: '',
                warranty: '',
                option: '',
                price: ''
            }
        }
    },
    methods: {
        async createRouter() {
            try {
                await RoutersService.post(this.router)
                this.$router.push({
                    name: 'routers'
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped></style>