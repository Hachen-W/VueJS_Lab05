<script setup>
import Clicker from './Clicker.vue'

const showAlert = (n) => {
  alert(`Clicker ${n} clicked!`)
}
</script>

<template>
  <div class="container">
    <Clicker 
      v-for="n in 100" 
      :key="n" 
      :amount="1" 
      @button-clicked="showAlert(n)"
    >
      <button>Кнопка {{ n }}</button>
    </Clicker>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
