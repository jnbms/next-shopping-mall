import styled from "@emotion/styled";

const Sizer = styled.div`
    color: gray;
    border: 1px solid gray;
    box-sizing: border-box;
    padding: 1.5rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    &.selected {
        border: 1px solid;
        color: black;
        box-shadow: 0 8px 8px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.23);
    }
    &.closed {
        transition: none;
        border: 1px solid lightgray;
        color: lightgray;
        box-shadow: none;
    }
`
export default Sizer;