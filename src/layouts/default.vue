<template>
    <div class="background-gradient">
        <slot />
    </div>
</template>

<style scoped>
.background-gradient {
    background: radial-gradient(circle at 100% 10%, #6566e9, rgba(255, 255, 255, 0) 25%), #0c0c0c;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>
