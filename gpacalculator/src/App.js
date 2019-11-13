import React, { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator/Calculator';
import Credit from './Components/Credit/Credit';

const App = () => {

    const [gradeState, setGrade] = useState({
        totalGPA: [],
        gradeArray: [],
        creditArray: [],
        gpaValue: 0,
        actualGPA: 0
    })

    const calculator = () => {
        gradeState.totalGPA = [];
        let grade = gradeState.gradeArray;
        let credit = gradeState.creditArray;
        if(grade.length === credit.length){
            for(let i = 0; i<grade.length; i++){
                gradeState.gpaValue = grade[i] * credit[i];
                let gpa = gradeState.gpaValue;
                gradeState.totalGPA.push(gpa);
                setGrade({
                    totalGPA: gradeState.totalGPA,
                    gradeArray: gradeState.gradeArray,
                    creditArray: gradeState.creditArray,
                    gpaValue: 0,
                    actualGPA: 0
                });
            }
            let total = 0;
            let credits = 0;
            for(let i = 0; i < gradeState.totalGPA.length; i++){
                total = total + gradeState.totalGPA[i];
            }
            for(let i = 0; i < credit.length; i++){
                credits = credits + credit[i];
            }
            gradeState.actualGPA = total/credits;
            console.log("GPA: ", gradeState.actualGPA);
        }
        else{
            alert("Number of classes is not equal to the number of credits selected")
        }
    }

    const addCredit = (event) => {
        let cred = gradeState.creditArray.length;
        let grad = gradeState.gradeArray.length;
        if(cred > grad){
            alert("Need to add a grade first");
        }
        else{
            gradeState.creditArray.push(parseFloat(event.target.value));
            setGrade({
                totalGPA: gradeState.totalGPA,
                gradeArray: gradeState.gradeArray,
                creditArray: gradeState.creditArray,
                gpaValue: gradeState.gpaValue,
                actualGPA: gradeState.actualGPA
            });
        }

    }

    const addGrade = (event) => {
        let cred = gradeState.creditArray.length;
        let grad = gradeState.gradeArray.length;
        if(grad > cred){
            alert("Need to add a credit first");
        }
        else{
            gradeState.gradeArray.push(parseFloat(event.target.value));
            setGrade({
                totalGPA: gradeState.totalGPA,
                gradeArray: gradeState.gradeArray,
                creditArray: gradeState.creditArray,
                gpaValue: gradeState.gpaValue,
                actualGPA: gradeState.actualGPA
            });
        }

    }

    const clear = () => {
        setGrade({
            totalGPA: [],
            gradeArray: [],
            creditArray: [],
            gpaValue: 0,
            actualGPA: 0
        });
    }

    return (
        <div className="App">
            <h1>GPA Calculator</h1>
            <p>Number of classes: {gradeState.gradeArray.length}</p>
            <p>Number of Credits: {gradeState.creditArray.length}</p>
            <p><button className="button1" onClick={clear}>Clear all Lists</button></p>
            <p><button className="button1" onClick={calculator}>Calculate</button></p>
            <p>GPA: {gradeState.actualGPA}</p>
            <div className="rowC">
            <Calculator
                click={addGrade}
            />
            <Credit
                clickCred={addCredit}
            />
            </div>
        </div>
    );
}

export default App;
