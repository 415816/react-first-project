let stateInit = {
    users: [
        // {id: 1, imgSrc: "https://avotar.ru/avatar/multyashki/150/1.jpg", name: "Ivan", city: "Moscow", country: "Russian", following: true, discription: "I am tired"},
        // {id: 2, imgSrc: "https://shutniki.club/wp-content/uploads/2019/12/623672327.png", name: "Nady", city: "Podolsk", country: "Russian", following: true, discription: "I am very tired"},
        // {id: 3, imgSrc: "https://avatarfiles.alphacoders.com/103/thumb-1030.jpg", name: "Sabin", city: "Minsk", country: "Belarus", following: false, discription: "I am too tired"},
        // {id: 4, imgSrc: "https://avotar.ru/avatar/strashnye/150/23.gif", name: "Sara", city: "Brooklin", country: "USA", following: false, discription: "I am fine"},
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