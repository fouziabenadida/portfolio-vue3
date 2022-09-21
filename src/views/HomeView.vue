<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background }" >
    <Navbar/>
    <v-container fluid>
   <div class="head">

   </div>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar/Navbar.vue'

export default {
  name: "HomeView",

  components: {
    Navbar,
    
  },
};
</script>
<style scoped>
.v-container {
  padding: 16px 0 16px 0;
}
.head{
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}
.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}
</style>