import { ActionTree, createStore, GetterTree, MutationTree } from "vuex";
import { iUserDetails, IUserDetails } from "@/utils/interface/user";

interface IState {
  userDetails: IUserDetails;
}

const state: IState = {
  userDetails: { ...iUserDetails },
};
const getters: GetterTree<IState, IState> = {};
const mutations: MutationTree<IState> = {
  setUserDetails(state: IState, payload: IUserDetails) {
    state.userDetails = payload;
  },
};
const actions: ActionTree<IState, IState> = {
  async getUserDetails({ commit }: any, id: number) {
    try {
      let res: any = await fetch(`https://reqres.in/api/users/${id}`);
      res = await res.json();
      commit("setUserDetails", res?.data ?? {});
    } catch (e) {
      console.error("Could not get User Details", e);
    }
  },
};
export default createStore({
  state,
  getters,
  mutations,
  actions,
});
