<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
    <Layout>
        <template #home-hero-info-before>
            <div class="shake-title">好好学习天天向上</div>
        </template>
    </Layout>
</template>

<style scoped>
.shake-title {
    animation: shake 1.5s linear;
    animation-iteration-count: infinite;
    display: inline-block;
    position: absolute;
    top: -20px;
    left: 160px;
    background-image: linear-gradient(0deg, #f77062 0%, #fe5196 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes shake {
    0% {
        transform: rotate(0);
    }

    25% {
        transform: rotate(15deg);
    }

    50% {
        transform: rotate(0deg);
    }

    75% {
        transform: rotate(-15deg);
    }

    100% {
        transform: rotate(0);
    }
}
</style>