import Vuex from 'vuex';
import Recipes from './modules/recipes';
import Auth from './modules/auth';

const store = Vuex.createStore({
  modules: {
    recipes: Recipes,
    auth: Auth
  }
})

export default store;