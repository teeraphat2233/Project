<template>
    <div class="container position-relative position-absolute top-50 start-50 translate-middle">
        <div class="d-flex justify-content-center">
            <div class="row text-start rounded-5 p-3" style="background: #922B21;">
                <h1 class="text-center fw-bold mb-3 mt-3 text-light">Show Router</h1>
                <hr>
                <div class="col">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Product Name: </span>
                        <span class="form-control">{{ router.product }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Brand Name: </span>
                        <span class="form-control">{{ router.brand }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Network Standard: </span>
                        <span class="form-control">{{ router.network_standard }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Modem Internet: </span>
                        <span class="form-control">{{ router.modem_internet }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Device Interfaces: </span>
                        <span class="form-control">{{ router.device_interfaces }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Wireless Technology: </span>
                        <span class="form-control">{{ router.wireless_technology }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Operation Mode: </span>
                        <span class="form-control">{{ router.operation_mode }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Special Feature: </span>
                        <span class="form-control">{{ router.special_feature }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Power Input: </span>
                        <span class="form-control">{{ router.power_input }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Operating Temperature: </span>
                        <span class="form-control">{{ router.operating_temperature }}</span>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Storage Temperature: </span>
                        <span class="form-control">{{ router.storage_temperature }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Operating Humidity: </span>
                        <span class="form-control">{{ router.operating_humidity }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Storage Humidity: </span>
                        <span class="form-control">{{ router.storage_humidity }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Certification: </span>
                        <span class="form-control">{{ router.certification }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Dimensions: </span>
                        <span class="form-control me-2">{{ router.dimensions }}</span>
                        <span class="input-group-text">Weight: </span>
                        <span class="form-control">{{ router.weight }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Color: </span>
                        <span class="form-control me-2">{{ router.color }}</span>
                        <span class="input-group-text">Warranty: </span>
                        <span class="form-control">{{ router.warranty }}</span>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Option: </span>
                        <span class="form-control me-2">{{ router.option }}</span>
                        <span class="input-group-text">Price: </span>
                        <span class="form-control">฿{{ router.price }}</span>
                    </div>
                    <div class="mb-3 d-flex justify-content-start">
                        <a @click="$router.back()" class="btn btn-danger border">Go Back</a>
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
            router: null
        }
    },
    async created() {
        try {
            let routerId = this.$route.params.routerId
            this.router = (await RoutersService.show(routerId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    }

}
</script>
<style scoped></style>