"use client"

import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

class CountrySelect extends Component {

constructor (props) {
    super(props);
    this.state = { country: ''}
};

selectCountry (val) {
    this.setState({ country: val });
}

  render() {
    const { country } = this.state;
    return (
    <div>
        <CountryDropdown
            name='country'
            value={country}
            className='border-2 border-black rounded-md m-1 px-1 py-px w-1/2'
            onChange={(val) => this.selectCountry(val)} />
    </div>
    )
  }
}

export default CountrySelect;