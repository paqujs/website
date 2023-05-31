<template>
    <Transition>
        <div
            class="fixed z-[9999] h-1 bg-gradient-to-r from-blue-400 to-violet-700 transition-[width] duration-300"
            :style="{
                width: `${store.progress * 100}%`,
            }"
            v-if="store.isAnimating"
        ></div>
    </Transition>
</template>

<script setup lang="ts">
import { useNProgressStore } from '@/store';

const store = useNProgressStore();
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
