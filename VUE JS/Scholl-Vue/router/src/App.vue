<template>
  <div>
    <nav-bar-vue/>
    <main>
      <RouterView />
    </main>
    <footer-component-vue/>
  </div>
</template>

<script>
import NavBarVue from './components/NavBar.vue';
import FooterComponentVue from './components/FooterComponent.vue';
export default {
  name: "App",
  components: {
    NavBarVue,
    FooterComponentVue,
  },

 
};
</script>

<style>
nav {
  padding: 15px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
}
</style>
