<template>
    <div>

        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Text</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="(post,key) in posts" :key='key'>
                <th scope="row">{{post.id}}</th>
                <td>{{ post.title}}</td>
                <td>{{ post.text.slice(0,15)}}...</td>
                <td>
                    <router-link type="button" class="btn btn-secondary" :to="{ name:'single-post', params:{id:post.id}}">View post</router-link>
                    <router-link type="button" class="btn btn-primary" :to="{ name:'edit-post', params:{id:post.id}}">Edit post</router-link>
                    <button name="button" type="button" @click="deletePost(post.id)" class="btn btn-danger">delete</button>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
</template>


<script>


    import {postServ} from "../services/postServices";

    export default {
        name: "AppPosts",
        created() {

            this.getAll()

        },

        data() {

            return {

                posts: []

            }


        },

        methods: {

            getAll() {

                postServ.getAll()

                    .then((response) => {

                        // console.log(response.data)

                        this.posts = response.data

                    });


            },

            deletePost(id){

                postServ.remove(id)

                    // ovde nisam siguran u sintaksu i logiku
                // cak i bez ovog '.then' koji je obavezan u sintaksi kada se pise promis
                //ako sam dobro shvatio. Cak i bez toga kod radi.

                    .then((response) =>{

                        this.getAll()

                    })

            }

        }
    }
</script>

<style scoped>

</style>