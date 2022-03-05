import styled from "@emotion/styled";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Heads from "../components/molecules/Heads";
import { useStore } from "../store/RootStore";
import axios from "axios";
import { useState } from "react";
import { css } from "@emotion/react";
import DynamicImage from "../components/dynamicImage";


export async function getServerSideProps(context) {
  const designers = await axios.get(process.env.BACKEND_URL + '/designer/')
  .then(result => result.data)
  
  return {
    props: {
      designers
    }
  }
}

export default function Index({designers}){
  
  const odd = designers.filter(disigner => disigner.id % 2 == 1)
  const even = designers.filter(disigner => disigner.id % 2 == 0)
  return(
    <Style>
      <div className="header">
        <Heads/>
      </div>

      {/* <Navi/> */}
    <div className="container">
    
    <div className="column">
        {odd.map(designer => {
          return (
            <Link key={designer.id} href={"/designer/" + designer.name} passHref>
              {/* 분별을 고유성있는 Id로 적용해야 했어야 함 */}
            <motion.div layoutId={designer.name} className="image-box"
            >
              <DynamicImage
                loader={() => process.env.BACKEND_URL + '/designer/image/' + designer.name}
                src={designer.name + '.jpg'}
                />
              <div className="cover">
                <h1>{designer.slogan}</h1>
                <div>{designer.coment}</div>
              </div>
            </motion.div>
            </Link>
          )}
        )}
    </div>

    
    <div className="column">
        {even.map(designer => {
          return (
            <Link key={designer.id} href={"/designer/" + designer.name} passHref>
            <motion.div layoutId={designer.name} className="image-box"
            >
              <DynamicImage
                loader={() => process.env.BACKEND_URL + '/designer/image/' + designer.name}
                src={designer.name + '.jpg'}
                />
              <div className="cover">
                <h1>{designer.slogan}</h1>
                <div>{designer.coment}</div>
              </div>
            </motion.div>
            </Link>
          )}
        )}
    </div>

    </div>


    </Style>
  );
};

const Style = styled.div`
  .header {
    height: 10vh;
  }
  .container {
    display: grid;
    position: relative;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    &::-webkit-scrollbar {
      display: none;
    }
    overflow: scroll;
      .image-box {
        position: relative;
        width: 100%;
      .cover{
        position: absolute;
        color: white;
        
        transition: background-color 0.5s;
        background-color: #0000003b;
        &:hover {
          background-color: #00000081;
        }
        height: 100%;
        width: 100%;
        border: 4px double;
        text-align: center;
        justify-content: center;
      }
    }
}
`