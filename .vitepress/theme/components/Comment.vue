<template>
    <div style="margin-top: 24px">
        <Giscus
            id="comments"
            repo="Cao007/blog"
            repoid="R_kgDOMFRFTg"
            category="General"
            categoryid="DIC_kwDOMFRFTs4CgCRv"
            mapping="pathname"
            term="Welcome to giscus!"
            reactionsenabled="1"
            emitmetadata="0"
            inputposition="top"
            loading="lazy"
            :theme="isDark ? 'dark' : 'light'"
            :key="route.path"
            lang="zh-CN"
        ></Giscus>
    </div>
</template>

<script setup>
import Giscus from '@giscus/vue';
import { useRoute, useData } from 'vitepress';

const route = useRoute();
const { isDark } = useData();
</script>