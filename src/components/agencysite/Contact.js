import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookNum from '../BookNum';
import AgencyHeader from './AgencyHeader';
import AgencyFooter from './AgencyFooter';
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="AgencyApp">
                <AgencyHeader />
                <div className="agency-contact">
                    <div className="agency-info-contact">
                        <div className="text">
                            <h1>من نحن</h1>
                            <p>٢٣ شارع المقديسي، الميرغني، مصر الجديدة، القاهرة</p>
                            <p>012 898989323</p>
                            <p><a href="mailto">info@touricoholidays.com</a></p>
                            <BookNum />
                        </div>
                        <div className="map">
                        <p>map</p>
                        </div>
                    </div>
                </div>
                <AgencyFooter />
            </div>
        );
    }
}

export default Contact;
