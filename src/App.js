import { useState } from 'react';
import './App.css';

function App() {
  const dummyIdeas = [
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
    ]
  const [ideas, setIdeas] = useState(dummyIdeas);
 
 // Logic and other needed functions will go here

 return (
  <main className='App'>
      <h1>IdeaBox</h1>
      <p>Hi!</p>

  </main>
 )
}

export default App;