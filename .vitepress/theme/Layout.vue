<template>
  <Layout>
    <template #doc-after>
      <Comment></Comment>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import Comment from "./components/Comment.vue";
const { Layout } = DefaultTheme;
</script>
