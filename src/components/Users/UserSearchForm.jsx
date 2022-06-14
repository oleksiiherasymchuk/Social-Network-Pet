import React, { useEffect } from 'react';
import styles from "./users.module.css";

import { Formik, Form, Field, ErrorMessage } from 'formik';

const UserSearchForm = ({onFilterChanged}) => {
    

    const submit = (values, { setSubmitting }) => {
        const filter = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        onFilterChanged(filter)
        onFilterChanged(values)
        setSubmitting(false)
    }
    return <div className={styles.input}>
        <Formik
            initialValues={{ term: "", friend: null }}
            // validate={values => {
            //     const errors = {};
                // if (!values.email) {
                //     errors.email = 'Required';
                // } else if (
                //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                // ) {
                //     errors.email = 'Invalid email address';
                // }
            //     return errors;
            // }}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="term" />

                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Followed</option>
                        <option value="false">Unfollowed</option>
                    </Field>
                    <button className={styles.buttonFilter} type="submit" disabled={isSubmitting}>
                        Search
                    </button>
                </Form>
            )}
        </Formik>
        {/* <input
                type="text"
                placeholder='Search For User...'
                className={styles.inputTag}
                onChange={() => { }}
            />
            <select name="searchForm" id="searchForm">
                <option value="null" disabled>Sort By</option>
                <option value="true">Followed</option>
                <option value="false">Unfollowed</option>
            </select>
            <button
                className={styles.button}
                onClick={() => { }}
            >Search</button> */}
    </div>
}

export default UserSearchForm;