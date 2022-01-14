<template>
    <div class="w-full h-72 flex-col bg-white rounded-md shadow-md md:transition-all md:duration-200 hover:shadow-xl">
        <div class="h-full flex-col justify-around">
            <img :src="data.image" :alt="data.title" class="w-full h-1/2 object-cover rounded-t-md" />
            <div class="flex flex-col h-1/2 justify-between text-left p-4">
                <h2 class="text-base font-bold truncate">
                    {{ data.title }}
                </h2>
                <p v-html="data.summary" class="text-sm text-gray-500 truncate">
                </p>
                <button
                    @click="checkTheFullRecipe(data.sourceUrl)"
                    class="bg-green-500 p-1 w-full text-white rounded font-bold"
                >
                    Check the full recipe
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
    name: 'RecipeCard',
    props: {
        recipe_data: {
            required: true,
        },
    },
    setup(props) {
        const data = ref(props.recipe_data);
        const checkTheFullRecipe = (link) => window.open(link, '_blank');

        return {
            checkTheFullRecipe,
            data,
        };
    },
};
</script>
