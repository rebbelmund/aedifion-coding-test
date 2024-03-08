<script setup lang="ts">
import { ref, computed } from 'vue'
import { removeConsecutiveDuplicates } from '@/lib/coding_test_consecutive_new'
const placeholder = ref<String>(JSON.stringify(JSON.parse(`{
  "datapoint_1": [1.0, 2.3, 1.2, 3.4, 2.0, 2.0, 3.1, 2.3],
  "datapoint_2": [true, true, true, false, true, false],
  "datapoint_3": ["active", "inactive", "active", "active", "inactive", "inactive"]
}`), null, 2))
const result = computed(()=> {
  let result = ''
  try {
    result = JSON.stringify(removeConsecutiveDuplicates(JSON.parse(placeholder.value as string)), null, 2)
  } catch (error) {
    result = 'invalid json'
  }
  return result
  })
</script>

<template>
  <header>
    <img alt="aedifion logo" class="logo" src="./assets/logo.svg"/>
    <h1>Coding Test</h1>
  </header>

  <main>
    <div>
    <p>source (json):</p>
    <textarea name="message" rows="30" cols="30" v-model="placeholder"></textarea>
  </div>
  <div>
  <p>removeConsecutiveDuplicates:</p>
    <p class="result">{{ result }}</p>
  </div>
  </main>
</template>

<style scoped lang="scss">
header {
  display: flex;
  gap: 2rem;

  h1 {
    color: gray;
  }
}

main {
  display: flex;
  gap: 2rem;

  textarea {
    font-size: 1rem;
    font-family: inherit;
  }

  .result {
    font-size: 1rem;
    margin: 0;
    white-space: pre;
  }    
}
</style>
