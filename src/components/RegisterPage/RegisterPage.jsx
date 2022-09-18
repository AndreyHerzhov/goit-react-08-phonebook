import RegisterForm from "components/RegisterForm"
import { useSelector } from "react-redux"
import { getAuthError, isAuth } from "redux/auth/auth-selector"
import { ContactCard } from "components/RegisterForm/RegisterForm.styled"
import { Navigate } from "react-router-dom"

const RegisterPage = () => {
    const {status,message} = useSelector(getAuthError)
    const isLogin = useSelector(isAuth)

    if(isLogin) {
        return <Navigate to="/contacts"/>
    }

    return (
        <ContactCard>
            <h2>Register Page</h2>
            <RegisterForm />
            {status  && <p>{message}</p>}
        </ContactCard>
    )
}

export default RegisterPage