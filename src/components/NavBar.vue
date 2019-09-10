<template>
  <div
    id="mynav"
    class="nav-colored"
  >
    <p>A simple Javascript MCQ Test</p>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-colored {
  box-shadow: 0px 2px 11px 2px rgba(191, 163, 191, 0.35);
}
#mynav {
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 5px;
}
ol{
  display: inline;
  margin:0;
}
li {
  list-style-type: none;
  padding: 1em;
  margin-left: 1em;
  margin-right: 1em;
  float: right;
}
a {
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
</style>
