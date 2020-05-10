import React from 'react';
import styled from 'styled-components';

const Button = ({label = '未定義', color ,onClick} = {}) =>{
    //propsはプロパティずの略
    return(
        <ButtonWrapper color = {color} onClick = {onClick}>{ label }</ButtonWrapper>
    );
}

export default Button;

/* style */

const ButtonWrapper = styled.button`
    min-width: 114px;
    border-radius: 5px;
    padding: 5px 10px;
    color: ${ props => props.color };

`


/* 
BookList：UpperCamel
book_list：CebabCamel
bookList：lowerCamel

const Button = (props) =>{
    propsはプロパティずの略
    return(
        <button>{ props.label }</button>
    );
}

const Button = ({label}) =>{
    return(
        <button>{ label }</button>
    );
}もOK

const Button = ({ label = '' } ={}) =>{
    return(
        <button>{ label }</button>
    );
}もOK
*/
