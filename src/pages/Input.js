import React, {useState} from "react";

const Input = () => {
    const [txtValue, setTextValue] = useState("");

    const onChange = (e) => { //onChange가 일어날때 마다 이벤트를(e)가져올 건데
        setTextValue(e.target.value)
    }

    return(
        <div>
           <input type="text" value={txtValue} onChange={onChange}/>
            <br />
            <p>{txtValue}</p>

        </div>
    );
}
export default Input;