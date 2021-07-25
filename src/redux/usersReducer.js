let stateInit = {
    users: [
        {id: 1, name: "Ivan", city: "Moscow", country: "Russian", following: true, discription: "I am tired"},
        {id: 2, name: "Nady", city: "Podolsk", country: "Russian", following: true, discription: "I am very tired"},
        {id: 3, name: "Sabin", city: "Minsk", country: "Belarus", following: false, discription: "I am too tired"},
        {id: 4, name: "Sara", city: "Brooklin", country: "USA", following: false, discription: "I am fine"},
    ]
};

const usersReducer = (state = stateInit, action) => {
    switch (action.type) {
        case 'follow': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, following: true}
                    }
                    return u;
                })
            }
        }
        case 'unfollow': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, following: false}
                    }
                    return u;
                })
            }
        }
        case 'setUsers': {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}


export default usersReducer;