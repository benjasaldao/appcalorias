import React from 'react';
import '../assets/styles/components/Calculator.scss';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInformation: {
                weight: 0,
                height: 0,
                age: 0,
                gender: "",
                activityLevel: "",
                weightGoal: ""
            },
            results: {
                BMR: 0, 
                caloriesToMaintain: 0,
                caloriesObjetive1: 0,
                caloriesObjetive2: 0,
                daysForGoal: 0
            }
        }
    }

    getPersonalInformation() {
        this.state.personalInformation.weight = document.getElementById("weight").value;
        this.state.personalInformation.height = document.getElementById("height").value;
        this.state.personalInformation.age = document.getElementById("age").value;
        this.state.personalInformation.gender = document.getElementById("gender").value;
        this.state.personalInformation.activityLevel = document.getElementById("activityLevel").value;
        this.state.personalInformation.weightGoal = document.getElementById("weightGoal").value;

        this.validateInformation();
    }

    validateInformation() {
        const {weight, height, age, gender, activityLevel, weightGoal} = this.state.personalInformation;

        if (weight === ""||height === ""||age === ""||gender === ""||activityLevel === ""||weightGoal === "") {
            this.uncompleteForms();
        } else {
            this.getResults();
        }
    }

    uncompleteForms() {
        alert("completa todos los formularios");
    }

    getResults() {
        const {weight, height, age, gender, activityLevel, weightGoal} = this.state.personalInformation;
        
        if (gender === "man") {
            this.state.results.BMR = 66 + (13.7 * weight) + (5 * height) - (6.75 * age);
        } else if (gender === "woman") {
            this.state.results.BMR = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        } else {
            alert("Completa el formulario de genero!");
        } 

        this.state.results.caloriesToMaintain = Math.round(this.state.results.BMR * parseFloat(activityLevel));

        this.state.results.caloriesObjetive1 = Math.round(this.state.results.caloriesToMaintain * 0.2);
        this.state.results.caloriesObjetive2 = Math.round(this.state.results.caloriesToMaintain * 0.25);

        if (weightGoal < weight) {
            this.state.results.caloriesObjetive1 = this.state.results.caloriesToMaintain - this.state.results.caloriesObjetive1;
            this.state.results.caloriesObjetive2 = this.state.results.caloriesToMaintain - this.state.results.caloriesObjetive2;
        } else if (weightGoal > weight) {
            this.state.results.caloriesObjetive1 = this.state.results.caloriesToMaintain + this.state.results.caloriesObjetive1;
            this.state.results.caloriesObjetive2 = this.state.results.caloriesToMaintain + this.state.results.caloriesObjetive2;
        } else {

        }

        this.state.results.daysForGoal = (weight - weightGoal) * 2 * 7;

        if (this.state.results.daysForGoal < 0) {
            this.state.results.daysForGoal = this.state.results.daysForGoal + this.state.results.daysForGoal * -2; 
        }   

        this.cleanInputs();
        this.setState({
            results: {
                caloriesToMaintain: this.state.results.caloriesToMaintain,
                caloriesObjetive1: this.state.results.caloriesObjetive1,
                caloriesObjetive2: this.state.results.caloriesObjetive2,
                daysForGoal: this.state.results.daysForGoal
            }
        })

        this.showInformation();
    }

    showInformation() {
        const informationDiv = document.getElementById("informationDiv");

        informationDiv.style = "display:block;"
    }

    cleanInputs() {
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("age").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("activityLevel").value = "";
        document.getElementById("weightGoal").value = "";
    }


    render() {
        const {caloriesObjetive1, caloriesObjetive2, daysForGoal, caloriesToMaintain} = this.state.results;
        return(
        <div className="calculator">
        <h2>Datos personales</h2>   

        <div className="datos-personales">

        <div>    
        <input className="input" type="number" name="weight" id="weight" placeholder="Peso en kilos" required min="0" /><br />
        <input className="input" type="number" name="height" id="height" placeholder="Altura en CM" required min="0" /><br />
        <input className="input" type="number" name="age" id="age" placeholder="Edad" required min="0"/><br />
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
        
        <button className="boton" id="Button" onClick={this.getPersonalInformation.bind(this)}>Calcular</button>
    
        </div>
        </div>
        <section className="information" id="informationDiv">
            
            <h3>Calorias de mantenimiento:</h3>
            <span className="number">{caloriesToMaintain}</span>

            <h3>Para cumplir tu objetivo deberas consumir entre:</h3>
            <p><span className="number">{caloriesObjetive1}</span> y <span className="number">{caloriesObjetive2}</span> calorias.</p>

            <h3>Cumpliras tu objetivo en aproximadamente:</h3>
            <p><span className="number">{daysForGoal}</span> Dias.</p>

        </section>
        </div>
        )
    }
}  

export default Calculator;