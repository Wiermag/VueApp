<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <!-- <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        /> -->
        <i class="fab fa-angrycreative fa-10x"></i>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
        Test title in my new app
        </h1>
   
   
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
        Simply country list - in progress...
        </h2>

        <v-list  v-for=" (el, index) in items" 
        :key="index">
             <v-list-item > {{ el.name }}</v-list-item>
        </v-list>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
         Test 2
        </h2>

        <v-row justify="center">
         dane..
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Test 3 
        </h2>

        <v-row justify="center">
         dane...
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import  { mapGetters, mapActions } from 'vuex';    
  export default {
    name: 'Country',

    data() {
      return {
        items: []
      }
    },
    computed: {
      ...mapGetters(["allArticleReviews"])
    },
    mounted(){
      this.getItem()
    },
    methods: {
      ...mapActions(['getArticleReviews']),

     getItem() {
      this.getArticleReviews()
        .then(() => {
          this.items = this.allArticleReviews
          console.log(this.items)
        })
     },
    },
  }
</script>
