import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}>
                            Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>Username: <b>{user.name}</b></div>
                    <div>User id:{user.id}</div>
                </span>
                <span>
                    <div>
                        {user.aboutMe ? user.aboutMe : "No About User Information"}
                    </div>
                    <div>
                        {user.status ? user.status : "No User Status"}
                    </div>
                    <div>
                        {user.lookinfForAJobDescription ? user.lookinfForAJobDescription : "User is not looking for a job"}
                    </div>
                </span>
            </span>
        </div>)
}

export default User;