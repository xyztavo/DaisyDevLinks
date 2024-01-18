import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

interface SocialLinksProps {
  githubLink: string;
  instagramLink: string;
  discordLink: string;
  linkedinLink: string;
}
const SocialLinks = (props: SocialLinksProps) => {
  return (
    <div className="flex flex-row justify-center pt-9 gap-9 pb-3">
      <motion.a
        animate={{ opacity: 1 }}
        initial={{
          opacity: 0,
        }}
        whileHover={{ scale: 2 }}
        href={props.githubLink}
        target="_blank"
        className=" text-2xl"
      >
        <FaGithub />
      </motion.a>
      <motion.a
        animate={{ opacity: 1 }}
        initial={{
          opacity: 0,
        }}
        whileHover={{ scale: 2 }}
        href={props.instagramLink}
        target="_blank"
        className=" text-2xl"
      >
        <FaInstagram />
      </motion.a>
      <motion.a
        animate={{ opacity: 1 }}
        initial={{
          opacity: 0,
        }}
        whileHover={{ scale: 2 }}
        href={props.discordLink}
        target="_blank"
        className=" text-2xl"
      >
        <FaDiscord />
      </motion.a>
      <motion.a
        animate={{ opacity: 1 }}
        initial={{
          opacity: 0,
        }}
        whileHover={{ scale: 2 }}
        href={props.linkedinLink}
        target="_blank"
        className=" text-2xl"
      >
        <FaLinkedin />
      </motion.a>
    </div>
  );
};

export default SocialLinks;
