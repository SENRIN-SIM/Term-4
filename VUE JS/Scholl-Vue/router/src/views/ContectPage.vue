<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="submitForm" class="bg-light p-4 rounded shadow">
            <h2 class="mb-4 text-center">Contact Us</h2>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" id="name" v-model="formData.name" class="form-control" placeholder="Enter your name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" v-model="formData.email" class="form-control" placeholder="Enter your email" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" v-model="formData.message" class="form-control" rows="4" placeholder="Enter your message" required></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Handle form submission here
        console.log('Form submitted:', this.formData);
        // You can add form submission logic here (e.g., send data to backend)
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  