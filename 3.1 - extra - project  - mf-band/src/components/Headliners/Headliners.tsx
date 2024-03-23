import { useState } from "react";
import { ShowList, HeadLiner } from "../../utils/data/ShowList";
import HeadlinerCard from "./HeadlinerCard";

const Headliners = () => {
  const [artists, setArtists] = useState<HeadLiner[]>(ShowList);

  return (
    <section className="max-w-screen-lg mx-auto px-10 mt-20 text-zinc-900 dark:text-zinc-200">
      <h2 className="">Headliners</h2>
      <p className="my-5">
        Experience the sonic delight from these made-up artists across 7 days
        that music fans are calling “one of the many gigs that will happen this
        year!
      </p>
      <div className="mt-4 flex w-full pb-5 snap-x overflow-x-auto gap-4">
        {artists.map((artist) => (
          <HeadlinerCard
            key={artist.artist}
            artist={artist.artist}
            date={artist.date}
            src={artist.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Headliners;
