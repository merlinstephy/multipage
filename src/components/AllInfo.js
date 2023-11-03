import React, { Component } from 'react';

class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { firstName, lastName,email,password,mobile, address, city, pincode } = this.props;
        console.log(
            {firstName},
            {lastName},
            {email},
            {password},
            {mobile},
        
            {address},
            {city},
            {pincode},




        );
        return(
            <>
                <h2>Here is the information you entered:</h2>
                First Name: <b>{firstName}</b><br />
                Last Name: <b>{lastName}</b><br />
                Email : <b>{email}</b><br />
                Password: <b>{password}</b><br />
                Mobile: <b>{mobile}</b><br />
            
                Address: <b>{address}</b><br />
                City: <b>{city}</b><br />
                Pincode: <b>{pincode}</b><br />
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
            </>
        );
    }
}

export default AllInfo;