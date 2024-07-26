<template>
    <h1>List Category</h1>
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="(cate, list) in categories" :key="list">
        <h4>{{ cate.name }}</h4>
        <p>{{ cate.description }}</p>
        <button class="btn btn-info btn-sm" :id="cate.id">{{cate.id}}Show Details</button>
        <button class="btn btn-secondary btn-sm" :id="cate.id"> {{cate.id}}Edit</button>
        <button class="btn btn-danger btn-sm" :id="cate.id"> {{cate.id}}Delete</button>
      </li>
    </ul>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        categories: [],
      };
    },
    
    methods: {
      async fetchCategories() {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/category/list");
          if (response.data.success){
              this.categories = (response.data.data);
          }
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      },
    },

    mounted(){
        this.fetchCategories();
    }
  };
  </script>
  
  <style>
  </style>