import { css } from "@emotion/react";
import styled from "@emotion/styled";

const buttonStyle = (props: any) => {
    if(props.color == "primary") {
        return css`
            background-color: black;
            color: white;
            border: none;
            &:hover {
                opacity: 0.8;
            }
        `
    } else if (props.color == "secondary") {
        return css`
            border: 1px solid;
        `
    }
}

export const Button = styled.button<{width: string, height: string}>`
width: ${props => props.width};
height: ${props => props.height};
${buttonStyle}
`