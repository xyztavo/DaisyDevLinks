import Avatar from "./assets/components/Avatar";
import Button from "./assets/components/Button";
import Footer from "./assets/components/Footer";
import SocialLinks from "./assets/components/SocialLinks";
import ThemeSwitch from "./assets/components/ThemeSwitch";

function App() {
  return (
    <>
      <Avatar
        imgSource="https://gustafer.github.io/devlinks/assets/avatar.png"
        username="@ustav"
      />
      <ThemeSwitch />
      <Button title="Ver meu Portfolio" link="https://discord.com" />
      <Button title="Ver meu github" link="https://discord.com" />
      <Button title="Ver código deste projeto." link="https://discord.com" />
      <Button title="Conheça a Rocketseat" link="https://discord.com" />
      <SocialLinks
        githubLink="https://github.com"
        instagramLink="https://instagram.com"
        discordLink="https://discord.com"
        linkedinLink="https://linkedin.com"
      />
      <Footer text="Feito com ♥ , ustav" />
    </>
  );
}

export default App;
