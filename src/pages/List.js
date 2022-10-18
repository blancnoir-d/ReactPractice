import React from "react";

const UserList = () => {

    //사람수에 맞게 tr를 만들 수 있게
    const User = ({userData}) => {
        return(
            <tr>
                <td>{userData.name}</td>
                <td>{userData.email}</td>
            </tr>
        )
    }

    //DB에서 받아왔다고 가정
    const users = [
        {email: 'ryu@gmail.com', name: "유재석"},
        {email: 'kim@gmail.com', name: "김종국"},
        {email: 'ha@gmail.com', name: "하하"},
        {email: 'song@gmail.com', name: "송지효"}

    ];

    return(
        <table>
            <thead>
            <tr>
                <th>이름</th>
                <th>이메일</th>
            </tr>
            </thead>
            <tbody>
            {/*map함수를 통해서 한건 한건을 User라는 자식 컴포넌트에게 user라는 프로퍼티 이름으로 하나씩 던져주는 */}
            {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
}
export default UserList;