import styled from "@emotion/styled";

const Space = styled.div<{height?: number, width?: number}>`
    height: ${props => props.height + "em"};
    width:  ${props => props.width + "em"};

`
export default Space;