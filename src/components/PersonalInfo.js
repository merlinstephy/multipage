
import React, { Component } from 'react';

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { firstName, lastName,email,password,mobile, handleChange } = this.props;
        return(
            <>
                <h2>Enter your personal information:</h2>
                <label>
                    <input 
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="First Name"
                        onChange={handleChange('firstName')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={handleChange('lastName')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={handleChange('email')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleChange('password')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="mobile"
                        value={mobile}
                        placeholder="Mobile Number"
                        onChange={handleChange('mobile')}
                    />
                </label>

               
               




                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}

export default PersonalInfo;