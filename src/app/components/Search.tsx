"use client";

import React, { MouseEventHandler, useRef, useState } from "react";

export default function Search() {
  //api 데이터를 가져와서
  //input에 있는 값도 state 설정하고
  //두개 비교해서 같으면 filter

  const [searchInput, setSearchInput] = useState<string>();
  const [foundPokemon, setFoundPokemon] = useState();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFoundPokemon(searchInput);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="w-[300px] mx-auto mb-12">
        <input
          onChange={onChange}
          value={searchInput}
          className="rounded-lg w-[200px] pl-1"
          type="text"
          placeholder="포켓몬 이름을 검색하세요."
        />
        <button className="bg-blue-500 px-2 m-3 text-white rounded-md">
          검색
        </button>
      </form>
      <FoundPokemonList
        searchInput={searchInput}
        foundPokemon={foundPokemon}
        setFoundPokemon={setFoundPokemon}
      />
    </>
  );
}

const FoundPokemonList = ({searchInput, foundPokemon, setFoundPokemon}:string) => {
  return (
    <div>{searchInput}</div>
  )
};
