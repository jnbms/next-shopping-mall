import styled from "@emotion/styled";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";

export default function DynamicImage({loader, src}) {

    const [ratio, setRatio]: any = useState(1);
    const [Height, setHeight] = useState(0);
    
    useEffect(()=> {
        window.addEventListener('resize',() => {
            var currentWith = (document.getElementById('resizeImage') as HTMLImageElement)?.width
            if(ratio != 1)
            setHeight(currentWith * ratio)
        })
    })
    return(
                <Image
                    id="resizeImage"
                    loader={loader}
                    src={src}
                    // layout="fill"
                    width="100%"
                    height={Height}
                    objectFit="contain"
                    alt=""
                    onLoad={({target}) => {
                        var {naturalHeight, naturalWidth, width} = target as HTMLImageElement
                        var value = naturalHeight / naturalWidth
                        setHeight(value * width)
                        setRatio(value)
                    }}
                    />
    );
}

const Style = styled.div<{height?}>`
    .container {
        position: relative;
    }
`