import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../actions";
import Select from "react-select";
import './Users.css'
import Modal from "./Modal";

const Users = () => {
    const [sortingType, setSortingType] = useState("asc");
    const [modal, setModal] = useState(false);
    const [toBeDeletedUser, setToBeDeletedUser] = useState(null);
    const users = useSelector(state => state.userReducer.users)
    const selectedUser = useSelector(state => state.userReducer.selectedUsers)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.fetchUsers());
    }, [dispatch]);
    console.log(users)
    // console.log(selectedUser)
    const data = users?.map(user => ({...user, label: user.name, value: user.id})
    )
    const acsendingHandle = () => {
        setSortingType("asc")
        dispatch(allActions.acsendingOrder(selectedUser))
    }
    const distendingHandle = () => {
        setSortingType("dsc")
        dispatch(allActions.distendingOrder(selectedUser))
    }
    const openModal = (user) => {
        setToBeDeletedUser(user);
        setModal(true)

    }
    const selected = selectedUser?.map(user => {
            return (
                <div key={user?.id} className="column">
                    <div className="card">
                        <button className='button' onClick={() => openModal(user)}>X</button>
                        <h3>{user?.name}</h3>
                        <p><b>Email:</b> {user?.email}</p>
                        <p><b>Address:</b>{user?.address.city},{user?.address.street}</p>
                        <p><b>Phone:</b> {user?.phone}</p>
                        <p><b>Company:</b> {user?.company.name}</p>
                        <a href={user?.website}>{user?.website}</a>
                    </div>
                </div>
            )
        }
    )
    return (
        <>
        <div>

            <Select
                className='dropdown'
                options={data}
                onChange={(e) => {
                    dispatch(allActions.selectUser(e));
                    sortingType === "asc" ? acsendingHandle() : distendingHandle()
                }}
            />
                <div className='buttons'>
                    <input type="radio" value="Acsending" name="sort" onClick={acsendingHandle}
                           defaultChecked/> Acsending
                    <input type="radio" value="Distending" name="sort" onClick={distendingHandle}/> Distending
                </div>
                <div className="row">
                    {selected}
                    {modal && <Modal user={toBeDeletedUser} modalVisible={setModal}/>}
                </div>
        </div>
        </>
    );
}

export default Users;
