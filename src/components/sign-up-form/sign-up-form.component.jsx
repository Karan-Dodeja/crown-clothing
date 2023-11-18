import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formField, setFormField] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formField;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormField({...formField, [name]: value});
    }

    return (
        <div>
            <h1>Sign Up Form</h1>

            <form onSubmit={() => { }}>

                <label>Display Name</label>

                <input type="text" name="displayName" required onChange={handleChange} value={displayName} />

                <label>Email</label>

                <input type="email" name="email" required onChange={handleChange} value={email} />

                <label>Password</label>

                <input type="password" name="password" required onChange={handleChange} value={password} />

                <label>Confirm Password</label>

                <input type="password" name="confirmPassword" required onChange={handleChange} value={confirmPassword} />

                <button type="submit">Sign Up</button>

            </form>
        </div>
    )
}

export default SignUpForm;