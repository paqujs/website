<template>
    <div class="mt-24 md:mt-44 flex flex-col items-center justify-center text-center">
        <h1 class="!text-8xl">404</h1>
        <p class="text-slate-200 mt-8 !text-xl">The page you are looking for does not exist.</p>
        <NuxtLink
            to="/"
            role="button"
            type="button"
            class="mt-8 p-4 w-72 max-md:w-1/2 rounded-lg bg-gradient-to-r from-blue-400 to-violet-700 text-white focus:ring-2 focus:ring-white"
        >
            Go back to home
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: '404 | Not Found',
    meta: [
        {
            name: 'og:title',
            content: '404 | Not Found',
        },
        {
            name: 'description',
            content: 'The page you are looking for does not exist.',
        },
    ],
});
</script>
