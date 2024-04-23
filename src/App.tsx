import './App.css'
import { useFetch } from './hooks/useFetch';

type Repository = {
  full_name: string;
  description: string;
  html_url: string;
}

export default function App() {

  const { data: repositores, isFetching } = 
    useFetch<Repository[]>('users/antonysantos71/repos');
  
  return (
    <main>
      {isFetching && <p>Loading...</p>}
      {repositores?.map(repo => {
        return (
          <div>
            <h1>{repo.full_name}</h1>
            <p>{repo.description}</p>
          </div>
        )
      })}      
    </main>
  )
}