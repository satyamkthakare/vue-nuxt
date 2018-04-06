<template>
  <div class="app-container section">
    <!-- Search conponant -->
      <searchComponant/>
    <!-- Search end -->

    <div class="tile is-ancestor jobs-list-container">
      <JobCardComponent
      v-for="job in jobs"
      :key="job.id"
      :jobId="job.id"
      :jobTitle="job.title"
      :jobCompany="job.title"
      :jobDescription="job.body"
      :jobIndusty="job.title"
      />
    </div>
    <!-- <button class="button is-info" v-show="hasMoreItemsToShow()" v-on:click="showMoreItems()">Show More</button> -->
  </div>
</template>

<script>
import axios from '@/plugins/axios.js'
import searchComponant from '@/components/talent/searchComponent'
import JobCardComponent from '@/components/talent/jobCardComponent'

export default {
    name: 'Dynamic',
    components: {
        searchComponant,
        JobCardComponent
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
    .application .theme--light.card, .theme--light .card{
      border: 1px solid #e6e6e6;
    }
    .card-content{
        padding: 1rem;

    }

    .btm-brdr{
      border-bottom: 2px solid #a7a4a4;
      display: inline-block;
    }

    .application .theme--light.toolbar, .theme--light .toolbar {
      background-color: #762f8b;
    }

    .card-content img {
      width: 100px;
      position: absolute;
      right: -1rem;
      top: -1rem;
    }
    .content figure{
      margin-left: 0;
      margin-right: 0;
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
