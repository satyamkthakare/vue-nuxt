<template>
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
</template>

<script>
//import axios from '~/plugins/axios'
export default {
    name: 'Search',
    components: {
        //'product-list-one': ProductListOne,
        //'product-list-two': ProductListTwo
    },
    data(){
      return {
        search: ''
      }
  }
}
</script>

<style lang="css" scoped>

</style>
