import './index.css'
import React, {useState} from 'react';


const Quiz = () => {

//properties
  const [showFinalResults, setFinalResults ] = useState(true);
  const [score, setScore] = useState (5);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "Which type of art do you prefer to see in a museum?",
      options: [
        { id: 0, text: "Modern art", isCorrect: false, etiqueta:"tate" },
        { id: 1, text: "Impressionist paintings", isCorrect: false,  etiqueta:"v&a"},
        { id: 2, text: "Portraits", isCorrect: false,  etiqueta:"portrait"},
        { id: 3, text: "Classical art", isCorrect: false , etiqueta:"portrait"},
      ],
    },
    
    {
      text: "How do you like to experience a museum visit?",
      options: [
        { id: 0, text: "With a guided tour", isCorrect: true, etiqueta:"portrait" },
        { id: 1, text: "Alone with your thoughts", isCorrect: false, etiqueta:"v&a"},
        { id: 2, text: "With a group of friends", isCorrect:false, etiqueta:"tate" },
        { id: 3, text: "With interactive exhibits", isCorrect: false, etiqueta:"serpentine" },
      ],
    },
    {
      text: "How do you feel about museums with large crowds?",
      options: [
        { id: 0, text: "The more the merrier!", isCorrect: false, etiqueta:"v&a" },
        { id: 1, text: "I prefer to avoid crowds", isCorrect: true, etiqueta:"portrait" },
        { id: 2, text: "It depends on my mood", isCorrect: false, etiqueta:"serpentine" },
        { id: 3, text: "I like the energy of a busy museum", isCorrect: false, etiqueta:"tate" },
      ],
    },
    {
      text: "What do you consider to be the most important aspect of a museum visit?",
      options: [
        { id: 0, text: "The quality of the art", isCorrect: false, etiqueta:"tate" },
        { id: 1, text: "The history behind the pieces", isCorrect: true, etiqueta:"v&a" },
        { id: 2, text: "The ambiance and atmosphere of the museum", isCorrect: false, etiqueta:"portrait"},
        { id: 3, text: "The educational opportunities", isCorrect: false, etiqueta:"serpentine"},
      ],
    },
    {
      text: "How do you like to spend your time in a museum?",
      options: [
        { id: 0, text: "Admiring the art in silence", isCorrect: false, etiqueta:"portrait"},
        { id: 1, text: "Engaging with the exhibits through interactive displays", isCorrect: true, etiqueta:"serpentine" },
        { id: 2, text: "Relaxing with a coffee and a book in the museum café", isCorrect: false, etiqueta:"tate" },
        { id: 3, text: "Talking with friends and family", isCorrect: false, etiqueta:"v&a" },
      ],
    },
     {
      text: "How often do you visit museums?",
      options: [
        { id: 0, text: "As often as possible", isCorrect: false, etiqueta:"tate" },
        { id: 1, text: "Rarely", isCorrect: true, etiqueta:"serpentine" },
        { id: 2, text: "Occasionally", isCorrect: false, etiqueta:"portrait" },
        { id: 3, text: "Only on special occasions", isCorrect: false, etiqueta:"v&a" },
      ],
    },
    {
      text: "Do you prefer museums with a single focus or those with a wide variety of exhibits?",
      options: [
        { id: 0, text: "Single focus", isCorrect: false, etiqueta:"serpentine"},
        { id: 1, text: "Wide variety", isCorrect: true, etiqueta:"tate"},
        { id: 2, text: "It depends on the museum and my mood", isCorrect: false, etiqueta:"portrait"},
      ],
    },
    {
      text: "What type of museums do you prefer?",
      options: [
        { id: 0, text: "Traditional museums", isCorrect: false, etiqueta:"v&a"},
        { id: 1, text: "Modern museums", isCorrect: true, etiqueta:"tate" },
        { id: 2, text: "Museums with a mix of traditional and modern elements", isCorrect: false, etiqueta:"portrait" },
      ],
    },
    {
      text: "What's your preferred method for navigating a museum?",
      options: [
        { id: 0, text: "With a map or guidebook", isCorrect: false, etiqueta:"tate"},
        { id: 1, text: "By following my intuition and curiosity", isCorrect: true, etiqueta:"serpentine" },
        { id: 2, text: "With a pre-planned itinerary", isCorrect: false, etiqueta:"v&a"},
        { id: 3, text: "By joining a tour", isCorrect: false, etiqueta:"portrait" },
      ],
    },
    {
      text: "Do you like to research the art and artists before visiting a museum?",
      options: [
        { id: 0, text: "Absolutely!", isCorrect: false, etiqueta:"tate" },
        { id: 1, text: "No, I prefer to be surprised", isCorrect: true, etiqueta:"serpentine"},
        { id: 2, text: "Sometimes, it depends on my mood", isCorrect: false, etiqueta:"portrait" },
      ],
    }
  ];
   const recomanacio = [
    {titol:"National Portrait Gallery", 
    label:"portrait",
    id:1,
    }, 
    {titol:"Tate Modern", 
    label:"tate",
    id:2
    }, 
    {titol:"Serpentine Gallery", 
    label:"serpentine",
    id:3
    }, 
    {titol:"V&A Museum", 
    label:"v&a",
    id:4
    }
  ]; 
  const [obras, setObras] = useState([]);
  const [recomanats, setRecomanants] = useState([]);

 const occurrences = obras.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc;
  }, []);

/*   const [maxEl, setMaxEl] = useState;*/
  const portait = occurrences.portait;
  const tate = occurrences.tate;
/*   const classics = occurrences.classics;
  const drama = occurrences.drama;
  const catala = occurrences.catala;
  const castella = occurrences.castella;   */
  
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


  
/*   const segundoLabel = mostRepeatedLabel(obrasFiltro);
 */


  const respuestaFinal = recomanacio.filter((item) => item.label == primerLabel)
/*   const respuestaFinal2 = recomanacio.filter((item) => item.label == segundoLabel)
 */    
 console.log (respuestaFinal)

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
        <h2>{questions[currentQuestion].text}</h2> <br />
        <ul>{questions[currentQuestion].options.map((option) => {
              return (
                <li key={option.id}  >
                 <button style={{ cursor: "grab" }} className='button--answer--trans' onClick={() => optionClicked(option.isCorrect, option.etiqueta, option.id)}> {option.text}</button>
                </li>
              );
            })}
        </ul>
     
    </div>) : (
      /* 3. Final results*/
    <div className='final-results'>
      <h3>El museo ideal para ti és:</h3>
{/*        <p>label:  {primerLabel}</p>
 */} 
      <ul>{respuestaFinal.map((reco, index) => {
              return (
                <li className='result-text' key={reco.id} >
                  {reco.titol}
                </li>
              );
            })}
      </ul>
      
      < br />
      < br />< br />< br />

      <button className='restartquiz--buton' onClick={() => restartQuiz()}>RESTART</button>
    </div>) }
    </div>


    );
}

export default Quiz;



