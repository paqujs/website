<template>
    <NProgress />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useNProgress } from '@/lib/nprogress';

useNProgress();
</script>
