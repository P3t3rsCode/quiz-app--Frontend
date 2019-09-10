<template>
  <div class="container">
      <h4>Your Score</h4>
       <h5>{{score}}</h5>

       <p :class="{'succ': cleared==true,'failed':cleared==false }">{{status}}</p>
  </div>
</template>

<script>

export default {
  name: "Result",
  data(){
      return{
          status:"",
          cleared:false
      }
  },
  props:['score'],
  created(){
      if(this.score<2){
          this.cleared=false;
          this.status="You Failed the test"
      }else{
          this.cleared=true;
          this.status="You have sucesfully cleared the test !!!"
      }

  }
};
</script>

<style scoped>
.container {
  margin-top: 20em;
}
.succ{
    color: green;
}
.failed{
    color: red;
}
</style>
