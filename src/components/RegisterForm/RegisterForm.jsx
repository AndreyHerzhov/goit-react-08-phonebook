import { initialState } from "./initialState";
import useForm from "shared/hooks/useForm";
import PropTypes from "prop-types"
import { Form, GroupWrapper, Label, Input, Button } from "./RegisterForm.styled";
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/auth-operations";

const RegisterForm = ({onSubmit}) => {
    const {state, handleChange,setState } = useForm({initialState, onSubmit})
    const {name, email, password} = state;
    const dispatch = useDispatch()

    const addUser = (e) => {
        e.preventDefault()
        // console.log(state)
        dispatch(signup(state));
        setState({...initialState})
    }

    return (
        <div>
            
        <Form action="" onSubmit={addUser}>
            <GroupWrapper>
                <Label htmlFor="">User Name:</Label>
                <Input value={name} name="name" onChange={handleChange} type="text" 
                  required
                  placeholder="User Name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                />
            </GroupWrapper>
            <GroupWrapper>
                <Label htmlFor="">Email:</Label>
                <Input value={email} name="email" onChange={handleChange} type="email" 
                //  required
                 placeholder="example@gmail.com" 
                //  pattern=""
                />
            </GroupWrapper>
            <GroupWrapper>
                <Label htmlFor="">Password:</Label>
                <Input value={password} name="password" onChange={handleChange} type="password" 
                 required
                 placeholder="Password" 
                //  pattern=""
                />
            </GroupWrapper>
            
                <Button type="submit">Register</Button>
            
        </Form>
        </div>
    )

}

export default RegisterForm;


RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
  };
