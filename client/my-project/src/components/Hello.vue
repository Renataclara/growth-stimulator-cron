<template>
  <div>
    <div container>
    <div class="row">
      <div class="col-sm-12">
        {{listPonies}}
        <img :src="`${listPonies[1]['.value']}`"> </img>
        <br> <button  type="button" class="btn btn-primary btn-lg" @click='start()'> start </button>
      </div>
    </div>
  </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  firebase () {
    return {
      ponies: this.$db.ref('pony')
    }
  },
  methods: {
    start () {
      axios.get('http://localhost:3000/start')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  computed: {
    listPonies () {
      return this.ponies
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
