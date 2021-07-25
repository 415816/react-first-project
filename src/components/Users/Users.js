const Users = (props) => {
    let users = props.state.map( u => { <User
        id={u.id}
        name={u.name}
        city={u.city}
        country={u.country}
        following={u.following}
        discription={u.discription}/>}

    )
    return(
        <div>
            <div></div>
        </div>
    )
};

const User = () => {
    
}

export default Users;