import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term : " "
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render(){
        return(
            <div className = 'search-bar'>
            <input onChange = {event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    
}


