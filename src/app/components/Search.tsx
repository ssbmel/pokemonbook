"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Search() {
  const [searchInput, setSearchInput] = useState<string>();
  const [foundPokemon, setFoundPokemon] = useState();

  const { data } = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const { data } = await axios.get<Pokemon[]>("/api/pokemons");
     return data;
    },
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pokemonName = data?.filter((d)=>d.korean_name === searchInput);
    setFoundPokemon(pokemonName);

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
        foundPokemon={foundPokemon}
      />
    </>
  );
}

const FoundPokemonList = ({foundPokemon}) => {
  return (
    <div className="w-[60%] mx-auto mb-10">
      {foundPokemon?.map((data, index) => {
        return (
          <div
            key={index}
            className="inline-grid border w-36 p-5 m-2 rounded-md custom-shadow bg-white"
          >
            <Link href={`/pokemonDetails/${data.id}`}>
              <p>Num.{data.id}</p>
              <Image
                src={data.sprites.front_default}
                alt="img"
                width={120}
                height={120}
                className="mx-auto"
              />
              <p>{data.korean_name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  )
};
