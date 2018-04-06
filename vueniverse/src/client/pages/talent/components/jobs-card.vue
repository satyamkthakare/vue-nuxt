<template>
      <div class="card ta-jobs-box">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-6">{{jobId}}</p>
              <p class="subtitle is-6">
                <small>{{jobTitle}}</small>,
                <small>{{jobId}}</small>
              </p>
            </div>
            <div class="media-right">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
          </div>
          <div class="content">
            <nuxt-link :to="'/talent/' + jobId">
              <h2>{{jobType}}</h2>
            </nuxt-link>
            <p><span class="btm-brdr">{{jobIndusty}}</span></p>
          </div>

          <div class="media">
            <div class="media-content">
              <p>{{postedDate}}</p>
            </div>
            <div class="media-right">
              <span class="icon">
                <i class="fa fa-heart"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
//import axios from '~/plugins/axios'
export default {
    name: 'Jobscard',
    props: ['jobId', 'jobCompany', 'jobType', 'jobLocation', 'jobTitle', 'jobIndusty', 'companyLogo', 'postedDate'],
    data(){
      return {
        //search: '',
        //blogs: []
        //id: this.$route.params.id
              // jobs : [
              //   {
              //     jobId : 1,
              //     jobCompany : "Google",
              //     jobType : "Full Time",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Interactive and Visual Designer",
              //     jobIndusty : "Information Technology",
              //     companyLogo : "../assets/revised-google-logo.png",
              //     postedDate : "2 Days ago"
              //   },
              //   {
              //     jobId : 2,
              //     jobCompany : "Uber",
              //     jobType : "Full Time",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Dev OPS",
              //     jobIndusty : "Information Technology",
              //     companyLogo : "./assets/revised-google-logo.png",
              //     postedDate : "2 Days ago"
              //   },
              //   {
              //     jobId : 3,
              //     jobCompany : "Google",
              //     jobType : "Full Time",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Interactive and Visual Designer",
              //     jobIndusty : "Information Technology",
              //     companyLogo : "./assets/revised-google-logo.png",
              //     postedDate : "2 Days ago"
              //   },
              //   {
              //     jobId : 4,
              //     jobCompany : "Master Card",
              //     jobType : "Contract",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Software Engineer",
              //     jobIndusty : "Information Technology",
              //     companyLogo : "./assets/revised-google-logo.png",
              //     postedDate : "2 Days ago"
              //   },
              //   {
              //     jobId : 5,
              //     jobCompany : "Experian",
              //     jobType : "Full Time",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Software Engineer",
              //     jobIndusty : "Information Technology",
              //     companyLogo : "./assets/revised-google-logo.png",
              //     postedDate : "2 Days ago"
              //   },
              //   {
              //     jobId : 6,
              //     jobCompany : "Google",
              //     jobType : "Full Time",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Interactive and Visual Designer",
              //     jobIndusty : "Information Technology",
              //     companyLogo : "../assets/revised-google-logo.png",
              //     postedDate : "2 Days ago"
              //   },
              //   {
              //     jobId : 7,
              //     jobCompany : "Uber",
              //     jobType : "Full Time",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Dev OPS",
              //     jobIndusty : "Information Technology",
              //     companyLogo : "./assets/revised-google-logo.png",
              //     postedDate : "2 Days ago"
              //   },
              //   {
              //     jobId : 8,
              //     jobCompany : "Google",
              //     jobType : "Full Time",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Interactive and Visual Designer",
              //     jobIndusty : "Information Technology",
              //     companyLogo : "../assets/revised-google-logo.png",
              //     postedDate : "2 Days ago"
              //   },
              //   {
              //     jobId : 9,
              //     jobCompany : "Master Card",
              //     jobType : "Contract",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Software Engineer",
              //     jobIndusty : "Information Technology",
              //     companyLogo : "./assets/revised-google-logo.png",
              //     postedDate : "2 Days ago"
              //   },
              //   {
              //     jobId : 10,
              //     jobCompany : "Experian",
              //     jobType : "Full Time",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Software Engineer",
              //     jobIndusty : "Information Technology",
              //     companyLogo : "./assets/revised-google-logo.png",
              //     postedDate : "2 Days ago"
              //   },
              //   {
              //     jobId : 11,
              //     jobCompany : "Experian",
              //     jobType : "Full Time",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Software Engineer",
              //     jobIndusty : "Information Technology",
              //     companyLogo : '<img src="../assets/revised-google-logo.png"/>',
              //     postedDate : "2 Days ago"
              //   },
              //   {
              //     jobId : 12,
              //     jobCompany : "Experian",
              //     jobType : "Full Time",
              //     jobLocation : "San Francisco, CA",
              //     jobTitle : "Software Engineer",
              //     jobIndusty : "Information Technology",
              //     companyLogo : "assets/revised-google-logo.png",
              //     postedDate : "2 Days ago"
              //   }
              // ]
      }
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

        // filteredBlogs: function(){
        //     return this.blogs.filter((blog) => {
        //         return blog.title.toLowerCase().includes(this.search.toLowerCase());
        //     });
        // }

  },
  // computed:{
  //   jobslist: function(){
  //     //return this.$store.state.jobs;
  //   }
  // }
}
</script>

<style lang="css">

  .card-content{
      padding: 1rem;

  }
  .btm-brdr{
    border-bottom: 2px solid #a7a4a4;
    display: inline-block;
  }
  img {
    width: 100%;
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
    /*width: 50%;*/
  }
}
</style>
