import styled from "@emotion/styled";
import Popup from "../components/popup";
import { RootProvider, rootStore } from "../store/RootStore";

const GlobalStyle = styled.div`
`

export default function layout({children}: any) {
    return (
        <RootProvider value={rootStore}>
            {/* <GlobalStyle> */}
                {children}
            {/* </GlobalStyle> */}
            {/* <Popup/> */}
        </RootProvider>
    );
}

