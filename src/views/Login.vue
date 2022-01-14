<template>
    <div class="flex flex-col w-full h-full items-center justify-center px-4 md:px-0">
        Please login to use the App.
        <button class="button w-full md:w-32 p-2 font-bold bg-green-400 text-white rounded shadow my-4" @click="login">
            Login
        </button>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    name: 'Login',
    setup() {
        const store = useStore();
        const router = useRouter();
        const login = async () => {
            try {
                await store.dispatch('auth/login');
                router.push('/');
            } catch (error) {
                console.log('Error while loggin', error);
            }
        };

        return {
            login,
        };
    },
};
</script>
