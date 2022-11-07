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
const acsendingOrder = (users) => async dispatch=>{
    dispatch({type: 'ASCENDING_ORDER' , payload: users})
}
const distendingOrder = (users) => async dispatch=>{
    dispatch({type: 'DISTENDING_ORDER' , payload: users})
}

const allActions = {
    fetchUsers,
    selectUser,
    deleteUser,
    acsendingOrder,
    distendingOrder
}

export default allActions