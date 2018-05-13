<template>
    <div>

        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Text</th>
                <th scope="col">Created at</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(post,key) in posts" :key ='key'>
                <th scope="row">{{post.id}}</th>
                <td>{{ post.title}}</td>
                <td>{{ post.text}}</td>
                <td>{{ post.createdAt}}</td>
            </tr>
            </tbody>
        </table>


    </div>
</template>

<script>

    import {postServ} from "../services/postServices";

    export default {
        name: "AppPosts",
        created(){

        this.getAll()

        },

        data(){

            return {

                posts: []

            }


        },

        methods: {

            getAll(){

                postServ.getAll()

                    .then((response) => {

                        // console.log(response.data)

                       this.posts = response.data

                    });



            }

        }
    }
</script>

<style scoped>

</style>