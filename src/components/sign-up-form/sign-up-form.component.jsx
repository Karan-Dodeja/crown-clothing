import { useState } from "react";

import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formField, setFormField] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formField;

    const resetFormFields = () => {
        setFormField(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password does not match!");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Email Already In Use!");
            } else {
                alert("Error Creating User!")
            }
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });
    }

    return (
        <div className="sign-up-container">
            <h2>Dont hav an account?</h2>
            
            <span>Sign Up Form</span>

            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type="text" name="displayName" required onChange={handleChange} value={displayName} />

                <FormInput label="Email" type="email" name="email" required onChange={handleChange} value={email} />

                <FormInput label="Password" type="password" name="password" required onChange={handleChange} value={password} />

                <FormInput label="Confirm Password" type="password" name="confirmPassword" required onChange={handleChange} value={confirmPassword} />

                <Button type="submit">Sign Up</Button>

            </form>
        </div>
    )
}

export default SignUpForm;