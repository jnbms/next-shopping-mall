import shoe01 from "../../public/shoes/product01.jpg";
import shoe02 from "../../public/shoes/product02.jpg";

import Image from "next/image";
import desginer from "../../public/designer1.jpeg";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { H2, H3, P1, P2} from "../../components/atoms/Text";
import Space from "../../styles/Space";
import {Icon} from "@iconify/react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useState } from "react";

export async function getServerSideProps(context) {
    // server cmponent라서 도메인까지 가져와야하는 문제가 발생한다.
    const name = context.params.designer
    // const image = await axios.get("http://localhost:3000/api/designer/image/" + name)
        // .then(result => console.log(result.data))
        // .catch(err => console.log(err))
    const allshoes = await axios.get(
        process.env.BACKEND_URL + '/shoes/designer?',{params:{name: name}}
        )
        .then(result => result.data)
    return {
        props: {
            data: {
                name,
                allshoes
            }
        }
    }
}

export default function DesignerInfo(props) {

    const {name, allshoes} = props.data;
    const [shoes, setShoes] = useState(allshoes)
    const imageLoader = () => process.env.BACKEND_URL + '/designer/image/' + name
    return (
        <Style className="column">
            <div className="container">
                <motion.div className="image-div" animate={{filter: ["brightness(100%)","brightness(60%)"]}} layoutId={name}>
                    <Image
                        loader={imageLoader}
                        src= {name}
                        layout="fill" className="image"
                        alt="designer"
                        />
                </motion.div>

                    <motion.div style={{zIndex: 1}} animate={{opacity: [0,1]}} className="absolute image-text">
                        <P1>Designer Infomation</P1>
                        <H2>{name}</H2>
                    </motion.div>
            </div>


            <motion.div
                transition={{type: "tween"}}
                initial={{y: 0}}
                animate={{y: "-50vh"}}
                className="rounded">
                    <P1>최고의 만족을 위한</P1>
                    <H2>올해의 상품들 🤟</H2>
                    <Space height={2}></Space>
                    <div>
                        <H3>PRODUCTS</H3>
                        <div className="card-container">

                            {shoes.map(shoe => 
                                <Link href={'/product/' + shoe.id} passHref key={shoe.id}>
                                    <div className="card">
                                        <motion.div 
                                            layoutId={shoe.id} 
                                            className="image-box">
                                            <Image
                                                className="image"
                                                loader={() => process.env.BACKEND_URL + '/shoes/image/' + shoe.name}
                                                src={shoe.name}
                                                alt={shoe.name}
                                                // layout="fill"
                                                width="100%"
                                                height="300%"
                                                />
                                        </motion.div>
                                    <div className="textbox">
                                            <Space height={0.5}/>
                                            <H3>{shoe.name}</H3>
                                            <Space height={0.1}/>
                                            <P2><i>{shoe.description}</i></P2>
                                            <Space height={0.5}/>
                                        <div className="row star-container">
                                            <Icon icon="ant-design:star-filled" />
                                            <Icon icon="ant-design:star-filled" />
                                            <Icon icon="ant-design:star-filled" />
                                            <Icon icon="ant-design:star-outlined" />
                                            <Icon icon="ant-design:star-outlined" />
                                        </div>
                                        <Space height={0.5}/>
                                        <H3>$ {shoe.price}</H3>
                                    </div>
                                </div>
                                </Link>
                                )}
                        </div>
                    </div>
            </motion.div>
    </Style>
    );
}

const Style = styled.div`
    width: 100vw;
    height: 100vh;
    @media (min-width: 768px) {
        flex-direction: row;
    }
    .container{
        position: relative;
        height: 100%;
        width: 100%;
        .image-div {
            /* position: relative; */
            /* right: 25%; */
            height: 100vh;
            width: 100%;
        }
        .image-text {
            width: 100%;
            text-align: center;
            top: 30%;
            color: white;
        }
            
            
    }
    .rounded {
            /* position: absolute; */
            /* height: 100%; */
            border-radius: 20px 20px 0px 0px;
            width: 100%;
            /* height: 100%; */
            @media (min-width: 768px) {
                height: 100%;
                border-radius: 0px;
                position: relative;
                top: 50vh;
                overflow: scroll;
            }
            /* border: 1px solid lightgray; */
            background-color: white;
            border: 1px solid black;
            /* height: 10vh; */
            box-sizing: border-box;
            padding: 2em;
        }
        .card-container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.4em;
            @media (min-width: 768px) {
                /* grid-template-columns: repeat(1, auto); */
            }
            .card {
                border: 1px solid lightgray;
                .image-box {
                    border-bottom: 1px solid lightgray;
                    overflow: hidden;
                    .image {
                        transition: 0.2s;
                        &:hover {
                            transform: scale(1.2);
                        }
                    }
                }
                .textbox{
                    box-sizing: border-box;
                    padding-inline: 0.4em;
                    
                }
                .star-container {
                    color: #e0d96c;
                }
            }
        }
`
        