<template>
  <div style="max-width: 500px; margin: 40px auto; font-family: sans-serif;">
    <h1>ToDo List</h1>
    
    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
      <input v-model="newTask" @keyup.enter="add" placeholder="New Task" style="flex: 1; padding: 8px;" />
      <button @click="add" style="padding: 8px 16px;">Add</button>
    </div>

    <ul style="list-style: none; padding: 0;">
      <li v-for="t in tasks" :key="t.id" style="display: flex; gap: 10px; padding: 10px; border-bottom: 1px solid #ccc;">
        <input type="checkbox" :checked="t.completed" @change="toggle(t)" />
        <span :style="{ textDecoration: t.completed ? 'line-through' : 'none', flex: 1 }">
          {{ t.title }}
        </span>
        <button @click="confirmDel(t.id)" style="color: red; cursor: pointer;">🗑</button>
      </li>
    </ul>

    <Popup :isOpen="showPopup">
      <h2 style="color: orange;">!</h2>
      <h3>Delete?</h3>
      <p>Please ensure and then confirm!</p>
      <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
        <button @click="showPopup = false">No, cancel!</button>
        <button @click="del" style="background: #3182ce; color: white;">Yes, delete it!</button>
      </div>
    </Popup>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import Popup from './Popup.vue';

const tasks = ref([]);
const newTask = ref('');
const showPopup = ref(false);
const delId = ref(null);
const url = 'https://jsonplaceholder.typicode.com/todos';

onMounted(() => {
  const saved = localStorage.getItem('todos');
  if (saved) {
    tasks.value = JSON.parse(saved);
  }
});

watch(tasks, val => localStorage.setItem('todos', JSON.stringify(val)), { deep: true });

const add = async () => {
  if (!newTask.value) return;
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ title: newTask.value, completed: false }),
    headers: { 'Content-type': 'application/json' }
  });
  if (res.ok) {
    tasks.value.unshift({ id: Date.now(), title: newTask.value, completed: false });
    newTask.value = '';
  }
};

const toggle = async (t) => {
  const prev = t.completed;
  t.completed = !t.completed;
  const res = await fetch(`${url}/${t.id}`, { method: 'PATCH', body: JSON.stringify({ completed: t.completed }) });
  if (!res.ok) t.completed = prev;
};

const confirmDel = (id) => {
  delId.value = id;
  showPopup.value = true;
};

const del = async () => {
  const res = await fetch(`${url}/${delId.value}`, { method: 'DELETE' });
  if (res.ok) {
    tasks.value = tasks.value.filter(t => t.id !== delId.value);
    showPopup.value = false;
  }
};
</script>
