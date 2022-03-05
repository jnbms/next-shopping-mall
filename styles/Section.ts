import styled from "@emotion/styled";

const Section = styled.div<{margin: string}>`
    margin-bottom: ${props => props.margin? props.margin : 0} + "em";
`