import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.sass';


class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email:'',
            password: '',
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        }catch(error){
            console.log(error);
        }

        this.setState({email:'', password:''});
    }

    handleChanged = e => {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChanged={this.handleChanged} label="Email" required/>
  
                    <FormInput name="password" type="password" value={this.state.password} handleChanged={this.handleChanged} label="Password" required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}


export default SignIn;