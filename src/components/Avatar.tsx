import { motion } from "framer-motion";

interface AvatarProps {
  imgSource: string;
  username: string;
}

const Avatar = (props: AvatarProps) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{
        opacity: 0,
      }}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          className="border-2 border-neutral rounded-full w-28"
          src={props.imgSource}
        />
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-xl">{props.username}</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Avatar;
