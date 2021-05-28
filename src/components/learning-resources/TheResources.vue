<template>
<resource-form v-if="formShown" @close="toggleForm"></resource-form>
<section>
    <div class="resource" v-for="res in storedResources" :key="res.id">
        <h3 class="font-bold text-lg">{{res.title}}</h3>
        <p>{{res.description}}</p>
        <button @click="deleteResource(res.id)" class="delete-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
    </div>
    <div @click="toggleForm" class="add-resource">
        <p class="text-gray-400">Add resource</p>
    </div>
</section>
</template>

<script>
import ResourceForm from './ResourceForm.vue';

export default{
    components: {
        ResourceForm
    },
    data(){
        return {
            formShown: true,
            storedResources: [
                {
                id: 'officialGuide',
                title: 'Official Guide',
                description: 'The official Vue.js guide.'
                },
                {
                id: 'google',
                title: 'Google',
                description: 'Learn to google...'
                }
            ]
        };
    },
    provide() {
        return{
            addResource: this.addResource
        }
    },
    methods: {
        addResource(resTitle, resDescription){
            const newResource = {
                id: new Date().toISOString(),
                title: resTitle,
                description: resDescription
            }
            this.storedResources.unshift(newResource);
        },
        deleteResource(resId){
            const resIndex = this.storedResources.find(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);
        },
        toggleForm(){
            this.formShown = !this.formShown;
        }
    }
}
</script>

<style>
.resource{
    @apply 
        bg-white 
        rounded-md 
        mt-4 
        p-6 
        relative
    ;
}

.add-resource{
    @apply
        cursor-pointer
        text-center 
        rounded-md 
        border-dotted 
        border-4 
        border-gray-400 
        mt-4 p-6
    ;
}

.delete-btn{
    @apply
        flex 
        items-center 
        justify-center
        absolute m-2 
        right-2 
        top-2 
        font-bold 
        text-gray-400
        hover:text-gray-600
        hover:border-gray-600 
        transition
        ;
}
</style>