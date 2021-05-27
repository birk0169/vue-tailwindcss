<template>
<section>
    <div class="resource" v-for="res in storedResources" :key="res.id">
        <h3 class="font-bold text-lg">{{res.title}}</h3>
        <p>{{res.description}}</p>
        <button @click="deleteResource(res.id)" class="delete-btn"><span>x</span></button>
    </div>
    <div class="add-resource">
        <p class="text-gray-400">Add resource</p>
    </div>
</section>
</template>

<script>
export default{
    data(){
        return {
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
    methods: {
        deleteResource(resId){
            const resIndex = this.storedResources.find(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);
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
        rounded-full 
        h-7 
        w-7 
        flex 
        items-center 
        justify-center 
        border-4 
        border-gray-400 
        absolute m-2 
        -right-0 
        -top-0 
        font-bold 
        text-gray-400
        hover:text-gray-600
        hover:border-gray-600 
        transition
        ;
}
</style>