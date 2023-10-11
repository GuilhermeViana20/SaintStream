<script setup>
import Navbar from '@/components/NavbarNoAuth.vue';

</script>

<template>
    <div>
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'NoAuthLayout'
}
</script>