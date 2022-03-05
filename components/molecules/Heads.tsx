import React from 'react';
import { motion } from 'framer-motion';
import { H1, H2 } from '../atoms/Text';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Router from 'next/router';
export default function header() {
  return <Style>
    <div 
      // animate=
      className='column head'>
        <div className='title'>
        <Link href="/" passHref>
          <motion.div animate={{opacity: [0,1]}}>
              NIKE
          </motion.div>
        </Link>
          <Icon
            className='menu-button second'
            icon="bi:person-circle" height={36}
            onClick={() => {
              var {userState} = JSON.parse(sessionStorage.UserStore)
              if(userState != null){
                Router.push('/cart')
              } else {
                Router.push('/login')
              }
            }} />
        <Link href="/menu" passHref>
          <Icon className='menu-button first' icon="ep:menu" height={36} />
        </Link>
        </div>
    </div>
      
  </Style>;
}


const Style = styled.div`
  height: 100%;
  .head{
  /* border: 1px solid red; */
  height: 100%;

  .menu-button {
    cursor: pointer;
    position: absolute;
    color: white;
    &.first { right: 0.5em; }
    &.second { right: 2em; }
    /* top: 0.8em; */
    &:hover {
      color: lightgray;
    }
  }
  
  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* height: 0px; */
    font-size: 40px;
    background-color: black;
    color: white;
    text-align: center;
    /* padding: 0.5em; */
    /* height: 100%; */
  }
}

`