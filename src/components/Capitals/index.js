import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeCapital: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapital: event.target.value})
  }

  getCounty = () => {
    const {activeCapital} = this.state

    const eachCountry = countryAndCapitalsList.find(
      eachValue => eachValue.id === activeCapital,
    )
    return eachCountry.country
  }

  render() {
    const {activeCapital} = this.state
    const activeCountry = this.getCounty(activeCapital)
    return (
      <div className="app-container">
        <div className="capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="content-container">
            <select
              className="select-container"
              onChange={this.onChangeCapital}
              value={activeCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph">is capital of witch country?</p>
          </div>
          <p className="description">{activeCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
