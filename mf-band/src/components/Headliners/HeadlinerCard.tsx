export type HeadlinerCardProps = {
  artist: string;
  date: string;
  src: string;
};

const HeadlinerCard = ({ artist, date, src }: HeadlinerCardProps) => {
  return (
    <div className="min-w-[80%] md:min-w-[40%]">
      <div
        className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <h5 className="mt-2" >{artist}</h5>
      <h6 className="mt-1 text-zinc-400" >{date}</h6>
    </div>
  );
};

export default HeadlinerCard;
