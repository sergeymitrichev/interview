<script setup lang="ts">
import { ref } from 'vue'
import ItemList from './components/ItemList.vue'
import TaskDescription from './components/TaskDescription.vue'
import { MenuItem } from './types/MenuItem'

const onShuffle = () => {
  shuffleArray(menu.value)
}

const onClick = (id: string) => {
  console.log(`Clicked on '${id}' item`)
}

function shuffleArray(array: unknown[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const menu = ref<Array<MenuItem>>([
  { id: '01', title: 'Send message', type: 'primary' },
  { id: '02', title: 'Pin chat', type: 'default' },
  { id: '03', title: 'Disable notifications', type: 'default' },
  { id: '04', title: 'Hide chat' },
  { id: '05', title: 'Delete history', type: 'error' },
])
</script>

<template>
  <div>
    <h1>Satel Interview</h1>
    <task-description />
    <h2>Компонент ItemList.vue</h2>
    <item-list :items="menu" @shuffle="onShuffle" @click="onClick" />
  </div>
</template>
