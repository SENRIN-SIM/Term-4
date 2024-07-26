<template>
  <!-- <div class="container"> -->
    <nav class="navbar navbar-light bg-dark">
      <div class="container">
        <RouterLink to="/userpage" active-class="class-active text-white"><h1 class="text-white">SENRIN</h1></RouterLink>
        <div class="d-flex align-items-center">
          <div class="right">
            <RouterLink to="/" active-class="class-active text-white">Home</RouterLink>
            <RouterLink to="/About" active-class="class-active text-white">About</RouterLink>
            <RouterLink to="/Contect" active-class="class-active text-white">Contect</RouterLink>
          </div>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  <!-- </div> -->
</template>

<script>
export default {};
</script>

<style>
</style>