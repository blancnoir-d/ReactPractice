import React, {useState} from "react";

const Login = () =>{
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");

    const LoginFunc = (e) => {
        e.preventDefault();
        if(!id){
            return alert("ID를 입력하세요.")
        }else if(!pass){
            return alert("Password를 입력하세요.")
        }
    }


    return(
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            <input type="text" value={pass} onChange={(e) => setPass(e.target.value)}/>
        </div>

    )
}