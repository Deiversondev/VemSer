import React, {useState, useEffect} from 'react';
import './App.css';
import Layout from './components/Layout'
import GitHubProfile from './pages/GithubProfile'


interface IState {
  person: {
    name:string,
    url:string,
    age:number,
    note?:string
  }[]
}

interface IUser {
  user: {
      login:string,
      avatar_url:string,
      html_url: string,
      repos_url:string,
      email:string,
      create_at:string,
      followers:string
  }[]
}

function App() {

  const [person,setPerson] = useState<IState['person']>([]);
  useEffect(() =>{
    setPerson([
      {
        name:'Deiverson',
        url:'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ',
        age:21,
        note:'He is amazing'
      },{
        name:'Lionell',
        url:'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM2NTI5fQ',
        age:36,
        note:'He is amazing'
      }
    ])
  },[])

  return (
    <div className="App">
     <h1>Vem Ser Typescript</h1>
      <Layout person={person}/>
      <GitHubProfile/>
    </div>
  );
}

export default App;
