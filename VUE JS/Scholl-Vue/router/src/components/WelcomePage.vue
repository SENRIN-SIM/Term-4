<template>
  <div class="welcome-section text-center">
    <h1>{{ welcomePage.title }}</h1>
    <p class="lead">
      {{welcomePage.description}}
    </p>
  </div>
</template>

<script>
export default {
  props: [ 'welcomePage' ],
};
</script>

<style>
</style>