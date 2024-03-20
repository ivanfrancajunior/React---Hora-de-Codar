import  { useState } from "react";
import { ShowList, HeadLiner } from "../../utils/data/ShowList";
import HeadlinerCard from "./HeadlinerCard";

const Headliners = () => {
  const [showList, setShowList] = useState<HeadLiner[]>(ShowList);

  return (
    <section className="max-w-screen-lg mx-auto my-20">
      <h2 className="">Headliners</h2>
      <p className="my-5">
      Experience the sonic delight from these made-up artists across 7 days
          that music fans are calling “one of the many gigs that will happen
          this year!
      </p>
      <div className="mt-4 flex w-full pb-5 snap-x overflow-x-auto gap-4">
        {showList.map((artist) => (
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
