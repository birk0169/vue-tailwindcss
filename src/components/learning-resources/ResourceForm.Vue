<template>
    <div><div>
    <form>
        <div class="form-control">
            <label for="title">Title</label>
            <input id="title" name="title" type="text" />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea id="description" name="description" type="text"></textarea>
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
</template>

<script>
    export default{
        methods: {
            submitData(){
                
            }
        }
    }
</script>