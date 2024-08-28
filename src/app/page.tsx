import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Search from "./components/Search";

export default function Home() {
  return (
    <div>
      <Header/>
      <PokemonList />
    </div>
  );
}
