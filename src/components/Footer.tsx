import { motion } from "framer-motion";

interface FooterProps {
    text: string;
}
const Footer = (props: FooterProps) => {
  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{
      opacity: 0,
    }}
    className="flex justify-center text-1xl mt-10 pb-10">{props.text}</motion.div>
  )
}

export default Footer