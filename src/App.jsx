import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  const [err, setErr] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const surpriseOptions = [
    "Who won th latest nobel piece",
    "What is the weather in london",
    "Where does pizza come from",
    "What is the capital of India",
    "What is the color of the sky"
  ]
const surpriseMe = () => {
  const randomIndex = Math.floor(Math.random() * surpriseOptions.length);
  const option = surpriseOptions[randomIndex];
  setValue(option);
}

  function handleChange(e){
    setErr(e.target.value.length === 0);
    setValue(e.target.value);
  }




  //get Response from API
  const getResponse = async () => {
   if (!value){
    setErr("please enter a question");
    return;
   }
   try {
   const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      history:chatHistory,
      message:value 
    })
      }
    
    const response = await fetch("http://localhost:8000/gemini", options);
    const data = await response.text();
    console.log(data);
    setChatHistory([...chatHistory,
       {role:"user", 
        parts:value}, 
        {role:"model", 
          parts:data}]);
    setValue("");
    
    }

   catch (error) {
    console.error("Error fetching response:", error);
    setErr("Failed to get response. Please try again.");
   }
  }

  return (
    <>
    <div className='app'>
      <section className='app-section'>
        <p>What do you want to know

        <button className='surprise-btn' onClick={surpriseMe} disabled={!chatHistory}>Surprise me</button>
        </p>
        <div className='input-container'>
          <input 
          value={value}
          type='text' placeholder='Ask me anything'
          onChange={handleChange} />


          {!err &&<button onClick={getResponse}>Ask</button>}
          {err&&<button onClick={()=>{
            setChatHistory([]);
            setValue(""); 
            setErr("");
          }}>CLear</button>}
        </div>
        {err && <p>Please enter a question</p>}
        <div className='search-result'>
          {chatHistory.map((chat, index) => (
            <div key={index}>
              <p className='answer'>{chat.role}:{chat.parts}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}

export default App
