import React, { Component } from 'react';
import    './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      Cityes: [],
      newCity:[]
    };
 
  }
 
    // https://www.metaweather.com/api/location/search/?query=london

  componentDidMount() {
    axios.get("https://www.metaweather.com/api/location/search/?query=Tehr%C4%81n")
    .then(response => {
      console.log(response);
      const Cityes = response.data;
      this.setState({ Cityes });
    
      
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
    
  }
  
callApi(){
 
  axios.get('https://www.metaweather.com/api/location/search/?query=london')
  .then(response =>{
    const Cityes = response.data;
    this.setState({ Cityes });
  })

}
  changCity(){
    
    this.setState({Cityes:this.state.newCity});
    this.callApi(this.state.newCity)
}
  render() {
 
    return (
      <div>
      
           <div className="box">

                <div className="pic">
                <ul>
                  { this.state.Cityes.map(City => <li>{City.title}</li>)}
                  { this.state.Cityes.map(City => <li>{City.latt_long}</li>)}
                  { this.state.Cityes.map(City => <li>{City.location_type}</li>)}
                 </ul>
                </div>
               
             <button onClick={()=>this.changCity()}> Submit</button>
       
           </div>
                  
          
      </div>
    );
  }
}

 
