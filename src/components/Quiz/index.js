import './index.css'
import React, {useState} from 'react';


const Quiz = () => {

//properties
  const [showFinalResults, setFinalResults ] = useState(true);
  const [score, setScore] = useState (5);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false, etiqueta:"amor" },
        { id: 1, text: "Boston", isCorrect: false,  etiqueta:"drama", etiqueta2:"amor" },
        { id: 2, text: "Santa Fe", isCorrect: false,  etiqueta:"humor", etiqueta2:"classics" },
        { id: 3, text: "Washington DC", isCorrect: true , etiqueta:"classics", etiqueta2:"drama"},
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true, etiqueta:"amor"},
        { id: 1, text: "1776", isCorrect: false, etiqueta:"drama"},
        { id: 2, text: "1776", isCorrect: false, etiqueta:"humor" },
        { id: 3, text: "1774", isCorrect: false, etiqueta:"classics" },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true, etiqueta:"amor" },
        { id: 1, text: "Paul Revere", isCorrect: false, etiqueta:"drama"},
        { id: 2, text: "Thomas Jefferson", isCorrect:false, etiqueta:"humor" },
        { id: 3, text: "Benjamin Franklin", isCorrect: false, etiqueta:"classics" },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false, etiqueta:"amor" , etiqueta2:"catala" },
        { id: 1, text: "Alaska", isCorrect: true, etiqueta:"drama", etiqueta2:"catala" },
        { id: 2, text: "Texas", isCorrect: false, etiqueta:"humor", etiqueta2:"classics" },
        { id: 3, text: "Montana", isCorrect: false, etiqueta:"classics", etiqueta2:"castella" },
      ],
    },
    
  ];
   const recomanacio = [
    {titol:"obra 1", 
    label:"amor",
    id:1,
    }, 
    {titol:"obra 2", 
    label:"humor",
    id:2
    }, 
    {titol:"obra 3", 
    label: "drama",
    id:3
    }, 
    {titol:"obra 4", 
    label:"classics",
    id:4
    }, 
    {titol:"obra 5", 
    label:"catala",
    id:5,
    }, 
    {titol:"obra 6", 
    label:"castella",
    id:6
    }, 
    {titol:"obra 7", 
    label:"amor",
    id:7
    }, 
    {titol:"obra 8", 
    label:"drama",
    id:8
    }, 
    
    {titol:"obra 9", 
    label:"amor",
    id:9,
    }, 
    {titol:"obra 10", 
    label:"humor",
    id:10
    }, 
    {titol:"obra 11", 
    label: "drama",
    id:11
    }, 
    {titol:"obra 12", 
    label:"classics",
    id:12,
    }, 
    {titol:"obra 13", 
    label:"catala",
    id:13,
    }, 
    {titol:"obra 14", 
    label:["castella"],
    id:14
    }, 
    {titol:"obra 15", 
    label:"amor",
    id:15
    }, 
    {titol:"obra 16", 
    label:"drama",
    id:16
    }, 
  ]; 
  const [obras, setObras] = useState([]);
  const [recomanats, setRecomanants] = useState([]);

 const occurrences = obras.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc;
  }, []);

/*   const [maxEl, setMaxEl] = useState;
 */
  const amor = occurrences.amor;
  const humor = occurrences.humor;
  const classics = occurrences.classics;
  const drama = occurrences.drama;
  const catala = occurrences.catala;
  const castella = occurrences.castella;  
  
  //Helper function
  const optionClicked = (isCorrect, etiqueta, id) => {
     setObras([...obras, questions[currentQuestion].options[id].etiqueta] )
    if(isCorrect){
      setScore(score + 1);
    }
    if(currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinalResults(false)
    }
  }

  //function label with more occurencies
 
const mostRepeatedLabel = (arr) =>
  arr.reduce(
    (a,b,i,arr)=>
     (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),
    null)

  const primerLabel = mostRepeatedLabel(obras);

  const obrasFiltro = obras.filter((item) => item !== primerLabel)
  
  const segundoLabel = mostRepeatedLabel(obrasFiltro);



  const respuestaFinal = recomanacio.filter((item) => item.label == primerLabel)
/*   const respuestaFinal2 = recomanacio.filter((item) => item.label == segundoLabel)
 */    


// funcion reset arraty to start quiz again

const restartQuiz = () => {
    obras.length = 0;
    setFinalResults(true);
    setCurrentQuestion(0)
 }

    return(
       /*  <>
        <p className="quiz--text">soy quiz</p>
        <a href="/">Home</a>
        </>  */

    <div className="resoults--background">

        {/* <h1>Quiz</h1>

        <h2>Current Score: {score}</h2>
        <h3>Primer label: {primerLabel}</h3> */}
        {/* <h3>Segundo label: {segundoLabel}</h3>
        <h3>Amor: {amor}</h3>
        <h3>Humor: {humor}</h3>
        <h3>Drama: {drama}</h3>
        <h3>Classics: {classics}</h3>
        <h3>Catala: {catala}</h3>
        <h3>Castella: {castella}</h3>  */}
        {showFinalResults ? (/* 3. Question Card */
        <div className='question-card'>
        <h4>Question {currentQuestion + 1} / {questions.length}</h4>
        <h2>label: {questions[currentQuestion].text}</h2> <br />
        <ul>{questions[currentQuestion].options.map((option) => {
              return (
                <li key={option.id} style={{ cursor: "grab" }} >
                 <button className='button--answer--trans' onClick={() => optionClicked(option.isCorrect, option.etiqueta, option.id)}> {option.text}</button>
                </li>
              );
            })}
        </ul>
     
    </div>) : (
      /* 3. Final results*/
    <div className='final-results'>
      <h1>El museo ideal para ti és:</h1>
      <p>{primerLabel}</p>
      <ul>{respuestaFinal.map((reco, index) => {
        if(index==1){
              return (
                <li key={reco.id} >
                  {reco.titol}
                </li>
              );
            }
            })}
      </ul>
      
      < br />

      <button className='restartquiz--buton' onClick={() => restartQuiz()}>Restart quizz</button>
    </div>) }
    </div>


    );
}

export default Quiz;



