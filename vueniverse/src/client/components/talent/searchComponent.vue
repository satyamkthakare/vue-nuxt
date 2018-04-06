<template>
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
</template>

<script>
import axios from '@/plugins/axios.js'
export default {
  name: "Search",
  data(){
    return {
      search: '',
    }
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

  }
}
</script>

<style lang="css">

</style>
