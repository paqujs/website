<template>
    <div class="background-gradient">
        <BasePage class="w-full h-full text-white absolute overflow-x-hidden font-[Inter]">
            <Container>
                <div class="mt-24 md:mt-44 flex flex-col items-center justify-center text-center">
                    <h1 class="!text-8xl">{{ error.statusCode }}</h1>
                    <p class="text-slate-200 mt-8 !text-xl">
                        {{
                            error.statusCode === 404
                                ? 'The page you are looking for does not exist.'
                                : error.message
                        }}
                    </p>
                    <NuxtLink
                        to="/"
                        role="button"
                        type="button"
                        class="mt-8 p-4 w-72 max-md:w-1/2 rounded-lg bg-gradient-to-r from-blue-400 to-violet-700 text-white focus:ring-2 focus:ring-white"
                    >
                        Go back to home
                    </NuxtLink>
                </div>
            </Container>
        </BasePage>
    </div>
</template>

<script setup lang="ts">
import { NuxtError } from '#app';

const { error } = defineProps<{
    error: NuxtError;
}>();

const title = error.statusCode === 404 ? '404 | Not Found' : `${error.statusCode} | Error`;

useHead({
    title,
    meta: [
        {
            name: 'og:title',
            content: title,
        },
        {
            name: 'description',
            content: error.message,
        },
    ],
});
</script>

<style scoped>
.background-gradient {
    background: radial-gradient(circle at 50% 100%, #6566e9, rgba(255, 255, 255, 0) 75%), #0c0c0c;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>
