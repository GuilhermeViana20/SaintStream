<script setup>
import Navbar from '@/components/Navbar.vue';

</script>

<template>
    <div>
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout'
}
</script>