import { initialState } from "./initialState";
import useForm from "shared/hooks/useForm";
import PropTypes from "prop-types"
import { Form, GroupWrapper, Label, Input, Button } from "./LoginForm.styled";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";

const LoginForm = ({onSubmit}) => {
    const {state, handleChange, setState } = useForm({initialState, onSubmit})
    const { email, password } = state;
    const dispatch = useDispatch()

    const onLogin = (e) => {
        e.preventDefault()
        // console.log(state)
        dispatch(login(state));
        setState({...initialState})
    }

    return (
        <div>
            
        <Form action="" onSubmit={onLogin}>
             
            <GroupWrapper>
                <Label htmlFor="">Email:</Label>
                <Input value={email} name="email" onChange={handleChange} type="email" 
                 
                 placeholder="example@gmail.com" 
                 
                />
            </GroupWrapper>
            <GroupWrapper>
                <Label htmlFor="">Password:</Label>
                <Input value={password} name="password" onChange={handleChange} type="password" 
                 required
                 placeholder="Password" 
                 
                />
            </GroupWrapper>
            
                <Button type="submit">Register</Button>
            
        </Form>
        </div>
    )

}

export default LoginForm;


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
  };
