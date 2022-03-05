import styled from "@emotion/styled";
import { H3 } from "../atoms/Text";

export default function Navi() {
    return (
        <Style>
        <div className='row'>
            <H3>PRODUCTS</H3>
            <H3 className="selected">DESIGNER</H3>
        </div>
        </Style>
    );
}
const Style = styled.div`
    .row {
        justify-content: space-around;
        padding: 1em;
        /* background-color: black; */
        H3 {
            /* border: 1px solid; */
            text-align: center;
            box-sizing: border-box;
            /* padding: 1em; */
        &:hover{
            background-color: lightgray;
        }
        }
        .selected {
            text-decoration: underline;
        }
    }
`