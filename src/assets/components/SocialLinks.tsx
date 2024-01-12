import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface SocialLinksProps {
    githubLink: string;
    instagramLink: string;
    discordLink: string; 
    linkedinLink: string;
}
const SocialLinks = (props: SocialLinksProps) => {
  return (
    <div className="flex flex-row justify-center mt-9">
        <a href={props.githubLink} target="_blank" className="p-5 text-2xl"><FaGithub /></a>
        <a href={props.instagramLink} target="_blank" className="p-5 text-2xl"><FaInstagram /></a>
        <a href={props.discordLink} target="_blank" className="p-5 text-2xl"><FaDiscord /></a>
        <a href={props.linkedinLink} target="_blank" className="p-5 text-2xl"><FaLinkedin /></a>
    </div>
  )
}

export default SocialLinks