import React, { useState } from 'react';
import styled from 'styled-components';
//Reactの中にexportとexport default

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Label = styled.div`
    text-align: center;
`

export default function App() {
        // まず定義します。
        const [count, setCount] = useState(0);
        // useCountはReact hookの機能→コンポーネントに状態を持たせる機能
        // useから始まるものがReact hook
        // countはただの変数
        // setCountはcountに値を入れるためだけの関数
        // useState(0)の0はcountの初期値
        const countUp = () => {
        // ボタンを押して１ずつカウントアップします
        setCount(count + 1)
        }
        const count0 = () => {
        // ボタンを押して１ずつカウントアップします
        setCount(count => 0)
        }

    return(
        //jsx（Raactのライブラリ）呼び出さなくてもJavascriptでHTMLのように書ける
        <Wrapper>
            <button onClick={countUp}>
            Click me
            </button>
            <button onClick={count0}>
            Reset
            </button>
            <Label> {`${count}回`}</Label>
        </Wrapper>
    );
};

//JSの関数
//function name(引数1,引数2,etc){
    //処理内容
    //return hogehoge;
//}
//変数は以下のように示せてスコープが違う
//const hoge;：再代入ができない、オブジェクトとしての変更はできないが値は書き換えられる
//var hoge;：ファイルの中ならどこからでも使える（絶対使用禁止）
//let hoge;：定義した{}の中でしか使えない（）

//無名関数：そこでしか使わない関数
//function (){
//}
//↑これでも長いのでさらに省略したものが↓
//アロー関数
//()=>{
//}
