import { useQuery } from "@tanstack/react-query";
import { fetchMembers } from "../../../../queryFn/trotQueries";
import { Top7Singer } from "../../../../userTypes/trotQueriesType";
import Top7Card from "./Top7Card";

export default function Top7() {
  const { data: members } = useQuery<Top7Singer[]>({
    queryKey: ["top7Videos"],
    queryFn: fetchMembers,
  });

  return (
    <>
      <p className=" sm:hidden text-3xl font-bold mb-4 px-4">Top 7</p>
      {members && (
        <ul
          className="grid lg:rounded-none rounded-2xl gap-2 p-4 shadow-2xl  m-auto
                      grid-cols-8 grid-rows-c3 lg:grid-cols-c8 lg:grid-rows-c2 "
        >
          {members.map((member: Top7Singer, index: number) => (
            <Top7Card member={member} key={index} />
          ))}
        </ul>
      )}
    </>
  );
}
