import Image from "next/image";
import shoe from "../../public/shoes/product02.jpg";
import { motion } from "framer-motion";
import { H1, H2, H3, P1, P2 } from "../../components/atoms/Text";
import styled from "@emotion/styled";
import Space from "../../styles/Space";
import { Icon } from "@iconify/react";
import Color from "../../components/atoms/Colors";
import Sizer from "../../components/atoms/Sizer";
import Input from "../../components/atoms/Input";
import { useState } from "react";
import { Button } from "../../components/atoms/Button";
import axios from "axios";
import { useStore } from "../../store/RootStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";
// index로 컴포넌트 합치기

export async function getServerSideProps(context) {
  
  const shoes = (await axios.get(process.env.BACKEND_URL + '/shoes/' + context.params.id)).data
  return {
    props : {
      shoes
    }
  }
}

export default observer(Product)
function Product({shoes}) {

  const {id, name, description, colors, sizes, price} = shoes
  const [selectedColor,setSelectedColor] = useState("red");
  const [selectedSize,setSelectedSize]: any = useState();
  const [selectedQuantity,setSelectedQuantity] = useState(1);
  // const colors = ["red", "yellow", "green", "skyblue"];
  const allSizes = [255,260,265,270,275,280,285];
  // const sizes = [260,270,275,280];
  return <Style>
      <motion.div className="product-image" layoutId={id}>
        <Image
          loader={() => process.env.BACKEND_URL + '/shoes/image/' + name} 
          layout="fill"
          src={shoe}
          alt="shoe"
          />
    
        <Icon
        icon="ep:circle-close"
        className="close-icon"
        height={48}
        onClick={() => window.history.back()}
        />
        <motion.div animate={{opacity: [0,1]}} className="cover-text">
          {/* <H1>Common Project</H1> */}
          <H2>{name}</H2>
        </motion.div>
      </motion.div>

    {/* <Space height={3}/> */}

    <div className="content">
    
      <div className="scroller">
        <H2>INFOMATION</H2>
        <Space height={1}/>
        <P1 className="coment">
          {description}
        </P1>
        <Space height={3}/>
        <H2>COLORS</H2>
        <Space height={0.4}/>
        <P1>색상을 선택해주세요.</P1>
        <div className="row color-container">
          {colors.map(color =>
            <Color
              key={color} color={color} size="52"
              className={selectedColor == color ? "selected" : ""}
              onClick={() => setSelectedColor(color)}
            />
          )}
        </div>
        <H2>SIZE</H2>
        <Space height={0.4}/>
        <P1>사이즈를 선택해주세요.</P1>
        <div className="row size-container">
          {allSizes.map(size => {
            if(sizes.filter(selectedSize => size == selectedSize).length == 0) {
              return  <Sizer
                        key={size} className="closed">
                        {size}
                      </Sizer>
            } else {
              return  <Sizer
                        key={size} className={selectedSize == size ? "selected" : ""}
                        onClick={() => setSelectedSize(size)}>
                        {size}
                      </Sizer>
            }
          })}
        </div>
        <H2>QUANTITY</H2>
        <Space height={0.4}/>
        <P1>수량을 선택해주세요.</P1>
        <div className="row quantity-container">
          <motion.div className="button" whileTap={{scale: 0.9}}
            onClick={() => selectedQuantity != 1 ? setSelectedQuantity(selectedQuantity - 1): ""}>
            <Icon icon="clarity:minus-line"/>
          </motion.div>
          {/* onchange 가 없는 경우 warning이 떠서 넣었음 */}
          <Input className="input" onChange={()=>{}} value={selectedQuantity}/>
          <motion.div className="button" whileTap={{scale: 0.9}}
            onClick={() => setSelectedQuantity(selectedQuantity + 1)}>
            <Icon icon="clarity:plus-line"/>
          </motion.div>
        </div>
        <div className="price-container">
          <H2>PRICE</H2>
          <Space height={0.4}/>
          <P1>최종 가격</P1>
          <Space height={2}/>
          <P1 className="before-sale">63800원</P1>
          <H1>{price}</H1>
          <Space height={2}/>
        </div>
        <div>
          <Button color="primary" width="14em" height="4em">장바구니에 담기</Button>
          <Space height={1}/>
          <Button color="secondary" width="14em" height="4em">구매하기</Button>
        </div>

      </div>

    </div>
  </Style>;
}

const Style = styled.div`
  /* padding-block: 8em; */
  /* padding-bottom: 4em; */
  /* box-sizing: border-box; */
  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    /* padding-block: 8em; */
    /* justify-content:center; */
    /* align-items:s center; */
    }
  .product-image {
    text-align: center;
    position: relative;
    width: 100vw;
    height: 70vh;
    @media (min-width: 768px) {
        height: 100%;
        width: 50%;
    }
    .close-icon {
      position: absolute;
      color: white;
      top: 1em;
      right: 1em;
    }
    .cover-text {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 3em;
    color: white;
    }
  }
  .content {
    /* heigh */
    overflow: scroll;
    margin-inline: 1em;
    /* display: flex; */
    align-items: center;
    text-align: center;
    @media (min-width: 768px) {
    width: 50%;
    }
    /* height: 100vh; */
    /* border: 1px solid; */
    /* overflow: scroll; */
    box-sizing: border-box;
    /* padding: 2em; */
    &::-webkit-scrollbar {
      display: none;
    }
    .scroller {
      display: flex;
      margin-block: 4em;
      flex-direction: column;
      align-items: center;
      width: 100%;
      text-align: center;
    .coment {
      width: 80%;
    }
    .color-container {
      margin-block: 2em;
      gap: 2em;
    }
    .size-container {
      margin-block: 2em;
      display: grid;
      grid-template-columns: repeat(4, auto);
      gap: 0.5em;
    }
    .quantity-container {
      align-items: center;
      gap: 2em;
      padding: 2em;
      .input {
        text-align: center;
        height: 48px;
        width: 48px;
      }
      .button {
        border: 1px solid;
        border-radius: 50%;
        height: 48px;
        width: 48px;
        display: grid;
        place-items: center;
      }
    }
    .price-container {
      .before-sale {
        color: #fd9797;
        text-decoration-line: line-through;
      }
    }
  }
  }
`
