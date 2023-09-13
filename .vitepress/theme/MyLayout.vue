<script setup>
import 'gitalk/dist/gitalk.css';
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue';
import { initGitalk } from './helper';
const { Layout } = DefaultTheme

onMounted(() => {
  initGitalk();
});
</script>

<template>
  <Layout>
  </Layout>
</template>