import styled from '@emotion/styled';
import React, { useState } from 'react';
import { H1, H2, H3, P2, P3 } from '../components/atoms/Text';
import Space from '../styles/Space';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router';

export default function Login() {

    const [certificationNumber, setCertificationNumber] = useState(0);
    const sendCertification = () => {
        var email = (document.getElementById('email') as HTMLInputElement).value;
        async function send() {
            var randomNumber = Math.floor(Math.random() *(8999)) + 1000;
            setCertificationNumber(randomNumber); // 1000 ~ 9999
            await axios.post(`/api/certification?email=${email}&number=${randomNumber}`)
            .then(() => alert('인증번호가 전송되었습니다.'))
        }

        if(email.length == 0) {
            alert('이메일을 입력해주세요.')
        } else if(certificationNumber != 0) {
            if(confirm('이미 인증 번호를 전송했습니다. 다시 보내시겠습니까?')){
                send()
            }
        } else {
            send()
        }
    }
    const matchCertification = () => {
        var email = (document.getElementById('email') as HTMLInputElement).value;
        var password = Number((document.getElementById('password') as HTMLInputElement).value);
        if(certificationNumber == 0) {
            alert('인증 요청을 하지 않았습니다.')
        } else if(certificationNumber == password) {
            alert('인증되었습니다.')
            Router.push({
                pathname: '/signin',
                query: {email: email},
            },'/signin' //마스크 URL
            )
        } else {
            alert('인증번호가 일치하지 않습니다.')
        }
    }

    return (
    <Style>
            <Link href="/" passHref>
                <Icon icon="ep:circle-close" className="close-icon" height={36}/>
            </Link>
        
        <form className="loginform" onSubmit={event => event.preventDefault()}>
            <H1 className='title'>NIKE</H1>

            <p className=''>구글이나 회원이신 다른 이메일을 입력해주세요.
            해당 메일로 인증 보내를 보내드립니다.</p>
            <input placeholder='email' id='email'/>
            <button className='second' onClick={sendCertification}>인증번호 발송</button>
            <input className='input' type="number" placeholder='password' id='password'/>
            <button className='button' onClick={matchCertification}>인증하기</button>
            <P2>이미 아이디가 있으신가요?</P2>
            <div className='login'>LOG IN</div>
        </form>
    </Style>
    );
}

const Style = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
    .close-icon {
            position: absolute;
            cursor: pointer;
            right: 2em;
            top: 2em;
        }
    .loginform {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25em;
        gap: 1em;
        .alert {
            color: red;
        }
        .title {
            text-align: center;
        }
        .checker {
            /* border: 1px solid; */
            align-items: center;
            /* justify-content: space-around; */
            width: 100%;
            margin-block: 1em;
            .check {
                /* margin-block: 2em; */
                height: 2em;
                width: 10%;
                margin-right: 2em;
                /* border-radius: 50%; */
            }
            div {
                /* width: 80%; */
            }
        }
        input {
            border: 1px solid;
            width: 100%;
            height: 4em;
            background-color: #f0efef;
            box-sizing: border-box;
            padding-left: 1em;
            /* margin-right: 2em; */
            /* &::placeholder { */
                /* padding-left: 1em; */
            /* } */
            /* margin-left: 2em; */
        }
        button {
            cursor: pointer;
           
        }
        .button {
            background-color: black;
            color: white;
            height: 4em;
            border: none;
            width:100%;
            &:hover {
                opacity: 0.8;
            }
        }
        .second {
            height: 4em;
            width:100%;
            background-color: none;
            border: 1px solid;
            color: 1px;
            &:hover {
                background-color: lightgray;
            }
        }
        .login {

            text-decoration: underline;
        }
    }
`
