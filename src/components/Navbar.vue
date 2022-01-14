<template>
    <div id="nav" class="flex flex-row w-full mx-auto items-center justify-center md:justify-end pt-4">
        <button class="bg-red-500 w-full md:w-auto text-white p-2 rounded font-semibold cursor-pointer" @click="logout">
            Logout
        </button>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        const logout = async () => {
            try {
                await store.dispatch('auth/logout');
                router.push('/login');
            } catch (error) {
                console.log('Error while log out', error);
            }
        };

        return {
            logout,
        };
    },
};
</script>
