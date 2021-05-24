import React from 'react';
import {connect} from 'react-redux';
import {submitPersonalInformation} from '../actions';

const InputData = props => {

    const getPersonalData = () => {
        const weight = parseInt(document.getElementById('weight').value);
        const height = parseInt(document.getElementById('height').value);
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const activityLevel = parseFloat(document.getElementById('activityLevel').value);
        const weigthGoal = parseInt(document.getElementById('weightGoal').value);

        if (weight && height && age && gender && activityLevel && weigthGoal ) {
            props.submitPersonalInformation({
                weight: weight,
                height: height,
                age: age,
                gender: gender, 
                activityLevel: activityLevel,
                weightGoal: weigthGoal,
            });
        } else {
            alert("completa todos los campos")
        }
    }

    return(
        <div className="calculator">
        <h2>Datos personales</h2>   

        <div className="datos-personales">

        <div>    
        <input className="input" 
            type="number" 
            name="weight"
            id="weight"
            placeholder="Peso en kilos"
            required min="0" /><br />
        
        <input className="input" 
            type="number" 
            name="height" 
            id="height" 
            placeholder="Altura en CM" 
            required min="0" /><br />
        
        <input className="input" 
            type="number" 
            name="age" 
            id="age" 
            placeholder="Edad" 
            required min="0"/><br />
        </div>

        <div>
        <select className="select" name="gender" id="gender" required >
            <option value="">-- Sexo --</option>
            <option value="man">Hombre</option>
            <option value="woman">Mujer</option>
        </select>
        <br />
        
        <select className="select" name="activitylevel" id="activityLevel" required>
            <option value="">- Nivel de actividad -</option>
            <option value="1.2">Muy sedentario</option>
            <option value="1.375">Sedentario</option>
            <option value="1.55">Moderadamente activo</option>
            <option value="1.72">Activo</option>
            <option value="1.9">Extremadamente activo</option>
        </select><br />
        
        <input type="number" className="input" id="weightGoal" placeholder="Peso objetivo" min="0" required /><br />
        
        <button className="button" id="Button" onClick={getPersonalData} >Calcular</button>
    
        </div>
        </div>
        </div>
        )
};

const mapDispatchToProps = {
    submitPersonalInformation,
}

export default connect(null, mapDispatchToProps)(InputData);
