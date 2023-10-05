<script setup>
import Navbar from '@/components/Navbar.vue'; // Substitui '@' pelo caminho correto para o teu diretório de componentes.

</script>

<template>
    <div>
        <Navbar></Navbar> <!-- Usa o componente importado -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout'
}
</script>