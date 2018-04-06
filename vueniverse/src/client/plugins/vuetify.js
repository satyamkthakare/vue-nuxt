import Vue from 'vue'
import Vuetify from 'vuetify'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Vuetify)
Vue.use(Buefy)

//Global filter
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.filter('snippet', function(value){
  return value.slice(0,30) + '...';
});

Vue.filter('snippet-short', function(value){
  return value.slice(0,10);
});
