<template>
  <div id="app">
    <router-view>

    </router-view>
    <div class="main-body">
        <router-link class="child" to="/test"> <p>Get Started</p></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeBody",

  methods: {
  }
};
</script>

<style>
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
  height: 20px;
  padding: 20px;
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
.child>p{
    margin: 0;
    margin-top: -10px;
}
</style>
