<template>
    <div class="container">
      <ProfileVue :user="user" @see-more="showMore"></ProfileVue>
    </div>
    {{ data }}
  </template>
  
  <script>
  import ProfileVue from "@/components/UserProfile.vue";
  
  export default {
    components: {
      ProfileVue,
    },
    data() {
      return {
        user:{
          'id':1,
          'name':'Seirn Sim',
          'age':18,
          'gender':'Male',
          'profile':'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg',
        },
        data:''
      }
    },
    methods: {
      showMore(data) {
        this.data = data;
      },
    },
  };
  </script>
  
  <style>
  </style>