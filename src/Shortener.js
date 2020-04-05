import React from 'react';

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
        // this.state.value === '' ? alert("Enter a URL") :

        fetch(`https://api.shrtco.de/v2/shorten?url=${this.state.value}`)
        .then(response => response.json())
        .then(url => this.setState( {shortinfo: url.result } ));
        // .then(json => console.log(json.result.short_link)); actually works
        // .then(short_link => this.setState({ value: short_link }));
        
    
    
      event.preventDefault();

    //   console.log(this.json)
    // }
}

    
  
    render() {
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input placeholder="  URL Shortener" class={this.state.inputclass} type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input class="inputfield" type="submit" value="Submit" />
             </form>
         <p>{this.state.shortinfo.short_link}</p>
        </div>
        
      );
    }
  }
  

  export default Shortener;