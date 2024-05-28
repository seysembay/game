<template>
  <div class="playground">
    <div class="playground-head">
      <router-link to="/">
        <BButton variant="outline-danger" v-if="progress>0">Отмена</BButton>
        <BButton variant="outline-info" v-else>Статистика</BButton>
      </router-link>
    </div>
    <fwb-progress
        v-if="step"
        class="playground-progress"
        :progress="progress"
        label-position="inside"
        label-progress
        size="lg"
    />
    <div class="playground-body" v-if="settings">
      <div class="pb-item">{{ num1 }}</div>
      <div class="pb-item">{{ getOperation(operation) }}</div>
      <div class="pb-item">{{ num2 }}</div>
      <div class="pb-item">=</div>
      <div class="pb-item">
        <input type="number" class="pb-item-text" v-model="answer">
      </div>
      <BButton :disabled="isDisabled" variant="outline-primary" @click="check">Ответить</BButton>
    </div>

  </div>
</template>
<script>
import {FwbProgress} from 'flowbite-vue'
import {getOperation, getRandomOperation} from "../utils/index.js";

export default {
  name: "Play",
  components: {
    FwbProgress
  },
  data() {
    return {
      progress: 100,
      step: null,
      interval: null,
      settings: null,
      complexity: 1,
      countCorrect: 0,
      countAll: 0,
      num1: 0,
      num2: 0,
      operation: 'difference',
      answer: null,
    }
  },
  methods: {
    getOperation,
    check() {
      switch (this.operation) {
        case 'difference':
          if (this.num1 - this.num2 === this.answer) this.countCorrect++
          break
        case 'division':
          if (this.num1 / this.num2 === this.answer) this.countCorrect++
          break
        case 'multiply':
          if (this.num1 * this.num2 === this.answer) this.countCorrect++
          break
        case 'sqrt':
          if (Math.pow(this.num1, this.num2) === this.answer) this.countCorrect++
          break
        case 'sum':
          if (this.num1 + this.num2 === this.answer) this.countCorrect++
          break
      }
      this.generateTask()
    },
    generateTask() {
      this.num1 = Math.floor(Math.random() * (5 * this.complexity)) + 1
      this.num2 = Math.floor(Math.random() * (5 * this.complexity)) + 1
      this.operation = this.getRandomOperation(this.settings)
      this.answer = null
      this.countAll++
    },
    getRandomOperation,
    runTimer() {
      this.interval = setInterval(() => {
        if (this.progress <= 0) {
          clearInterval(this.interval)
          this.saveResult()
        } else this.progress = this.progress - this.step
      }, 1000)
    },
    configureStep() {
      this.step = 100 / this.$store.getters.timer
      this.settings = this.$store.getters.settings
      this.complexity = this.$store.getters.complexity
      this.runTimer()
    },
    saveResult() {
      this.$store.commit('addRes', {countAll: this.countAll, countCorrect: this.countCorrect})
    }
  },
  mounted() {
    this.configureStep()
    this.generateTask()
  },
  computed: {
    isDisabled() {
      return this.answer === null || this.progress <= 0
    }
  }
}

</script>
<style scoped>
.playground {
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  background: #eef1f5;
  margin-top: 140px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.playground-head {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 20px;
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

.playground-progress {
  margin: 20px 20px;
}

.playground-body {
  display: flex;
  padding: 0 20px;
  margin-bottom: 20px;
}

.pb-item {
  margin-right: 10px;
  font-size: 20px;
  background: aqua;
  border: 1px solid blue;
  border-radius: 5px;
  padding: 10px;
}

.pb-item-text {
  height: 28px;
  width: 80px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>