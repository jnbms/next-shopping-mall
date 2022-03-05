import { makeAutoObservable, toJS } from "mobx";
import {enableStaticRendering} from 'mobx-react-lite'
import {makePersistable} from 'mobx-persist-store'

interface selectedShoe {
    name: string,
    color: string,
    size: string,
    quantity: number,
    price: number,
}
interface userstate {
    id: string,
    username: string,
    isLogin : boolean
}
class User {

    RootSotre;

    constructor(root: any) {
        makeAutoObservable(this)
        this.RootSotre = root;

        if (typeof window !== 'undefined')
        makePersistable(this, {
            name: 'UserStore',
            properties: ['userState', 'cart'],
            storage: window.sessionStorage
        })
    }
    
    userState: userstate | null = null;

    // mobx는 자바스크립트에서 arrow funciton이 아니면 문제가 발생한다.
    setUserState = (newUserState: userstate) => {
        this.userState = newUserState
    }

    cart: selectedShoe[] = []
    addToCart(newSelectedShoe : selectedShoe){
        this.cart.push(newSelectedShoe)
    }
    resetCart() {
        this.cart = [];
    }

    asd = 3
}

export default User;
