<template>
    <div class="h-auto w-full flex flex-col mx-auto items-center pt-4">
        <div class="bg-yellow-300 w-full p-4 h-auto shadow-md rounded my-4">
            <h1 class="text-xl text-gray-600 text-center font-bold w-full mb-4">
                Start typing and find your favourite recipes
            </h1>
            <input
                class="bg-white w-full text-grey-800 rounded shadow outline-none pl-2 py-2 truncate"
                v-model="query"
                autofocus
                placeholder="Enter your favorite ingredients and get recipes."
            />
        </div>
        <loading-spiner v-if="loading" />
        <div v-if="list.length" class="h-full w-full grid grid-cols-1 gap-4 md:grid-cols-3 my-4">
            <recipe-card v-for="recipe in list" :key="recipe.id" :recipe_data="recipe" />
        </div>
        <p v-if="noResults && query.length && !list.length">Sorry, there are no results for your query :(</p>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import debouncedRef from '../utility/useDebounce';
import { computed, ref, watchEffect } from '@vue/runtime-core';
import RecipeCard from './RecipeCard.vue';
import LoadingSpiner from './LoadingSpiner.vue';

export default {
    name:'SearchBox',
    components: {
        RecipeCard,
        LoadingSpiner,
    },
    setup() {
        const store = useStore();
        const query = debouncedRef('', 1000);
        const list = computed(() => store.getters['recipes/list']);
        const noResults = computed(() => store.getters['recipes/noResults']);
        const loading = ref(false);

        watchEffect(async () => {
            if (query.value) {
                try {
                    loading.value = true;
                    store.commit('recipes/setList', []);
                    await store.dispatch('recipes/getRecipes', { query: query.value });
                    loading.value = false;
                } catch (error) {
                    console.log('Error while getting the recipes: ', error);
                    loading.value = true;
                }
            } else {
                store.commit('recipes/setList', []);
                store.commit('recipes/noResults', null);
            }
        });

        return {
            list,
            loading,
            noResults,
            query,
        };
    },
};
</script>
