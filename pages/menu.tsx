import styled from '@emotion/styled';
import { H1 } from '../components/atoms/Text';
import Space from '../styles/Space';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function menu() {
  return (<Style>
        <div className="center">
            <Icon
                icon="ep:circle-close"
                className="close-icon"
                height={36}
                onClick={() => window.history.back()}
            />
            <Link href="/" passHref>
            <H1>DESINGER</H1>
            </Link>
            <Link href="/products" passHref>
                <H1>PRODUCTS</H1>
            </Link>

            <H1>EVENTS</H1>
            <Space height={4}/>

            <Link href="/login" passHref>
                <button className='primary'>LOG IN</button>
            </Link>
            <Link href='/email' passHref><button className='primary'>SIGN IN</button></Link>
        </div>
    </Style>);
}

const Style = styled.div`
        background-color: black;
        color: white;
        display: grid;
        place-items: center;

        /* position: absolute; */
        height: 100vh;

        /* left: 0; */
        /* top: 0; */
    .close-icon {
        cursor: pointer;
    }
    .center {
        align-items: center;
        .close-icon {
            position: absolute;
            right: 2em;
            top: 2em;
        }
        H1 {
            margin-block: 0.4em;
            &:hover {
              text-decoration: underline;
              transform: scale(1.1);
            }
        }
        button {
            /* box-sizing: content-box; */
            border: 1px solid;
            padding: 1em;
            width: 12em;
            margin: 0.4em;

            &.primary {
                background-color: black;
                color: white;
                &:hover {
                    background-color: white;
                    color: black;
                }
            }
        }
    }
`