import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Popup({oepn = false}) {
    return(
        <Style open={oepn}>
            <motion.div className="popup">
                <div>장바구니에 담겼습니다.</div>
                <button>장바구니 보러가기</button>
                <button>❌</button>
            </motion.div>
        </Style>
    );
}

const Style = styled.div<{open}>`
    position: fixed;
    /* border: 1px solid red; */
    /* width: 100vw; */
    align-items: center;
    transition: 0.1s;
    bottom: ${props => props.open? '15px' : '-100px'};
    left: 50%;


    .popup {
        /* z-index: 1; */
        position: relative;
        left: -50%;
        /* top: ${props => props.open? '0px': '100px'}; */
        font-family: 'Courier New', Courier, monospace;

        padding-inline: 1em;
        padding-block: 1em;
        background-color: black;
        color: white;
        border-radius: 15px;
        box-sizing: border-box;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4px;
        white-space: nowrap;

        button {
            background: none;
            border: none;
            color: skyblue;
        }
    }
`