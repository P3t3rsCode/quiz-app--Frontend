<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
   
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar
  },
  methods: {
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tst {
  height: 100vh;
}
body {
  margin: 0;
}
.main-body {
  position: relative;
  height: 100vh;
}
.child {
  width: 300px;
  height: 50px;
  padding: 10px;
  background-color: #009de0;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-size: 1em;
  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
}
a{
  text-decoration: none;
  color: white;
}
a:hover{
  text-decoration: none;
  color: white;
}

</style>
