import { createStore } from "vuex";
import usersModule from './users';


const store = createStore({
  modules: {
    users: usersModule,
   
  }
});


export default store;