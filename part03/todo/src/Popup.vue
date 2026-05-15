<template>
  <Teleport to="body">
    <div v-if="isOpen" class="overlay">
      <div class="modal">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps(['isOpen']);
</script>

<style>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: white;
  padding: 20px 40px;
  border-radius: 8px;
  text-align: center;
  font-family: sans-serif;
}
</style>
