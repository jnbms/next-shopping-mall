
export interface user {
    name : string,
    id: string,
    pw: string,
    adress : string,
    phone : number
}


export interface shoe {
    id: string,
    name: string,
    description: string,
    // image: {
    //     id: string;
    //     name: string;
    //     description: string;
    //     image: StaticImageData;
    //     price: number;
    //     colors: string[];
    //     sizes: string[];
    // },
    price: number,
    colors: Array<string>,
    sizes: Array<string>,
}

export interface designer {
    name: string,
    image: StaticImageData,
}