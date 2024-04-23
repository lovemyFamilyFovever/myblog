<script setup>
import DefaultTheme from 'vitepress/theme'

import { ref, onMounted } from 'vue'

const { Layout } = DefaultTheme
const scrollToTopBtn = ref(null)

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', function () {
        // 当页面滚动到底部以上100像素时显示按钮
        if (window.scrollY > 200) {
            scrollToTopBtn.value.style.display = 'block';
        } else {
            scrollToTopBtn.value.style.display = 'none';
        }
    });
})

</script>

<template>
    <Layout>
        <template #home-hero-info-before>
            <div class="shake-title">好好学习天天向上</div>
        </template>
        <template #doc-after>
            <div class="scrollTopBtn" @click="scrollToTop" ref="scrollToTopBtn">
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <path
                        d="M383.786667 640.853333a42.666667 42.666667 0 0 1-8.192 56.149334l-3.968 2.986666-64.64 42.496a42.666667 42.666667 0 0 0-16.085334 20.138667l-1.621333 5.034667L267.946667 853.333333H384a42.666667 42.666667 0 0 1 42.368 37.674667L426.666667 896a42.666667 42.666667 0 0 1-37.674667 42.368L384 938.666667H213.333333a42.666667 42.666667 0 0 1-42.325333-48.213334l0.938667-4.778666 34.56-138.666667a128.042667 128.042667 0 0 1 46.250666-70.570667l7.082667-5.12 64.853333-42.666666a42.666667 42.666667 0 0 1 59.093334 12.202666z m311.168-14.677333l4.352 2.517333 65.066666 42.794667a128 128 0 0 1 50.773334 67.2l2.346666 8.32 34.56 138.666667a42.666667 42.666667 0 0 1-36.565333 52.736L810.666667 938.666667h-170.666667a42.666667 42.666667 0 0 1-4.992-85.034667L640 853.333333h116.053333l-21.333333-85.674666a42.709333 42.709333 0 0 0-13.397333-21.888l-4.096-3.157334-64.853334-42.666666a42.666667 42.666667 0 0 1 37.76-75.861334l4.821334 2.133334z"
                        fill="#03CD8E" p-id="12728"></path>
                    <path
                        d="M512 102.570667a85.333333 85.333333 0 0 0-60.586667 25.258666l-30.165333 30.165334a469.333333 469.333333 0 0 0-131.882667 403.2l52.48 341.290666A42.666667 42.666667 0 0 0 384 938.666667h256a42.666667 42.666667 0 0 0 42.154667-36.181334l52.48-341.333333a469.333333 469.333333 0 0 0-131.84-403.157333l-30.293334-30.293334A85.248 85.248 0 0 0 512 102.570667z m-30.421333 115.754666L512 187.946667l30.421333 30.378666 9.088 9.386667a384 384 0 0 1 98.816 320.426667L603.306667 853.333333H420.608l-46.933333-305.152a384 384 0 0 1 107.946666-329.856z"
                        fill="#049DEE" p-id="12729"></path>
                    <path
                        d="M512 384a42.666667 42.666667 0 0 1 42.368 37.674667L554.666667 426.666667v128a42.666667 42.666667 0 0 1-85.034667 4.992L469.333333 554.666667v-128a42.666667 42.666667 0 0 1 42.666667-42.666667z"
                        fill="#049DEE" p-id="12730"></path>
                </svg>
            </div>
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
    font-weight: 800;
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

@media (min-width: 960px) {
    .scrollTopBtn {
        display: none;
        position: fixed;
        bottom: 40px;
        right: calc(50% - 500px);
        cursor: pointer;
        z-index: 999;
        scroll-behavior: smooth;
    }
}
</style>