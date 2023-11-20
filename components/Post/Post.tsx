import { GrLike } from "react-icons/gr";

interface Props {
  heading: string;
  description: string;
  readTime: string;
  author: string;
  data: string;
  views: number;
}

const Post = ({
  readTime,
  heading,
  description,
  author,
  data,
  views,
}: Props) => {
  return (
    <div className="p-3 lg:p-8 lg:w-3/4 bg-white text-black m-auto mt-4">
      <div className="heading flex justify-between ">
        <h3 className="text-black text-2xl lg:text-3xl  font-bold">
          {heading}
        </h3>
        <button className="w-10 h-10 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 rounded-full ">
          {<GrLike className="text-white" />}
        </button>
      </div>
      <p className="mt-3">{description}</p>

      <div className="mt-4 pb-5 flex justify-between items-center border-b-2 border-slate-200 border-opacity-60">
        <p className="font-bold lg:text-base text-sm">
          <span className=" text-sky-400">thought</span> by {author}
        </p>
        <p className="text-slate-500">
          {data} . {readTime} . {views} Views
        </p>
      </div>
    </div>
  );
};

export default Post;
