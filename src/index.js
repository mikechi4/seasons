import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // initialize state. can use constructor function as well, but babel will compile this same as using super
    state = {lat:null, errorMessage: ""};

    // lifecyle method that's good for data loading - this only gets called once
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // setState is the only way to update state of your component which (when updated) will re-render your component and any child ones as well
            position =>  this.setState({lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message})
        );
    }

    // helper method to handle what we will return in the component. good practice to limit return statements in render method
    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
    
        return <Spinner message = 'Please accept location request'/>
    }

    render() {
        return (
            <div className="index border">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));