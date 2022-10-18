import React from "react";
import style from "../css/Home.module.css";
import Item from "./Item"

//함수형, 클래스형 컴포넌트가 있다
//함수형
function Home(){
    return(
        <div>
            <h1>Home 화면 입니다</h1>
            <div className={style.box}/>
            <br />

            <div className={style.box}>Hello</div>
            <Item title={"서울"}/>
            <Item title={"부산"}/>
            <Item title={"대전"}/>
        </div>

    )
}
export default Home;

// //클래스형
// import React, {Component} from "react";
// class Home extends Component{
//     render(){
//         return<h1>Home 화면 입니다</h1>;
//     }
// }
// export default Home