<template>
    <div class="backdrop" @click="$emit('close')"></div>
    <div class="form-wrapper">
        <form class="p-4" @submit.prevent="submitData">
            <div>
                <h2 class="font-bold text-xl">New Resource</h2>
            </div>
            <div class="form-control">
                <label for="title">Title</label>
                <input  class="text-Input" id="title" name="title" type="text" ref="inputTitle"/>
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea class="text-Input" id="description" name="description" type="text" ref="inputDescription"></textarea>
            </div>
            <div>
                <button class="primary-btn">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        data(){ 
            return {
                isInvalid: false
            };
        },
        inject: ['addResource'],
        methods: {
            submitData(){
                const userTitle = this.$refs.inputTitle.value;
                const userDesc = this.$refs.inputDescription.value;

                this.addResource(userTitle, userDesc);
                this.$emit('close');
            }
        },
        emits: ['close']
    }
</script>

<style scoped>
    .backdrop{
        @apply
            fixed
            inset-0
            h-full
            w-full
            z-10
            bg-gray-900
            dark:bg-gray-100
            bg-opacity-50
        ;
    }

    .form-wrapper{
        @apply bg-gray-50 fixed m-0 p-0 border-none rounded-md overflow-hidden z-50 w-10/12;
        top: 20vh;
        left: 8.333333%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }

    .form-control{
        @apply pb-2;
    }

    .text-Input {
    @apply block w-full p-1 border-2 focus:outline-none focus:border-blue-300 focus:bg-blue-100
    }
</style>