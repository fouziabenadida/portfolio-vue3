<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <Navbar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-white">Hello,</h1>
              <h1>I'm Fouzia BENADIDA</h1>
              <span class="text-grey">Frontend developer</span><br />
              <v-btn tile dark class="text-yellow mt-8" variant="outlined">
                Contact me
              </v-btn>
            </div>
          </v-col>
          <v-col cols="2">
            <div
              style="
                position: absolute;
                z-index: 9999;
                bottom: 0;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
              class="mt-16"
            >
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue";

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
.head {
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
