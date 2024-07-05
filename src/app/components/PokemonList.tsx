"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function PokemonList() {
  const { data, isLoading, isError,} = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const { data } = await axios.get<Pokemon[]>("/api/pokemons");
     return data;
    },
  });

  if(isLoading) {
    return (
    <div className="sk-chase">
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    </div>
    )
  }

  if(isError) {
    return <div>Error</div>;
  }

  return (
    <div className="w-[60%] mx-auto">
      {data?.map((data, index) => {
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
    
  );
}

export default PokemonList;
