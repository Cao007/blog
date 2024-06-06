<template>
    <div>
        <h1 @click="count++">{{ count }}</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let count = ref(0);

</script>

<style scoped>
h1 {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    text-align: center;
    line-height: 100px;
    cursor: pointer;
}
</style>