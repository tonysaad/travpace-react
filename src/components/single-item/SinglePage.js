import React, { Component } from 'react';
import axios from "axios";
import Item from './Item';

class SinglePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: '',
            liked: false
        };
    }
    toggleLike = ()=>{
        this.setState({liked: !this.state.liked})
    }
    componentDidMount() {
        axios.get(`http://thebackendcrew.com:8004/deals-and-packages/${this.props.params.id}`).then(response => {
            this.setState({
                info: response.data
            })
        });
    }
    render() {
        if (this.state.info === '') {
            return null;
        }
        return (
            <div className="single-page">
                <Item info={this.state.info}  liked={this.state.liked} toggleLike={this.toggleLike}/>
            </div>
        );
    }
}
export default SinglePage;
