<template>
  <div style="margin: 10px auto">
    <div v-show="showDescription" class="task-description-wrapper">
      <p>Вам необходимо реализовать компонент <b>ItemList.vue</b> для отрисовки списка по заданному массиву элементов <b>MenuItem[]</b>.</p>
      <table>
        <tr>
          <td>props.items</td>
          <td>список элементов для отрисовки</td>
          <td><pre>[
  { id: '01', title: 'Send message', type: 'primary' },
  { id: '02', title: 'Pin chat', type: 'default' },
  { id: '03', title: 'Disable notifications', type: 'default' },
  { id: '04', title: 'Hide chat' },
  { id: '05', title: 'Delete history', type: 'error' },
]</pre>
          </td>
        </tr>
        <tr>
          <td>emit.shuffle</td>
          <td>событие, сигнализирующее о необходимости перемешать список</td>
          <td><pre>&lt;item-list @shuffle="parentMethodCall()" /></pre></td>
        </tr>
        <tr>
          <td>emit.click(id: string)</td>
          <td>событие, сигнализирующее о нажатии на элемент списка</td>
          <td><pre>&lt;item-list @click="parentMethodCall($event)" /></pre></td>
        </tr>
      </table>
    </div>
    <button @click="toggleVisibility">{{ showDescription ? 'Скрыть' : 'Показать' }} описание</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const showDescription = ref(true)
const toggleVisibility = () => {
  showDescription.value = !showDescription.value
}
</script>
<style>
.task-description-wrapper {
  border: 1px solid #f5f5f5;
  background-color: #fdfdfd;
  padding: 20px;
  border-radius: 8px;
  margin: 10px auto;
}
table {
  border-collapse: collapse;
}
table td {
  text-align: left;
  padding: 5px 10px;
  border: 1px solid #e5e5e5;
}
pre {
  text-align: left;
  background-color: #f5f5f5;
  padding: 4px 8px;
  border-radius: 4px;
}
</style>