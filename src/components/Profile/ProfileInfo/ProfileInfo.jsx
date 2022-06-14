import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

import 'antd/dist/antd.css'
import { Row, Col } from 'antd';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <h1 className={s.login}>Please, log in to see profile info</h1>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <Row>
            <Col span={18} push={6}>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
            </Col>
            <Col span={6} pull={18}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={s.input}/>}
            </Col>
        </Row>
        // <div className={s.descriptionBlock}>
        //     <div className={s.choosePhoto}>
        //         <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
        //         <div>
        //              {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        //         </div>

        //          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        //     </div>

        //    <div className={s.profileInfo}>
        //        { editMode
        //         ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
        //         : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }
        //    </div>         
        // </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div className={s.sideInfo}>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
        {isOwner && <div><button onClick={goToEditMode} className={s.editButton}>edit</button></div>}
    </div>
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;