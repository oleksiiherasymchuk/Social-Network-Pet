import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
import s from "./Login.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div className={s.loginForm}>
           <form onSubmit={handleSubmit}>
               <div className={s.email}>
                   {createField("Email", "email", [required], Input)}
               </div>
                <div className={s.password}>
                    {createField("Password", "password", [required], Input, {type: "password"})}
                </div>
                <div className={s.checkbox}>
                    {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}
                </div>
            

            { captchaUrl && <img src={captchaUrl} />}
            { captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {}) }


            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div className={s.loginButton}>
                <button >Login</button>
            </div>
        </form> 
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div className={s.login}>
        <h1 className={s.loginText}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);