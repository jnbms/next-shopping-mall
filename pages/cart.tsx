import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import { H1, H2, H3 } from "../components/atoms/Text";
import Heads from "../components/molecules/Heads";
import Space from "../styles/Space";

export function getServerSideProps() {
  return {
    props: {

    }
  }
}

export default function Cart() {
  return (
    <Style>
    <div className="head">
      <Heads/>
    </div>
    <div>
      항상 최고의 품질과 고객의 만족을 줄 수 있는 상품을 보답해드리겠습니다.
    </div>
    <div className="body">
        <H3 className="center space">회원 정보</H3>
        <div className="user-container row">
          <Icon icon="bx:bxs-user-circle" height={128} color="black" />
          <Space width={3}/>
          <div className="column">
            <H3>회원 이름</H3>
            <H2 className="margin">jnbms</H2>
            <Space height={0.5}/>
            <H3>아이디</H3>
            <H2 className="margin">creat.bliv@gmail.com</H2>
          </div>
        </div>

        <H3 className="center space">장바구니</H3>
        {/* 테이블 말고 기존 카드 방식으로 이쁘게 꾸며서 스타일링 */}
        <table>
          <th>이미지</th>
          <th>상품명</th>
          <th>가격</th>
          <th>컬러</th>
          <th>색상</th>
          <th>사이즈</th>
          <th>수량</th>
          <th>합계</th>
          {/* 상품이 추가될때마다 tr 칼럼을 하나씩 추가해준다. */}
          <tr>
            <td></td>
            <td>Common Nike Shoe</td>
            <td>49800원</td>
            {/* 수량 조절 버튼 필요 */}
            <td>1</td>
            <td></td>
          </tr>
        </table>
            <div>토탈 금액</div>
            <input type="checkbox"/> 구매를 동의합니다.
            <button>구매하기</button>
    </div>
    </Style>
  );
}

const Style = styled.div`
  .head {
    height: 10vh;
  }
  .center {
    /* text-align: center; */
    border-block: 1px dashed;
    /* background-color: gray; */
    /* color: white; */
    padding: 2em;
    /* text-decoration: underline; */
  }
  .space {
    /* margin-block: 1.4em; */
  }
  .body {
    /* align-items: center; */
    /* margin: 1em; */
    .user-container {
      /* width: 80%; */
      /* border: 1px solid black; */
      /* height: 15vh; */
      margin: 1em;
      padding: 1em;
      box-sizing: border-box;
      align-items: center;
    }
    .margin {
      margin: .4em;
    }

    table {
      /* border: 1px solid; */
      border-collapse: collapse;

      th {
        padding: 2em;
        border-bottom: 4px solid darkgray;
      }

      td {
        /* border: 1px solid; */
        padding: 2em;
        text-align: center;
      }
    }
  }
`