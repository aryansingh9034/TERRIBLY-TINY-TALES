interface Props {
  num: number;
  text: string;
}

const Button = ({ num, text }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="p-2 pl-4 pr-4  border-2 border-slate-400 text-slate-400 rounded-2xl">
        {num}
      </p>
      <p className="text-slate-400 text-sm">{text}</p>
    </div>
  );
};

export default Button;
