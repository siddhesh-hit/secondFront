import "./App.css";

import { useGetPokemonByNameQuery } from "./services/pokemon";

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  console.log(data);
  if (error) {
    return <>Some error occured</>;
  }

  if (isLoading) {
    return <>loading..</>;
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
