import Avatar from "./components/Avatar";
import Button from "./components/Button";
import { DiscordInfo } from "./components/DiscordInfo";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import ThemeSwitch from "./components/ThemeSwitch";
import * as config from "../config.json";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  const isDiscordInfo = config.isLanyard;

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-10">
      {isDiscordInfo ? (
        <DiscordInfo discordUserId={config.discordUserId} />
      ) : (
        <Avatar imgSource={config.avatarImg} username={config.username} />
      )}
      <div className="flex flex-row justify-center items-center gap-4">
        <ThemeSwitch />
        <motion.a
          animate={{ opacity: 1 }}
          initial={{
            opacity: 0,
          }}
          whileHover={{ scale: 1.5 }}
          href={`https://discordapp.com/users/${config.discordUserId}`}
          target="_blank"
        >
          <FaDiscord className="w-12 h-12 mb-2" />
        </motion.a>
      </div>
      {config.buttons.map((button) => (
        <Button title={button.title} link={button.link} />
      ))}
      <SocialLinks
        githubLink={config.githubLink}
        instagramLink={config.instagramLink}
        discordLink={config.discordLink}
        linkedinLink={config.linkedInLink}
      />
      <Footer text={config.footerText} />
    </div>
  );
}

export default App;
