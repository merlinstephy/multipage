import React, { Component } from 'react';

class JobDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { address, city, pincode, handleChange } = this.props;
        return(
            <>
                <h2>Enter your Address information:</h2>
                <label>
                    <input 
                        type="text"
                        name="address"
                        value={address}
                        onChange={handleChange('address')}
                        placeholder="Address"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="city"
                        value={city}
                        onChange={handleChange('city')}
                        placeholder="City"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="pincode"
                        value={pincode}
                        onChange={handleChange('pincode')}
                        placeholder="Pincode"
                    />
                </label>
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}

export default JobDetails;