<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h1>Bus
                    <RouterLink to="/bus/create" class="btn btn-primary float-end">
                        Add
                    </RouterLink>
                </h1>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-if="bus.length > 0"> <!-- Corrected spelling of "length" -->
                    <tr v-for="(businessCard, index) in bus" :key="index">
                        <td>{{ businessCard.id }}</td>
                        <td>{{ businessCard.name }}</td>
                        <td>{{ businessCard.title }}</td>
                        <td>{{ businessCard.company }}</td>
                        <td>{{ businessCard.address }}</td> 
                        <td>
                            <RouterLink :to="{ path: '/bus'+businessCard.id+'/edit'}" class="btn btn-success">
                                Edit
                            </RouterLink>
                            <button type="button" @click="deletebus(businessCard.id)" class="btn btn-primary">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="5">Loading...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'Bus',
    data() {
        return {
            bus: []
        }
    },
    mounted() {
        this.getBus();
    },
    methods: {
        getBus() {
            axios.get('http://localhost:8000/api/business-cards')
                .then(response => {
                    this.bus = response.data; // Changed to access response.data directly
                })
                .catch(error => {
                    console.error('Error fetching business cards:', error);
                });
        },
        deletebus(busid) {
    if (confirm('Are you sure you want to delete')) {
        axios.delete(`http://localhost:8000/api/business-cards/${busid}`)
            .then(response => {
                alert(response.data);
                this.getBus();
            }) // Missing closing parenthesis here
            .catch(error => {
                console.error('Error deleting business card:', error);
            });
    }
}

    }
}
</script>
