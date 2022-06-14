import React, { useState } from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css";
import UserSearchForm from './UserSearchForm';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

    // const [searchInput, setSearchInput] = useState('')
    // const [filter, setFilter] = useState([])
    // const [loading, setLoading] = useState(false)


    return <div>
        <div className={styles.paginator}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount} pageSize={pageSize} />
        </div>
        <UserSearchForm onFilterChanged = {props.onFilterChanged} />
        <div>
            {
                users.map(u =>
                    <ul className={styles.userList}>
                        <User
                            user={u}
                            followingInProgress={props.followingInProgress}
                            key={u.id}
                            unfollow={props.unfollow}
                            follow={props.follow}
                        />
                    </ul>
                )
            }
        </div>
    </div>
}


export default Users;