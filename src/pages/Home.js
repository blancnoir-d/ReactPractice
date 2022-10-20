import React from "react";
import style from "../css/Home.module.css";
import Item from "./Item"
import CustomButton from"./Button"
import {Link} from "react-router-dom";

//mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
            <br />
            <Link to={"/test"}>
                <CustomButton size={"md"} variant={"error"}>테스트 시작하기</CustomButton>
            </Link>


            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

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