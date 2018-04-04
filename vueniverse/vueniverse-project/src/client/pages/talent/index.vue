<template>
  <div class="app-container section">
    <search-box></search-box>
    <div class="tile is-ancestor jobs-list-container">
      <div class="tile is-parent jobs-item">
        <jobs-card
          v-for="job in jobs"
          :key="job.jobId"
          :jobCompany="job.jobCompany"
          :jobType="job.jobType"
          :jobLocation="job.jobLocation"
          :jobTitle="job.jobTitle"
          :jobIndusty="job.jobIndusty"
          :companyLogo="job.companyLogo"
          :postedDate="job.postedDate" />
      </div>
    </div>

  </div>
</template>

<script>
import axios from '~/plugins/axios'
import searchBox from './components/search.vue'
import jobsCard from './components/jobs-card.vue'
export default {
    name: 'app',
    components: {
        'search-box': searchBox,
        'jobs-card': jobsCard
    },
    data(){
      return {
        //search: '',
        //blogs: []
        //id: this.$route.params.id
      }
    },
    asyncData(){
      return new Promise((resolve, reject) => {
        setTimeout(function(){
          resolve({
            jobs : [
              {
                jobId : 1,
                jobCompany : "Google",
                jobType : "Full Time",
                jobLocation : "San Francisco, CA",
                jobTitle : "Interactive and Visual Designer",
                jobIndusty : "Information Technology",
                companyLogo : "assets/img/revised-google-logo.png",
                postedDate : "2 Days ago"
              },
              {
                jobId : 2,
                jobCompany : "Uber",
                jobType : "Full Time",
                jobLocation : "San Francisco, CA",
                jobTitle : "Dev OPS",
                jobIndusty : "Information Technology",
                companyLogo : "/assets/img/revised-google-logo.png",
                postedDate : "2 Days ago"
              },
              {
                jobId : 3,
                jobCompany : "Google",
                jobType : "Full Time",
                jobLocation : "San Francisco, CA",
                jobTitle : "Interactive and Visual Designer",
                jobIndusty : "Information Technology",
                companyLogo : "assets/img/revised-google-logo.png",
                postedDate : "2 Days ago"
              },
              {
                jobId : 4,
                jobCompany : "Master Card",
                jobType : "Contract",
                jobLocation : "San Francisco, CA",
                jobTitle : "Software Engineer",
                jobIndusty : "Information Technology",
                companyLogo : "assets/img/revised-google-logo.png",
                postedDate : "2 Days ago"
              },
              {
                jobId : 5,
                jobCompany : "Experian",
                jobType : "Full Time",
                jobLocation : "San Francisco, CA",
                jobTitle : "Software Engineer",
                jobIndusty : "Information Technology",
                companyLogo : "assets/img/revised-google-logo.png",
                postedDate : "2 Days ago"
              },
              {
                jobId : 6,
                jobCompany : "Google",
                jobType : "Full Time",
                jobLocation : "San Francisco, CA",
                jobTitle : "Interactive and Visual Designer",
                jobIndusty : "Information Technology",
                companyLogo : ".assets/img/revised-google-logo.png",
                postedDate : "2 Days ago"
              },
              {
                jobId : 7,
                jobCompany : "Uber",
                jobType : "Full Time",
                jobLocation : "San Francisco, CA",
                jobTitle : "Dev OPS",
                jobIndusty : "Information Technology",
                companyLogo : "assets/img/revised-google-logo.png",
                postedDate : "2 Days ago"
              },
              {
                jobId : 8,
                jobCompany : "Google",
                jobType : "Full Time",
                jobLocation : "San Francisco, CA",
                jobTitle : "Interactive and Visual Designer",
                jobIndusty : "Information Technology",
                companyLogo : ".assets/img/revised-google-logo.png",
                postedDate : "2 Days ago"
              },
              {
                jobId : 9,
                jobCompany : "Master Card",
                jobType : "Contract",
                jobLocation : "San Francisco, CA",
                jobTitle : "Software Engineer",
                jobIndusty : "Information Technology",
                companyLogo : "assets/img/revised-google-logo.png",
                postedDate : "2 Days ago"
              },
              {
                jobId : 10,
                jobCompany : "Experian",
                jobType : "Full Time",
                jobLocation : "San Francisco, CA",
                jobTitle : "Software Engineer",
                jobIndusty : "Information Technology",
                companyLogo : "assets/img/revised-google-logo.png",
                postedDate : "2 Days ago"
              },
              {
                jobId : 11,
                jobCompany : "Experian",
                jobType : "Full Time",
                jobLocation : "San Francisco, CA",
                jobTitle : "Software Engineer",
                jobIndusty : "Information Technology",
                companyLogo : 'assets/img/revised-google-logo.png"',
                postedDate : "2 Days ago"
              },
              {
                jobId : 12,
                jobCompany : "Experian",
                jobType : "Full Time",
                jobLocation : "San Francisco, CA",
                jobTitle : "Software Engineer",
                jobIndusty : "Information Technology",
                companyLogo : "assets/revised-google-logo.png",
                postedDate : "2 Days ago"
              }
            ]
          })
        }, 1500)
      })
    },
    created(){
    	// this.axios.get('https://jsonplaceholder.typicode.com/posts').then( function(data){
      //       //console.log(data.body.length);
      //       this.blogs = data.body.slice(0,10);
      //   });
    },
    methods: {
    loadUsers: function() {
    // this.axios.get('https://jsonplaceholder.typicode.com/posts').then( function(data){
    //     var blogsArray = [];
    //         for (let key = 0; key < data.body.length; key++){
    //             //data.body[key].title = key;
    //             var titleSearch = data.body[key].title.toLowerCase().includes(this.search.toLowerCase());
    //             var bodySearch = data.body[key].body.toLowerCase().includes(this.search.toLowerCase());
    //             //blogsArray.push(data[key]);
    //             if(titleSearch == true || bodySearch == true){
    //             	blogsArray.push(data.body[key]);
    //             }
    //             console.log(data.body[key].title + 'Search '+ titleSearch);
    //             console.log(data.body[key].body + 'Search '+ bodySearch);
    //         }
    //         this.blogs = blogsArray;
    //
    //   });
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
  /*@import "../scss/main";*/
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
        /* width: 25%;
        flex-basis: auto;
        flex-grow: unset; */



    }

</style>
