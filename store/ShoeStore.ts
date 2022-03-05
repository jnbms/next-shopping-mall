import { makeAutoObservable } from "mobx";
// import { counts } from "./gerator/shoe";
import {shoe} from "./_entity";
import {v4 as uuid} from 'uuid';
import {uniqueNamesGenerator, animals} from "unique-names-generator";
import {LoremIpsum} from "lorem-ipsum";
import shoeImage1 from "../public/shoes/product01.jpg";

// allSize = ["260" ~ "280"]
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color: string = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// const rand_2_4 = Math.floor(Math.random() * 4 + 2);

// function range(start: number, end: number) {
//     let array = [];
//     for (let i = start; i <= end; i += 5) {
//       array.push(i);
//     }
//     return array;
//   }
// const allSize = range(255,285);


// function getRandomColors() {
//     var array = new Array<string>()
//     for(var i = 0; i < rand_2_4; i++){
//         array.push(getRandomColor());
//     }
//     return array;
// }

function getRandomPrice() {
    var price = Math.floor(Math.random() * 700 + 300);
    price = price * 100;
    return price;
}

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

const shoe1 = {
    // id: uuid(),
    name: uniqueNamesGenerator({dictionaries: [animals]}),
    description: lorem.generateSentences(1),
    image: shoeImage1,
    price: getRandomPrice(),
    // colors: getRandomColors(),
    sizes: ["265","270","275"]
};

const shoe2: shoe = {
    id: "asdfsd",
    name: "ASDF",
    description: "asd",
    price: 39800,
    colors: ["white","gray","lightgray","black"],
    sizes: ["265","270","275"]
};



export default class ShoeStore {
    RootStore;

    constructor(root: any){
        makeAutoObservable(this);
        this.RootStore = root; 
    }
    shoes: shoe[] = [];
    count = shoe1;
}