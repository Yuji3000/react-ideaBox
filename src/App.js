import './App.css';
import Form from './Form';
import Ideas from './Ideas';
import { useState } from 'react'
import data from './ideaApi.js'

function App(){
  const dummyIdeas = data

  const [ideas, setIdeas] = useState(dummyIdeas)
  
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
// export default addIdea;
