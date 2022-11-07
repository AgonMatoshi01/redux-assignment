import React from "react";
import allActions from "../actions";
import {useDispatch} from "react-redux";
import './Modal.css'

const Modal = ({modalVisible, user}) => {
    const dispatch = useDispatch();

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            modalVisible(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    Do you want to delete user: {user?.name}
                </div>
                <div className="footer">
                    <button onClick={() => {
                        dispatch(allActions.deleteUser(user))
                        modalVisible(false)
                    }
                    }>Yes
                    </button>
                    <button onClick={() => modalVisible(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;

