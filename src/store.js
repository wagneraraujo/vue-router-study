import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "Wagner"
  },

  //mudar inforacao do state
  mutations: {
    mudarUser(state) {
      state.user = "Andri";
    }
  }

  //payload => enviar alguma ifnromacao junto com o commit => enviar como objeto para passar mais informacoes
  //
  //actions => sempre vai chamar uma mutacao para modificar um estado
});
