import styled from "@emotion/styled";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, H3, P2 } from "../components/atoms/Text";
import Heads from "../components/molecules/Heads";
import Navi from "../components/molecules/Navi";
import shoe3 from "../public/shoes/product06.jpg";
import shoe4 from "../public/shoes/product07.jpg";
import shoe5 from "../public/shoes/product05.jpg";


export default function Index(){
  return(
    <Style>
      <div className="header">
        <Heads/>
      </div>

      {/* <Navi/> */}
     
     <div className="container">
     
       <Link passHref href="/product">
         <motion.div layoutId="product" className="image-box">
           <Image className="image"  src={shoe3} alt="designer"/>
           <div className="cover">
             <H3>Rainbow Shoes</H3>
             <P2 style={{color:"white"}}>파스텔톤 컬러의 매력</P2>
             <H2>48300원</H2>
           </div>
         </motion.div>
       </Link>

       <Link passHref href="/designerInfo">
         <motion.div layoutId="designerImage2" className="image-box">
           <Image className="image"  src={shoe4} alt="designer"/>
           <div className="cover">
             <H3>Rainbow Shoes</H3>
             <P2 style={{color:"white"}}>파스텔톤 컬러의 매력</P2>
             <H2>48300원</H2>
           </div>
         </motion.div>
       </Link>

       <Link href="/designerInfo">
         <motion.div layoutId="designerImage3" className="image-box">
           <Image className="image"  src={shoe5} alt="designer"/>
           <div className="cover">
             <H3>Rainbow Shoes</H3>
             <P2 style={{color:"white"}}>파스텔톤 컬러의 매력</P2>
             <H2>48300원</H2>
           </div>
         </motion.div>
       </Link>

       <Link href="/designerInfo">
         <motion.div layoutId="designerImage4" className="image-box">
           <Image className="image"  src={shoe3} alt="designer"/>
           <div className="cover">
             <H3>Rainbow Shoes</H3>
             <P2 style={{color:"white"}}>파스텔톤 컬러의 매력</P2>
             <H2>48300원</H2>
           </div>
         </motion.div>
       </Link>

       <Link href="/designerInfo">
         <motion.div layoutId="designerImage5" className="image-box">
           <Image className="image"  src={shoe4} alt="designer"/>
           <div className="cover">
             <H3>Rainbow Shoes</H3>
             <P2 style={{color:"white"}}>파스텔톤 컬러의 매력</P2>
             <H2>48300원</H2>
           </div>
         </motion.div>
       </Link>

       <Link href="/designerInfo">
         <motion.div layoutId="designerImage6" className="image-box">
           <Image className="image"  src={shoe5} alt="designer"/>
           <div className="cover">
             <H3>Rainbow Shoes</H3>
             <P2 style={{color:"white"}}>파스텔톤 컬러의 매력</P2>
             <H2>48300원</H2>
           </div>
         </motion.div>
       </Link>



     </div>


    </Style>
  );
};

const Style = styled.div`
  .header {
    height: 10vh;
  }
  .container {
    /* height: 90vh; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
    /* grid-template-rows: repeat(3, 1fr); */
    margin: 0.1em;
    gap: 0.1em;
    &::-webkit-scrollbar {
      display: none;
    }
    overflow: scroll;
    .image-box {
      position: relative;
      border: 1px solid lightgray;
      .image{
      /* transition: 0.2s; */
        &:hover {
          filter: brightness(80%);
        /* filter: ; */
        }
      }
      .cover{
        position: absolute;
        color: white;
        bottom: 0;
        transition: background-color 0.5s;
        background-color: #0000003b;
        /* height: 100%; */
        width: 100%;
        /* border: 1px ; */
        text-align: right;
        padding: 0.4em;
        justify-content: center;
      }
    }
  }
`