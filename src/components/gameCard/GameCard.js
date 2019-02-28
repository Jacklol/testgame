import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { connect } from 'react-redux';
import {getTemperature} from '../../actions/actions'

class GameCard extends Component {

    render() {
        const { city, showresult,temp} = this.props;
        return (
            <Card   hoverable={true} style={{ width: 300 }}>
                <div>
                    <div> {city.name} </div>
                    
                 {   showresult?<div> {temp}</div>:null}
                    
                </div>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    leftCity: state.cities.leftCity,
    rightCity: state.cities.rightCity
});

const mapDispatchToProps = (dispatch) => ({
    getTemperature:(sity)=>dispatch(getTemperature(sity))
    // getCities: (leftCity, RightCity) => dispatch(getCities(leftCity, RightCity))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);
