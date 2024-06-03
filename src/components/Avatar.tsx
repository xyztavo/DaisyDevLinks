interface AvatarProps {
    imgSource: string;
    username: string;
}

const Avatar = (props: AvatarProps) => {
  return (
    <div className="p-6 block text-2xl">
      <img
        src={props.imgSource}
        alt="profile img"
        className="rounded-full m-auto border border-zinc-500 w-28"
      />
      <h1 className="text-center mt-2">{props.username}</h1>
    </div>
  );
};

export default Avatar;
