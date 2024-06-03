import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
  link: string;
}

function Button(props: ButtonProps) {
  return (
    <div
      className="flex justify-center p-2"

    >
      <motion.a
        href={props.link} target="_blank"
        animate={{ opacity: 1 }}
        initial={{
          opacity: 0,
        }}
        whileHover={{ scale: 1.2 }}
      >
        <button className="btn h-14 w-80 backdrop-blur border border-neutral text-base">
          {props.title}
        </button>
      </motion.a>
    </div>
  );
}

export default Button;
