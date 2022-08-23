//Import the react and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
//state compenent
import NewComp from './Components/NewComp';
//lifecycle component
import LifecycleComp from './Components/LifecycleComp';
import SeasonDisplay from './SeasonDisplay';
import unsplash from './api/unsplash';
//import SearchBar from '.Components/SearchBar';
//import ImageList from '.Components/ImageList';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';

 


// 2) get a reference to the Div with ID root
//const el = document.getElementById('root');
// 3) tell React to take control of that element
//const root = ReactDOM.createRoot(el);

const root = ReactDOM.createRoot(document.getElementById('root'));

// create a component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position)=> console.log(position),
//     (err)=> console.log(err)

//   );
//   return (
//     <div className="ui container comments">
//      qwerty
//     </div>
//   );   
  
// };

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      lat: null,
      images: [] 
     }; 

    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.setState({lat: position.coords.latitude});
        console.log(position);
      } ,
      (err)=> console.log(err) 
    );
  }
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };
  

 
  render() {
   
    return(
            <div>
              <h1>{this.state.lat}</h1>

          <ApprovalCard/>
          <CommentDetails textfield="qwerty" date="10 Aug" author="hima"/>
          <p/>
          <p/>
          <NewComp />
          <p/>
          <LifecycleComp />
          <p/>
          <p/>
          <SeasonDisplay lat={this.state.lat}/>
          <p/>
          <p/>
          <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
          </div>
          

      </div>
    ); 
  }
 
}

root.render(
  
    <App />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
