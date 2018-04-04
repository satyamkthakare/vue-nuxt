<template>
    <div id="single-blog">

      <section class="section">
        <h1 class="title">
          {{ job.id}} -
          {{ job.title }}
        </h1>
          <h2 class="subtitle">
            {{ job.body }}
          </h2>
      </section>
    </div>
</template>

<script>
// Imports
import axios from '@/plugins/axios'

export default {
    data () {
        return {
            id: this.$route.params.id,
            job: {}
        }
    },
    created() {
      axios.get('http://jsonplaceholder.typicode.com/posts/' + this.id)
      .then(response => {
            // console.log(data);
            this.job = response.data;
        });
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>
