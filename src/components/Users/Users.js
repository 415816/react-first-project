// let Users = (props) => {
//     let users = props.users.map( u => { <User
//         id={u.id}
//         name={u.name}
//         city={u.city}
//         country={u.country}
//         following={u.following}
//         discription={u.discription}/>}
//     )
//     return(
//         <div>
//             <div>{users}</div>
//         </div>
//     )
// };

const Users = (props) => {
    return <div>
        {
            props.users.map(u =>
                <div>
                    <div>
                        <img src={u.imgSrc}/>
                        {u.following ?
                            <button onClick={u.dispatch({type: 'unfollow', id: u.id})}>Unfollow</button> :
                            <button onClick={u.dispatch({type: 'follow', id: u.id})}>Follow</button>}
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.country}</div>
                        <div>{u.city}</div>
                        <div>{u.discription}</div>
                    </div>
                </div>
            )
        }
    </div>
}
export default Users;