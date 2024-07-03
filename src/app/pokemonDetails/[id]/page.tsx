import Image from "next/image";
import Link from "next/link";

async function DetailPage({ params }: { params: { id: string } }) {
  const response = await fetch(
    `http://localhost:3000/api/pokemons/${params.id}`
  );
  const data: Pokemon = await response.json();

  return (
    <>
      <div className="rounded-md p-5 w-[40%] mx-auto">
        <span className="m-3">Num.{data.id}</span>
        <span className="text-3xl">{data.korean_name}</span>
        <div className="flex mx-auto w-[400px]">
          <Image
            src={data.sprites.front_default}
            alt="img"
            width={300}
            height={300}
            className="mx-auto"
            priority
          />
        </div>
        <div>키 : {data.height / 10}m</div>
        <div>무게 : {data.weight / 10}kg</div>
        <div>
          타입 :{" "}
          {data.types.map((t) => (
            <div key={data.id} className="border w-auto inline-grid m-1 px-1">
              {t.type.korean_name}
            </div>
          ))}
        </div>
        <div>
          특성 :{" "}
          {data.abilities.map((a) => (
            <div key={data.id} className="border w-auto inline-grid m-1 px-1">
              {a.ability.korean_name}
            </div>
          ))}
        </div>
        <div>
          기술 :{" "}
          {data.moves.map((m) => (
            <div key={data.id} className="w-15 inline-grid m-1">
              {m.move.korean_name}
            </div>
          ))}
        </div>
        <br />
        <button className="border p-2">
          <Link href={"/"}>뒤로가기</Link>
        </button>
      </div>
    </>
  );
}

export default DetailPage;
