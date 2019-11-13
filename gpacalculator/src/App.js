import React, { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator/Calculator';
import Credit from './Components/Credit/Credit';
import Table from './Components/Table/Table';


const App = () => {

    const [gradeState, setGrade] = useState({
        totalGPA: [],
        gradeArray: [],
        creditArray: [],
        gpaValue: 0,
        actualGPA: 0,
        totalCredit:0
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
                    actualGPA: gradeState.actualGPA,
                    totalCredit: gradeState.totalCredit
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
            gradeState.totalCredit = credits;
            setGrade({
                totalGPA: gradeState.totalGPA,
                gradeArray: gradeState.gradeArray,
                creditArray: gradeState.creditArray,
                gpaValue: 0,
                actualGPA: gradeState.actualGPA,
                totalCredit: gradeState.totalCredit
            });
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
                actualGPA: gradeState.actualGPA,
                totalCredit: gradeState.totalCredit
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
                actualGPA: gradeState.actualGPA,
                totalCredit: gradeState.totalCredit
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

    let grade = gradeState.gradeArray;
    let countAP = 0;
    let countA = 0;
    let countAM = 0;
    let countBP = 0;
    let countB = 0;
    let countBM = 0;
    let countCP = 0;
    let countC = 0;
    let countD = 0;
    let countF = 0;
    for(let i = 0; i < grade.length; i++){
        if(grade[i] === 9){
            countAP++;
        }
        else if(grade[i] === 8){
            countA++;
        }
        else if(grade[i] === 7){
            countAM++;
        }
        else if(grade[i] === 6){
            countBP++;
        }
        else if(grade[i] === 5){
            countB++;
        }
        else if(grade[i] === 4){
            countBM++;
        }
        else if(grade[i] === 3){
            countCP++;
        }
        else if(grade[i] === 2){
            countC++;
        }
        else if(grade[i] === 1){
            countD++;
        }
        else if(grade[i] === 0){
            countF++;
        }
    }

    return (
        <div className="App">
            <h1>GPA Calculator</h1>
            <p><button className="button1" onClick={clear}>Clear all Lists</button></p>
            <p><button className="button1" onClick={calculator}>Calculate</button></p>
            <p>GPA: {gradeState.actualGPA.toFixed(2)}</p>
            <div className="rowC">
            <Calculator
                click={addGrade}
            />
            <Credit
                clickCred={addCredit}
            />
            <Table
                amountAP={countAP}
                amountA={countA}
                amountAM={countAM}
                amountBP={countBP}
                amountB={countB}
                amountBM={countBM}
                amountCP={countCP}
                amountC={countC}
                amountD={countD}
                amountF={countF}
                classes={gradeState.gradeArray.length}
                credit={gradeState.creditArray.length}
                credits={gradeState.totalCredit}
                list={gradeState.gradeArray.toString()}
            />
            </div>
        </div>
    );
}

export default App;
