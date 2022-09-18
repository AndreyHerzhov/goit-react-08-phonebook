import { ContactCard } from "components/RegisterForm/RegisterForm.styled"
import LoginForm from "components/LoginForm"
import { getAuthError,isAuth } from "redux/auth/auth-selector"
import { useSelector } from "react-redux"  
import { Navigate } from "react-router-dom"

const LoginPage = () => {
    const {status,message} = useSelector(getAuthError)
    const isLogin = useSelector(isAuth)

    if(isLogin) {
        return <Navigate to="/contacts"/>
    }

    return (
        <ContactCard>
            <h2>LoginPage</h2>
            <LoginForm/>
        </ContactCard>
    )
}

export default LoginPage