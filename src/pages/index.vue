<template>
    <Navbar />
    <Container>
        <div class="mt-24 md:mt-44 max-md:text-center md:w-2/3">
            <h1
                class="!text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-700 z-10"
            >
                The Progressive
                <br class="max-md:hidden" />
                Discord API Wrapper
            </h1>
            <p class="text-slate-200 mt-8 !text-xl">
                A powerful, progressive, easy-to-use library that lets you interact with the
                <br class="max-md:hidden" />
                Discord API.
            </p>
            <div
                class="flex items-center max-xs:flex-col max-md:justify-center max-xs:space-y-4 xs:space-x-4 mt-8"
            >
                <NuxtLink
                    to="/docs"
                    role="button"
                    type="button"
                    class="text-center p-4 w-72 lg:w-48 max-md:w-full rounded-lg bg-gradient-to-r from-blue-400 to-violet-700 text-white focus:ring-2 focus:ring-white"
                >
                    Get Started
                </NuxtLink>
                <div class="bg-[#121212] max-md:w-full max-lg:w-full w-1/2 p-4 rounded-lg flex">
                    <p
                        class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-700"
                    >
                        >
                    </p>
                    <p class="text-slate-200 ml-2">npm install paqu.js</p>
                    <button type="button" class="ml-auto focus:outline-none" @click="handleCopy">
                        <Icon
                            :icon="isCopied ? 'ph:check-bold' : 'ph:copy-duotone'"
                            class="w-6 h-6 text-slate-200"
                        />
                    </button>
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const isCopied = ref(false);

const handleCopy = async () => {
    await navigator.clipboard.writeText('npm install paqu.js');
    isCopied.value = true;

    setTimeout(() => {
        isCopied.value = false;
    }, 2000);
};
</script>
