<template>
    <div class="container mt-5">
        <div class="card">
            <h4>Edit</h4>
        </div>
        <div class="card-body">
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" class="form-control" v-model="model.bus.name">
                </div>
                <div class="mb-3">
                    <label for="">Title</label>
                    <input type="text" class="form-control" v-model="model.bus.title">
                </div>
                <div class="mb-3">
                    <label for="">Company</label>
                    <input type="text" class="form-control" v-model="model.bus.company"> 
                </div>
                <div class="mb-3">
                    <label for="">Address</label>
                    <input type="text" class="form-control" v-model="model.bus.address">
                </div>
                <div class="mb-3">
                   <button type="button" @click="saveBus" class="btn btn-primary">Add</button>
                </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'busEdit',
    data() {
        return {
            model: {
                bus: {
                    name: '',
                    title: '',
                    company: '',
                    address: ''
                }
            }
        };
    },
    mounted() {
        const busId = this.$route.params.id;
        this.getBusData(busId);
    },
    methods: {
        getBusData(busId) {
            axios.get(`http://localhost:8000/api/business-cards/${busId}`)
                .then(response => {
                    this.model.bus = response.data;
                })
                .catch(error => {
                    console.error('Error fetching bus data:', error);
                });
        },
        saveBus() {
            const busId = this.$route.params.id;
            axios.put(`http://localhost:8000/api/business-cards/${busId}`, this.model.bus)
                .then(response => {
                    console.log('Bus data updated:', response.data);
                    // Optionally, redirect to another page after saving
                    // Example: this.$router.push('/bus');
                })
                .catch(error => {
                    console.error('Error updating bus data:', error);
                });
        }
    }
};
</script>