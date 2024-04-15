<template>
    <div class="container mt-5">
        <div class="card">
            <h4>Add</h4>
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
 import axios from 'axios'
export default {
    name: 'busCreate',
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
        }
    },
    methods: {
        saveBus() {
           axios.post('http://localhost:8000/api/business-cards', this.model.bus).then(response => {
                console.log(response.data)
               this.modle.bus =  {
                    name: '',
                    title: '',
                    company: '',
                    address: ''
                }
           })
        }
    
},
}
</script>