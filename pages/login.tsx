import styled from '@emotion/styled';
import React from 'react';
import Input from '../components/atoms/Input';
import { H1, H2, H3, P2 } from '../components/atoms/Text';
import Space from '../styles/Space';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import axios from 'axios';
import Router from 'next/router';
import { useStore } from '../store/RootStore';

export default function Login() {
    const {User: {userState, setUserState}} = useStore();

    function login() {
        var id = (document.getElementById('ID') as HTMLInputElement).value
        var password = (document.getElementById('password') as HTMLInputElement).value

        if(id.length == 0 || password.length == 0) {
            alert('회원 정보를 모두 입력하지 않았습니다.')
        } else {
            axios
            .get(process.env.BACKEND_URL + `/users/check?id=${id}&pw=${password}`)
            .then(result => {
                if(result.data){
                    var {id, username} = result.data
                    setUserState({id, username, isLogin: true})
                    alert(username + '님 반갑습니다.')
                    Router.push('/')
                    
                } else {
                    alert('회원 정보가 일치하지 않습니다.')
                }
            })
        }
    }
    return (
    <Style>

        <Link href="/" passHref>
            <Icon icon="ep:circle-close" className="close-icon" height={36}/>
        </Link>

        <form className="loginform">
            <H1 className='title'>NIKE</H1>
            <Space height={1}/>
            <input className='input' placeholder='ID' name='ID' id='ID'/>
            <Space height={1}/>
            <input placeholder='password' type="password" name='password' id='password'/>
            <Space height={1}/>
            {/* <input placeholder='Nickname'/> */}
            <button className='button' type='button' onClick={login}>LOG IN</button>
            <Space height={0.4}/>
            <Link href="/email" passHref>
                <button type='button' className='second'>SIGN IN</button>
            </Link>
            <div className='row checker'>
                <input className='check' type="checkbox" name='checker'/>
                <div>로그인 상태 기억하기</div>
            </div>
            <div className='row coments center'>
                <u>아이디 찾기</u>
                <div>/</div>
                <u>비밀번호 찾기</u>
            </div>
        </form>
    </Style>
);
}

const Style = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
    .center {
        align-items: center;
        justify-content: center;
    }
    .coments {
        margin-block: 1.2em;
        gap: 0.4em;
    }
    .close-icon {
            position: absolute;
            cursor: pointer;
            right: 2em;
            top: 2em;
        }

    .loginform {

        align-items: center;
        justify-content: center;
        width: 25em;
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
            /* margin-right: 2em; */
            /* &::placeholder { */
                padding-left: 1em;
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
    }
`
