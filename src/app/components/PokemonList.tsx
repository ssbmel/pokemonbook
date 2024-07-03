"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function PokemonList() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/pokemons");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-[60%] mx-auto">
      {pokemonData?.map((data, index) => {
        return (
          <div
            key={index}
            className="inline-grid border w-36 p-5 m-2 rounded-md custom-shadow"
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
  );
}

export default PokemonList;
