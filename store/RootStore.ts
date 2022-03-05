import { makeAutoObservable } from "mobx";
import { useContext } from "react";
import { createContext } from "react";
import ShoeStore from "./ShoeStore";
import USer from "./User";

class RootStore {
    ShoeStore;
    User
    // Inputs;

    constructor() {
        makeAutoObservable(this);
        this.ShoeStore = new ShoeStore(this);
        this.User = new USer(this)
        // this.Inputs = new Inputs(this);
    }
}

// 싱글톤
export const rootStore = new RootStore()
const RootContext = createContext(rootStore);
export const RootProvider = RootContext.Provider;
export const useStore = () => useContext(RootContext);