<template>
    <div>
        <h2>Add your post here</h2>
        <div class="container">
            <div class="row">
                <form @submit.prevent="addPost">
                    <div class="form-group row">
                        <label for="title" class="col-4 col-form-label">Title</label>
                        <div class="col-8">
                            <input v-model="post.title" id="title" name="title" placeholder="add post title" type="text"
                                   class="form-control here" required minlength="2">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="text" class="col-4 col-form-label">text</label>
                        <div class="col-8">
                            <input v-model="post.text" id="text" name="text" placeholder="add post content" type="text"
                                   class="form-control here" required maxlength="300">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-4 col-8">
                            <button name="submit" type="submit" class="btn btn-primary">Submit</button>
                            <button name="button" type="reset" class="btn btn-danger">reset form</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    import {postServ} from "../services/postServices";

    export default {
        name: "AddPost",

        created() {

            if (this.$route.params.id) {

                postServ.get(this.$route.params.id)
                    .then((response) => {

                        this.post = response.data

                    })

            }

        },

        data() {
            return {

                post: {
                    title: '',
                    text: ''

                }

            }

        },

        methods: {

            addPost() {


                if (this.$route.params.id) {

                    postServ.edit(this.post)

                    this.$router.push('/posts');


                } else {

                    postServ.add(this.post)
                    this.$router.push('/posts');


                }


            }


        }
    }
</script>

<style scoped>

</style>