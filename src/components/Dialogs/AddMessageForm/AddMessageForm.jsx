import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { reset } from 'redux-form';

const maxLength50 = maxLengthCreator(50);

const afterSubmit = (result, dispatch) => {
    dispatch(reset('dialog-add-message-form'))
}

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                    validate={[required, maxLength50]}
                    placeholder='Enter your message'
                    name="newMessageBody" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'dialog-add-message-form',
                            onSubmitSuccess: afterSubmit })(AddMessageForm);

























