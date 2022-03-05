import styled from "@emotion/styled"

const Color = styled.div<{size: string}>`
    position: relative;
    height: ${props => props.size + "px"};
    width: ${props => props.size + "px"};

    border: 1px solid black;
    background-color: ${props => props.color};
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    /* transition: opacity 0.4s; */
    
    &:hover {
        opacity: 1;
    }
    &.selected {
        opacity: 1;
        box-shadow: 0 4px 4px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.22);
    }
    opacity: 0.5;
`
export default Color