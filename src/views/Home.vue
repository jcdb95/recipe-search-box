<template>
    <div class="home h-auto max-w-2xl flex-col mx-auto justify-center items-center container px-4 md:px-0">
        <navbar />
        <search-box />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { useStore } from 'vuex';
import SearchBox from '../components/SearchBox.vue';

export default {
    name: 'Home',
    components: {
        Navbar,
        SearchBox,
    },
    setup() {
        const store = useStore();
        store.dispatch('auth/initAuth');
        return {
            store,
        };
    },
};
</script>
