import styled from "@emotion/styled";

export default function CartCard() {
    return(
        <Style>
            <div className="image"/>
            <div className="content column">
                <div className="title"><b>PRODUCT TITLE</b></div>
                <div>세팅 요소들을 한번에 묶어</div>
            </div>
            <div>갯수</div>
            <div>가격</div>
            <div>X</div>
        </Style>
    );
}

const Style = styled.div`
    display: flex;
    flex-direction: row;
    .image {
        height: 500px;
        width: 300;
        background-color: lightgray;
    }
`