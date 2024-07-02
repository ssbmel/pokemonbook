"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/pokemons");
      setPokemonData(data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div className="w-[70%] mx-auto">
      
     {pokemonData.map((data) =>
      (<div
      key={data.id}
      className="inline-grid border w-36 p-5 m-2 rounded-md">
        <Link href={'/pokemonDetails'}>
        <p>Num.{data.id}</p>
        <Image src={data.sprites.front_default} alt="img" width={120} height={120} className="mx-auto"/>
        <p>{data.korean_name}</p>
        </Link>
      </div>)
     )}
     
    </div>
    );
}

export default PokemonList;
