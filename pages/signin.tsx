import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { H1, H2, H3, P2, P3 } from '../components/atoms/Text';
import Space from '../styles/Space';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import axios from 'axios';

export default function Login() {

    const {email} = useRouter().query
    
    function sign() {
        var form = (document.getElementsByTagName('form')[0] as HTMLFormElement)
        var username = (document.getElementById('username') as HTMLInputElement)
        var pass = (document.getElementsByClassName('pass') as HTMLCollectionOf<HTMLInputElement>)
        var alerts = (document.getElementsByClassName('alert') as HTMLCollectionOf<HTMLElement>)

        if(username.value.length <= 2 || username.value.length >= 12){
            alerts[0].innerText = "닉네임은 3 글자 이상, 12 글자 미만으로 작성해주세요."
        } else {
            alerts[0].innerText = ""

            if(pass[0].value != pass[1].value) {
                alerts[1].innerText = "비밀번호가 일치하지 않습니다."
            } else if(pass[0].value.length == 0) {
                alerts[1].innerText = "비밀번호를 입력해주세요."
            } else {
                alerts[1].innerText = ""
                if(confirm('가입하시겠습니까?')){
                    axios.post(process.env.BACKEND_URL + `/users?id=${email}&pw=${pass[0].value}&username=${username.value}`)
                    .then(result => {
                        if(result) {
                            alert('회원가입이 완료되었습니다.')
                            Router.push('/login')
                        } else { 
                            alert('오류 1')
                        }
                    })
                }
            }
        }
    }

    return (
        <Style>
            <Link href="/" passHref>
                <Icon icon="ep:circle-close" className="close-icon" height={36}/>
            </Link>

        <form className="loginform">
            <H1 className='title'>NIKE</H1>
            <input id='username' placeholder='username' name='username'/>
            <input
                className='input' placeholder='ID' name='ID'
                disabled style={{backgroundColor:"lightgray"}}
                value={email}/>
            <P3 className='alert'></P3>
            <input className='pass' type="password" placeholder='비밀번호' name='password'/>
            <input className='pass' type="password" placeholder='비밀번호 확인' name='passwordConfirm'/>
            <P3 className='alert'></P3>
            <button className='button' type='button' onClick={sign}>회원가입</button>
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
