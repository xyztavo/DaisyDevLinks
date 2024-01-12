interface ButtonProps {
  title: string;
  link: string;
}

function Button(props: ButtonProps) {
  return (
    <div className="flex justify-center p-2">
      <a href={props.link} target="_blank">
        <button className="btn h-14 w-80 bg-opacity-5 backdrop-blur border border-zinc-500 text-base">
          {props.title}
        </button>
      </a>
    </div>
  );
}

export default Button;
