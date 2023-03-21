import styled from "styled-components";

export const Button = styled.button`
    width: 50%;
    padding: 24px;
    font-weight: 700;
    
    background: linear-gradient(68.15deg, #fdf1f1 16.62%, #9b9595 85.61%);
    color: #000000;
    
    border-radius: 5px;
    margin: 12px 0 84px;
    border: none;

    cursor: pointer;
    transition: filter 0.2s;

    font-size: 16px;
&:hover{
    filter: brightness(0.9);
}

`

export const Header = styled.header`
    margin: 20px 0 25px;
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const Main = styled.div`
    display: block;
    flex-direction: column;

` 

export const Input = styled.input`
    width: 50%;
    padding: 24px;
    display: flex;
    background: #e6e6e6db;
    border-radius: 5px;
    border: none;

    font-size: 16px;
`

export const Title = styled.h1`
    color: #e6e6e6db;
    font-size: 36px;
    margin-bottom:6px;`