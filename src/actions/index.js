import axios from "axios";

const fetchUsers = () => async dispatch => {
    const respons = await axios.get("https://jsonplaceholder.typicode.com/users")
    dispatch({type: 'FETCH_USERS', payload: respons.data})
};
const selectUser = (user) => async dispatch => {
    dispatch({type: 'SELECT_USER', payload: user})
}
const deleteUser = (user) => async dispatch => {
    dispatch({type: 'DELETE_USER', payload: user})
}
const acsendingOrder = () => async dispatch=>{
    dispatch({type: 'ASCENDING_ORDER'})
}
const distendingOrder = () => async dispatch=>{
    dispatch({type: 'DISTENDING_ORDER'  })
}

const allActions = {
    fetchUsers,
    selectUser,
    deleteUser,
    acsendingOrder,
    distendingOrder
}

export default allActions