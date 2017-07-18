import React, { Component } from 'react';
import axios from "axios";
import Item from './Item';

class SinglePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ''
        };
    }
    componentDidMount() {
        axios.get(`http://thebackendcrew.com:8888/deals-and-packages/${this.props.params.id}`).then(response => {
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
                <Item info={this.state.info} />
            </div>
        );
    }
}
export default SinglePage;
