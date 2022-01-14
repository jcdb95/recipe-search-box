<template>
    <router-view />
</template>

<script>
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        store.dispatch('auth/initAuth');
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: rgb(245, 231, 185);
    min-height: 100%;
    height: 100vh;
    overflow: auto;
}
</style>
