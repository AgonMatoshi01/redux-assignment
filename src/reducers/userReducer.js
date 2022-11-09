const initialState = {
    users: [],
    selectedUsers: []
}

export default  (state = initialState, action) => {
    switch (action.type) {
        case 'ASCENDING_ORDER':
            return {...state, selectedUsers: [...state.selectedUsers].sort((a, b) => a.company?.name > b.company?.name ? 1 : -1)}
        case 'DISTENDING_ORDER':
            return {...state, selectedUsers: [...state.selectedUsers].sort((a, b) => a.company?.name > b.company?.name ? -1 : 1)}
        case 'FETCH_USERS':
            return {
                ...state, users: action.payload, selectedUsers: []
            }
        case'SELECT_USER':
            return {
                ...state, selectedUsers: [...state.selectedUsers, action.payload],
                users: [...state.users].filter(user => user?.id !== action?.payload.id)
            }
        case 'DELETE_USER':
            return {
                ...state, selectedUsers: [...state.selectedUsers].filter(user => user.id !== action.payload.id),
                users: [action.payload, ...state.users].sort((a, b) => a?.id > b?.id ? 1 : -1)
            }
        default:
            return state
    }
}
