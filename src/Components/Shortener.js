import React from 'react';
import { trackPromise } from 'react-promise-tracker';
import LoadingSpinerComponent from './spinner';
class Shortener extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                    value: '',
                    shortinfo: '',
                    inputclass: "urlfield"
                    }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        this.state.value === '' ? this.setState( {inputclass: "alertinput" } ) :
        trackPromise(
        fetch(`https://api.shrtco.de/v2/shorten?url=${this.state.value}`)
        .then(response => response.json())
        .then(url => this.setState( {shortinfo: url.result } ))
        );
    
    
      event.preventDefault();
}

    
  
    render() {
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input placeholder="  URL Shortener" className={this.state.inputclass} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="inputfield" type="submit" value="Submit" />
             </form>
          <div>
          <p></p>
          <LoadingSpinerComponent />
            {this.state.shortinfo.short_link}</div>
          </div>
        
      );
    }
  }
  

  export default Shortener;