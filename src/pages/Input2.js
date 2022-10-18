import React, {useState} from "react";

const Input2 = () => {
    //여러개의 값을 받아서 처리하기 오브젝트 형태로 넣음
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    //오브젝트에 있는 값을 빼줘야 (오브젝트 분해 기법을 이용해서)
    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value
        const id = e.target.id // 각 input의 id
        //새로 복사 (...inputs)
        setInputs({
            ...inputs,
            [id]: value
        })
    }

    return (
        <div>a
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email"  value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>

        </div>
    )
}
export default Input2;