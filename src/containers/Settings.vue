<script setup>
import {ref} from "vue";

const range = ref(5)
const complexity = ref(5)
const selected = ref({
  sum: true,
  difference: false,
  multiply: false,
  division: true,
  sqrt: true
})
</script>

<template>
  <div class="settings">
    <div class="settings_head">
      <h3 style="text-align: center">Игра</h3>
      <p style="color: darkblue">Ваш последнйи результат - решено 10 из 25</p>
    </div>
    <div class="settings_body">
      <div class="settings_child">
        <span>Настройки</span>
        <br>
        <input type="range" min="1" max="15" v-model="range" class="slider"/>
        <br>
        <label>Длительность - {{ range }} минут </label>
        <br>
        <input type="range" min="1" max="15" v-model="complexity" class="slider"/>
        <br>
        <label>Сложность {{ complexity }}</label>
        <br>
        <label class="container">Суммирование
          <input type="checkbox" v-model="selected.sum">
          <span class="checkmark"></span>
        </label>
        <label class="container">Разность
          <input type="checkbox" v-model="selected.difference">
          <span class="checkmark"></span>
        </label>
        <label class="container">Умножение
          <input type="checkbox" v-model="selected.multiply">
          <span class="checkmark"></span>
        </label>
        <label class="container">Деление
          <input type="checkbox" v-model="selected.division">
          <span class="checkmark"></span>
        </label>
        <label class="container">Возведение в степень
          <input type="checkbox" v-model="selected.sqrt">
          <span class="checkmark"></span>
        </label>
      </div>
      <div>
        <button class="button">Старт</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings {
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  background: #eef1f5;
  margin-top: 140px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.settings_head {
  width: 100%;
  padding: 0 50px;
}

.settings_body {
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.settings_child {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #0075ff;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
  border: 1px solid black;
  border-radius: 3px;
}

.container input:checked ~ .checkmark {
  background-color: #2139f3;
  border: 1px solid black;
  border-radius: 3px;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.button {
  background-color: #e7e7e7;
  color: black;
  border: 1px solid grey;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.button:hover {
  background-color: grey;
}
</style>