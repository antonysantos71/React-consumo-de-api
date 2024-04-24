import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export type Repository = {
  full_name: string;
  description: string;
  html_url: string;
}

export function Repos() {

  const { data: repositores, isFetching } = useQuery<Repository[]>(
    'repos', async () => {
      const response = await axios.get('https://api.github.com/users/antonysantos71/repos')

      return response.data;
    }, {
      staleTime: 1000 * 60,
    })

  return (
    <main>
      {isFetching && <p>Loading...</p>}
      {repositores?.map(repo => {
        return (
          <div>
            <Link to={`repos/${repo.full_name}`}>
              {repo.full_name}
            </Link>
            <p>{repo.description}</p>
          </div>
        )
      })}      
    </main>
  )
}