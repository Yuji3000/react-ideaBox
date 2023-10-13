import './App.css';
import Form from './Form';
import Ideas from './Ideas';
import { useState, useEffect } from 'react'
import fetchRequests from './ideaApi.js'

function App(){

  const [ideas, setIdeas] = useState([])
  
  // Make the API call within this effect
  useEffect(() => {
    //  new useEffect hook, a built-in React hook
    //  that allows you to perform side effects 
    //  in function components. It takes two arguments:
    //  a function to run and an array of dependencies.
    //  The function provided will run when the component mounts
    //  (and potentially on updates, depending on the dependencies).
    const fetchData = async () => {
      //  an asynchronous function - uses the async keyword.
      //  Asynch functions can use await to pause execution until a promise is resolved
      try {
        // Try block - It's used for error handling.
        const data = await fetchRequests.getAllIdeas();
        // fetchRequests is the actual api call, 
        // await keyword is used to pause the execution
        //  of this function until the promise returned by getAllIdeas is resolved.
        // the response is stored in the variable "data" 
        setIdeas(data);
        // "sets" the idea via setIdea func with the api response
      } catch (error) {
        console.error(error);
        // will console.log errors for debuggin
      }
    };

    fetchData();
    // fetchData triggers the api call
  }, []);
  //The useEffect hook is closed with an empty dependency array ([]).
  //  This means that the effect will run only once, specifically
  //   when the component is mounted. If there were dependencies 
  //   listed in the array, the effect would run whenever those dependencies change.

  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }
  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return(
    <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
        <Form addIdea={addIdea}/>
        <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App;

