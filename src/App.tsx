import Avatar from "./components/Avatar";
import Button from "./components/Button";
import { DiscordInfo } from "./components/DiscordInfo";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import ThemeSwitch from "./components/ThemeSwitch";
import * as config from "../config.json"

function App() {
  const isDiscordInfo = config.isLanyard;

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-10">
      {isDiscordInfo ? (
        <DiscordInfo discordUserId={config.discordUserId} />
      ) : (
        <Avatar
          imgSource={config.avatarImg}
          username={config.username}
        />
      )}

      <ThemeSwitch />
      {config.buttons.map((button) => <Button title={button.title} link={button.link}/>)}
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
