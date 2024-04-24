import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import { Repository } from "./Repos";

export function Repo() {

  const params = useParams();
  const currentRepository = params['*'] as string;
  const queryClient = useQueryClient();

  async function handleChangeRepositoryDescription() {
    const previousRepos = queryClient.getQueryData<Repository[]>('repos');

    if (previousRepos) {
      const newRepos = previousRepos?.map(repo => {
        if (repo.full_name === currentRepository) {
          return {
            ...repo, 
            description: 'New description'
          }
        } else {
          return repo;
        }
      })
      queryClient.setQueryData('repos', newRepos);
    }
  }

return (
  <div>
    <h1>{currentRepository}</h1>
    <button onClick={handleChangeRepositoryDescription}>alter description</button>
  </div>
)
}