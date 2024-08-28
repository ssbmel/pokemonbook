import React from "react";

const typeClass = (typeName: string): string => {
  switch (typeName) {
    case "노말":
      return "bg-gray-500";
    case "격투":
      return "bg-orange-400";
    case "비행":
      return "bg-sky-300";
    case "독":
      return "bg-violet-600";
    case "땅":
      return "bg-amber-800";
    case "바위":
      return "bg-gray-600";
    case "벌레":
      return "bg-lime-800";
    case "고스트":
      return "bg-violet-950";
    case "강철":
      return "bg-blue-800";
    case "불꽃":
      return "bg-red-500";
    case "물":
      return "bg-blue-500";
    case "풀":
      return "bg-green-600";
    case "전기":
      return "bg-yellow-400";
    case "에스퍼":
      return "bg-pink-700";
    case "얼음":
      return "bg-blue-300";
    case "드래곤":
      return "bg-blue-950";
    case "악":
      return "bg-gray-800";
    case "페어리":
      return "bg-violet-300";
    default:
      return "bg-black-600";
  }
};

export default function PokemonType({ typeName }: { typeName: string }) {
  return <div className={`${typeClass(typeName)} px-1 rounded-sm`}>{typeName}</div>;
}
