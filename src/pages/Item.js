import React from "react";

function Item(props){

    return(
        <div>
            <h2>{props.title}</h2>
            <button>이동하기</button>
        </div>

    )
}
export default Item;