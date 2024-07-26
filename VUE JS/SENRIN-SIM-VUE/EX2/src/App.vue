<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="mb-3">
          <label for="number1" class="form-label">Number 1</label>
          <input
            type="number"
            id="number1"
            class="form-control"
            @click="isInput1"
            :value = "number1"
          />
        </div>
        <div class="mb-3">
          <label for="number2" class="form-label">Number 2</label>
          <input
            type="number"
            id="number2"
            class="form-control"
            @click = "isInput2"
            :value = "number2"
          />
        </div>
        <div class="mb-3">
          <button class="btn btn-primary me-2" @click="addNumbers">+</button>
          <button class="btn btn-secondary me-2" @click="subtractNumbers">-</button>
          <button class="btn btn-danger" @click="clearInputs">Clear</button>
        </div>
        <div class="mt-3">
          <h5>Result: {{ result }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isClickNum1: true,
      isClickNum2: true,
      number1: 0,
      number2: 0,
    };
  },
  computed: {
      result() {
        return this.number1 + this.number2;
      },

  },
  methods: {

    //write method to check if number 1 is clicked
    isInput1(){
      this.isClickNum1 = true
      this.isClickNum2 = false
    },
    //write method to check if number 2 is clicked
    isInput2(){
      this.isClickNum1 = false
      this.isClickNum2 = true
    },
    //write method to add number
    addNumbers() {
      if (this.isClickNum1 == true && this.isClickNum2 == false){
        return this.number1 += 10
      }else{
        return this.number2 += 10
      }
    },
    //write method to subtract number
    subtractNumbers() {
      if (this.isClickNum1 == true && this.isClickNum2 == false){
        return this.number1 -= 10
      }else{
        return this.number2 -= 10
      }
    },
    //write method to clear inputs and result
    clearInputs() {
      return [this.number1 = 0, this.number2 = 0]
    },
  },
};
</script>

<style>
body {
  margin-top: 50px;
}
</style>
