<script setup lang="ts">

const links = reactive([
    {
        name: 'Collections',
        route: ''
    },
    {
        name: 'Men',
        route: ''
    },
    {
        name: 'Women',
        route: ''
    },
    {
        name: 'About',
        route: ''
    },
    {
        name: 'Contact',
        route: ''
    }
])
const activeLink = ref<number>(0)
</script>

<template>
    <div class="px-10 py-5 ">
        <div class="w-full  border-b-2 border-slate-300 flex items-center  justify-between ">
    <div class="flex gap-6">
        <h2 class="text-3xl font-bold">SeyiCommerce</h2>
        <div @click="activeLink = index" v-for="(link, index) in links" :key="index" class="flex w-fit mt-2 flex-col">
            <h5 class="cursor-pointer">{{ link.name }}</h5>
            <div v-if="activeLink === index" class="w-full bg-[#FF7B1E] h-[3px] mt-8 ">
            </div>
        </div>
    </div>
    <div class="flex items-center gap-4">
        <UIcon class="text-3xl" name="i-heroicons-shopping-cart" />
        <img class="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Rounded avatar">

 </div>
   </div>
    </div>
   
</template>