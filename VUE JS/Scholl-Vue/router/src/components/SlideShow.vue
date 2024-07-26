<template>
  <!-- <div class="container mt-3"> -->
    <div id="carouselExampleCaptions" class="carousel slide mb-3" data-bs-ride="carousel" data-bs-interval="2000" data-bs-pause="hover">
      <div class="carousel-indicators">
        <button v-for="(img, index) in vandaImg" :key="index" type="button" :data-bs-target="'#carouselExampleCaptions'" :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-label="'Slide ' + (index + 1)"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(img, index) in vandaImg" :key="index" :class="['carousel-item', { active: index === 0 }]">
          <img :src="img.image" class="d-block w-100 custom-img-height" alt="Slide image" />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ index + 1 }}</h5>
            <p>We are provide you {{ index + 1 }} {{ img.title }}.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      vandaImg: [
        {
          image: "https://www.w3schools.com/howto/img_nature_wide.jpg",
          title: "Nature"
        },
        {
          image: "https://www.w3schools.com/howto/img_lights_wide.jpg",
          title: "Lights"
        },
        {
          image: "https://www.w3schools.com/howto/img_woods_wide.jpg",
          title: "Woods"
        },
        {
          image: "https://s3.envato.com/files/263152659/_DSC9469s.jpg",
          title: "Green forest"
        },
      ],
    };
  },
};
</script>

<style>
.custom-img-height {
  height: 500px;
  object-fit: cover;
}
</style>
