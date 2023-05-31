<template>
    <div class="bg-gradient fixed w-full h-full -z-[1]">
        <div class="w-full h-full text-white absolute overflow-x-hidden font-[Inter]">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.bg-gradient {
    background: radial-gradient(circle at 100% 5%, #6190f490, rgba(255, 255, 255, 0) 40%),
        radial-gradient(circle at 5% 100%, #6b48e370, rgba(255, 255, 255, 0) 35%), #000;
}
</style>
