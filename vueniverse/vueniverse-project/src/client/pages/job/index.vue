<template>
  <div class="app-container section">
    <h1 class="title">{{search}}</h1>
    <!--<product-list-one></product-list-one>
    <product-list-two></product-list-two> -->
    <!-- Search conponant -->
    <div class="field is-grouped">
      <div class="control is-expanded">
        <div class="field  has-addons">
          <div class="control is-expanded has-icons-left">
            <input class="input is-medium" v-model="search" required type="text" placeholder="Job Title, Keywords">
            <span class="icon is-small is-left">
              <i class="fa fa-search"></i>
            </span>
          </div>
          <div class="control is-expanded has-icons-left">
            <input class="input is-medium" type="text" placeholder="City, State, Country">
            <span class="icon is-small is-left">
              <i class="fa fa-map-marker"></i>
            </span>
          </div>
        </div>
      </div>
      <p class="control">
        <a class="button is-success is-medium" v-on:click="loadUsers">
          <span class="icon">
            <i class="fa fa-search"></i>
          </span>
          <span>Search Relevant Jobs</span>
        </a>
      </p>
    </div>
    <!-- Search end -->

    <div class="tile is-ancestor jobs-list-container">
      <div class="tile is-parent jobs-item" v-for="job in jobs">
        <div class="card ta-jobs-box">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-6">{{job.id}}</p>
                <p class="subtitle is-6">
                  <small>{{job.title | to-uppercase}}</small>,
                  <small>{{job.userId}}</small>
                </p>
              </div>
              <div class="media-right">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
            </div>
            <div class="content">
              <nuxt-link :to="'/dynamic/' + job.id">
                <h2>{{job.body | snippet}}</h2>
              </nuxt-link>
              <p><span class="btm-brdr">{{job.jobIndusty}}</span></p>
            </div>

            <div class="media">
              <div class="media-content">
                <p>{{job.postedDate}}</p>
              </div>
              <div class="media-right">
                <span class="icon">
                  <i class="fa fa-heart"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <button class="button is-info" v-show="hasMoreItemsToShow()" v-on:click="showMoreItems()">Show More</button> -->
  </div>
</template>

<script>
import axios from '@/plugins/axios.js'
//import ProductListTwo from './ProductListTwo.vue'

export default {
    name: 'Dynamic',
    components: {
        //'product-list-one': ProductListOne,
        //'product-list-two': ProductListTwo
    },
    data(){
      return {
        search: '',
        jobs: []
        //id: this.$route.params.id
      }
    },
    created(){
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.jobs = response.data.slice(0, 12);
      })
      .catch(e => {
        this.errors.push(e)
      })

    },
    methods: {
    loadUsers: function() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(response => {
        var blogsArray = [];
            for (let key = 0; key < response.data.length; key++){
                //data.body[key].title = key;
                var titleSearch = response.data.body[key].title.toLowerCase().includes(this.search.toLowerCase());
                var bodySearch = response.data.body[key].body.toLowerCase().includes(this.search.toLowerCase());
                //blogsArray.push(data[key]);
                if(titleSearch == true || bodySearch == true){
                	blogsArray.push(data.data.body[key]);
                }
                console.log(response.data.body[key].title + 'Search '+ titleSearch);
                console.log(response.data.body[key].body + 'Search '+ bodySearch);
            }
            this.blogs = blogsArray;

      });
    },

        filteredBlogs: function(){
            return this.blogs.filter((blog) => {
                return blog.title.toLowerCase().includes(this.search.toLowerCase());
            });
        }

  },
  computed:{
    jobslist: function(){
      return this.$store.state.jobs;
    }
  }
}
</script>

<style lang="css">
  /* @import "../scss/main";*/
  .jobs-list-container {
      display: flex;
      flex-grow: inherit;
      flex-wrap: wrap;
      justify-content: space-between;


    }
    .jobs-list-container:after {
      content: "";
      flex: auto;
    }
    .jobs-item {
        width: 25%;
        flex-basis: auto;
        flex-grow: unset;



    }

    .card-content{
        padding: 1rem;

    }

    .btm-brdr{
      border-bottom: 2px solid #a7a4a4;
      display: inline-block;
    }

    img {
      width: 100px;
      position: absolute;
      right: -1rem;
      top: -1rem;
    }
  .ta-jobs-box{
    border-radius: 0px;
    box-shadow: none;
  }

  @media screen and (max-width: 767px) and (min-width: 320px) {
    .jobs-item{
      width: 100%;
    }
  }
  @media screen and (max-width: 996px) and (min-width: 768px) {
    .jobs-item{
      width: 50%;
    }
  }
</style>
