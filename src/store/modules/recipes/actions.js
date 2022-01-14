import axios from 'axios';

const api = 'https://api.spoonacular.com/recipes/complexSearch';
const config = {
    api_key: process.env.VUE_APP_API_KEY,
};

export async function getRecipes(context , data) {
    if(data.query){
        try {
            let response = await axios.get(api, {
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                params: {
                    apiKey: config.api_key,
                    query: data.query,
                    number: 6,
                    addRecipeInformation: true,
                }
            })
            if (response.data.results.length){
                context.commit('setList', response.data.results)
            } else {
                context.commit('noResults', true)
                context.commit('setList', [])
            }
        } catch (error) {
            console.log('Error while getting the recipes', error)
        }
    }

}


