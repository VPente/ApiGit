import { useRef, useEffect, useState } from 'react'
import { Card } from '../components/Card';
import './style.css'
export function Home() {
  const [user, setUser] = useState({name:'', avatar:''})
  const [userName,setUserName] = useState(null)
  const inputRef = useRef(null)

  
  function addUser (){
    setUserName(inputRef.current.value);   
}

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setUserName(inputRef.current.value);
    }
  };  //
 

useEffect(()=> {
   fetch(`https://api.github.com/users/${userName}`)
   .then(response => response.json())
   .then(data => setUser({
      name:data.name,
      avatar:data.avatar_url,
   }))
   console.log(inputRef)
}, [userName]);
return (
   <div className='main'> 
      <div className="header">
        <header>
          <h1 className='title'>Usuários Presentes</h1>
          <input
          ref={inputRef} 
          type="text" 
          placeholder='Digite seu usuario GitHub...'
          onKeyDown={handleKeyDown}/>
          <button onClick={addUser}> Adicionar </button>
        </header>
      </div>
    
      <div className='mid'>
          <Card name={user.name}avatar = {user.avatar}/>
      </div>
     
  </div> 
  )
}


