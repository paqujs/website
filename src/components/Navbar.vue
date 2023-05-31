<template>
    <div class="sticky top-0 z-50 backdrop-blur-md">
        <Container
            class="h-20 z-50 flex items-center md:space-x-[3rem] lg:space-x-[9rem] xl:space-x-[13rem] 2xl:space-x-[21rem] justify-around relative"
        >
            <Icon
                :icon="isOpen ? 'octicon:x-16' : 'material-symbols:menu'"
                class="h-6 w-6 cursor-pointer max-sm:mr-auto text-slate-300 hover:text-white transition-colors"
                @click="handleNav"
                v-if="isMobile"
            />

            <h3 class="max-sm:mx-auto max-sm:!text-xl select-none">Paqu.js</h3>

            <div class="flex items-center space-x-4 max-sm:hidden">
                <NuxtLink
                    v-for="(item, i) in items"
                    :to="item.to"
                    :key="i"
                    class="text-slate-200 flex items-center gap-1 text-lg px-4 py-1.5 rounded-md hover:bg-[#121212] hover:text-white transition-colors"
                >
                    <Icon :icon="item.icon" class="h-5 w-5" />
                    {{ upperFirst(item.name) }}
                </NuxtLink>
            </div>

            <div class="flex items-center space-x-2">
                <a
                    v-for="contact in contacts"
                    :key="contact.name"
                    :href="contact.link"
                    :aria-label="contact.name"
                    target="_blank"
                    class="text-slate-300 p-2.5 rounded-md hover:text-white transition-colors"
                >
                    <Icon :icon="contact.icon" class="h-6 w-6" />
                </a>
            </div>
        </Container>

        <div
            class="flex-col justify-center items-center w-full space-y-4 p-4 opacity-0 h-0 hidden"
            id="mobile-nav"
        >
            <NuxtLink
                v-for="(item, i) in items"
                :to="item.to"
                :key="i"
                class="text-slate-200 flex items-center gap-1 w-full text-lg py-3 px-4 rounded-md hover:bg-[rgba(0,0,0,0.2)] hover:text-white transition-colors opacity-0"
            >
                <Icon :icon="item.icon" class="h-6 w-6" />
                {{ upperFirst(item.name) }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { Icon } from '@iconify/vue';
import { upperFirst } from '@/lib/upper-first';

const items = [
    {
        name: 'home',
        icon: 'ic:baseline-home',
        to: '/',
    },
    {
        name: 'docs',
        icon: 'eos-icons:api',
        to: '/docs',
    },
    {
        name: 'guide',
        icon: 'tabler:book-filled',
        to: '/guide',
    },
];
const contacts = [
    {
        name: 'discord',
        icon: 'bi:discord',
        link: 'https://discord.gg/fJva3Scm5G',
    },
    {
        name: 'github',
        icon: 'bi:github',
        link: 'https://github.com/paqujs',
    },
];

const isMobile = ref(false);
const isOpen = ref(false);
const routerLinkActiveColor = computed(() => (isMobile.value ? 'rgba(0,0,0,0.2)' : '#121212'));

const openNav = () => {
    isOpen.value = true;

    gsap.to('#mobile-nav', {
        opacity: 1,
        duration: 0.3,
        height: `${items.length * 4.65}rem`,
        display: 'flex',
        onComplete: () => {
            gsap.fromTo(
                '#mobile-nav > a',
                {
                    opacity: 0,
                    x: -20,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
                    stagger: 0.1,
                },
            );
        },
    });
};

const closeNav = () => {
    gsap.to('#mobile-nav > a', {
        opacity: 0,
        x: -20,
        duration: 0.3,
        stagger: -0.1,
        onComplete: () => {
            gsap.to('#mobile-nav', {
                opacity: 0,
                duration: 0.3,
                height: 0,
                display: 'none',
                onComplete: () => {
                    isOpen.value = false;
                },
            });
        },
    });
};

const handleNav = () => {
    if (isOpen.value) {
        closeNav();
    } else {
        openNav();
    }
};

const handleResize = () => {
    isMobile.value = window.innerWidth < 640;

    if (!isMobile.value && isOpen.value) {
        closeNav();
    }
};

onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.router-link-active {
    background-color: v-bind('routerLinkActiveColor');
    color: white;
}
</style>
