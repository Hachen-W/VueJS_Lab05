<script setup>
import { ref } from 'vue'

const props = defineProps({ amount: { type: Number, default: 1 } })
const emit = defineEmits(['button-clicked'])

const count = ref(0)

const onClick = () => {
  count.value += props.amount
  emit('button-clicked')
}

</script>

<template>
  <div class="clicker">
    <p>Очки: {{ count }}</p>
    <div @click="onClick">
      <slot><button>клик</button></slot>
    </div>
  </div>
</template>

<style scoped>
.clicker {
  border: 1px solid black;
  padding: 10px;
  text-align: center;
}

</style>
