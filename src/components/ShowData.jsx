import React from 'react';
import {connect} from 'react-redux';
import {submitResults} from '../actions';
import caloriesCalculator from "../utils/calculator.js";

const ShowData = props => {

    const getResults = () => {
        
        const results = caloriesCalculator(props.personalInformation);

        props.submitResults({
            results,
        })

        return results;
    };
    
    const {
        caloriesToMaintain, 
        caloriesObjetive1, 
        caloriesObjetive2, 
        daysForGoal
    } = getResults();

    return caloriesToMaintain === 0 ? null : (
        <section className="information" id="informationDiv">
                
            <h3>Calorias de mantenimiento:</h3>
            <span className="number">{caloriesToMaintain}</span>
    
            <h3>Para cumplir tu objetivo deberas consumir entre:</h3>
            <p><span className="number">{caloriesObjetive1}</span> y <span className="number">{caloriesObjetive2}</span> calorias.</p>
    
            <h3>Cumpliras tu objetivo en aproximadamente:</h3>
            <p><span className="number">{daysForGoal}</span> Dias.</p>
    
        </section>
        )   

};

const mapStateToProps = state => {
    return{
        personalInformation: state.personalInformation,
        results: state.results,
    }
}

const mapDispatchToProps = {
    submitResults,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowData);

