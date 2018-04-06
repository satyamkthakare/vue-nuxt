<template>
  <div class="tile is-parent jobs-item">
    <div class="card ta-jobs-box">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <h4>{{jobId}} {{jobCompany | snippet-short}}</h4>
            <p>
              <small>{{jobTitle | snippet}}</small>,
              <small>{{jobUserId}}</small>
            </p>
          </div>
          <div class="media-right">
            <figure class="image is-48x48">
              <img src="@/assets/img/linkedin.png" alt="Placeholder image">
            </figure>
          </div>
        </div>
        <div class="content">
          <nuxt-link :to="'/job/' + jobId" class="card-link">
            <h4>{{jobDescription | snippet}}</h4>
          </nuxt-link>
          <p><span class="btm-brdr">{{jobIndusty}}</span></p>
        </div>

        <div class="media">
          <div class="media-content">
            <p>2 Days ago</p>
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
</template>

<script>
export default {
  name: "JobCard",
  props: ['jobId', 'jobTitle', 'jobUserId', 'jobCompany', 'jobDescription', 'jobIndusty']
}

</script>

<style lang="css">
  a.card-link:hover{
    color: #762f8b;
  }

</style>
