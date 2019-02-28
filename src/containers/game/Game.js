import React, { Component } from 'react';
import { connect } from 'react-redux';
import { styles } from "./styles";
import { CountryRegionData } from 'react-country-region-selector';
import GameCard from '../../components/gameCard/GameCard';
import { getCities } from '../../actions/actions';
import { getTemperature } from '../../actions/actions';

import arrayCities from '../../const/sities'
import _ from 'lodash'



class Game extends Component {

    state = {
        result:null,
        showResult:false
    }
    componentDidMount() {
        console.log(arrayCities)
        // this.setState({leftCity:this.getRandomCity()});
        //   this.setState({rightCity:this.getRandomCity()});
        this.props.getCities(this.getRandomCity(), this.getRandomCity())

    }

    componentDidUpdate(prevProps) {
        console.log(this)
        if (!_.isEqual(prevProps.leftCityName, this.props.leftCityName)) {
            this.props.getTemperature(this.props.leftCityName, this.props.rightCityName)

        }
    }

    chooseCity(typeSity){
        this.setState({showResult:true})
        if (typeSity=='left'){
            if(this.props.leftTemp>this.props.rightTemp){
                this.setState({result:'won'})
            }else{
                this.setState({result:'lost'})
            }
        }
       
    }

    getRandomCity(type) {


        return arrayCities[Math.floor(Math.random() * arrayCities.length)];




    }

    render() {

        return (
            <div>
         {  !this.state.showResult?    <h1>Which city is hotter?</h1>:<h1>{this.state.result}</h1>}
                <h3 style={styles.gameScore}> Your score:{}</h3>


                <div onClick={() => this.chooseCity('left')} style={styles.gamecard} >
                
                <GameCard   
                showresult={this.state.showResult} 
                city={this.props.leftCityName}
                temp={this.props.leftTemp}
                >
                </GameCard>
                </div>
                <div onClick={() => this.chooseCity('right')} style={styles.gamecard}>
                <GameCard
                 temp={this.props.rightTemp}
                   showresult={this.state.showResult}
                    city={this.props.rightCityName}></GameCard></div>

            </div>
        )
    }
}



const mapStateToProps = state => ({
    leftCityName: state.cities.leftCityName,
    rightCityName: state.cities.rightCityName,
    cities: state.cities.cities,
    rightTemp:state.cities.rightTemp,
    leftTemp:state.cities.leftTemp,

});


const mapDispatchToProps = (dispatch) => ({
    /* getVehicleDetail: id => dispatch(getVehicleDetail(id)), */
    //  getVehicleDetail: id => dispatch(getVehicleDetail(id)),
    getCities: (leftCity, RightCity) => dispatch(getCities(leftCity, RightCity)),
    getTemperature: (leftCity, RightCity) => dispatch(getTemperature(leftCity, RightCity))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);