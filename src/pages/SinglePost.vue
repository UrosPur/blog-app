<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item">{{ singlePost.title}}</li>
            <li class="list-group-item">{{ singlePost.text}}</li>
            <li class="list-group-item">{{ singlePost.createdAt}}</li>
        </ul>


    </div>
</template>

<script>

    import {postServ} from "../services/postServices";

    export default {
        name: "SinglePost",

        created(){


            postServ.get(this.$route.params.id)
                .then((response) => {

                   // console.log(response.data)

                    this.singlePost = response.data

                });


        },

        data(){

            return{

                singlePost : []


            }



        }
    }
</script>

<style scoped>

</style>