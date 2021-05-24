import React from 'react';
import {connect} from 'react-redux';
import InputData from '../components/InputData';
import ShowData from '../components/ShowData';
import '../assets/styles/components/Calculator.scss';

const Calculator = () => {
    return(
        <>
        <InputData />
        <ShowData />
        </>
    );
};

export default connect(null, null)(Calculator);