import Avatar from "./assets/components/Avatar";
import Button from "./assets/components/Button";
import Footer from "./assets/components/Footer";
import SocialLinks from "./assets/components/SocialLinks";
import ThemeSwitch from "./assets/components/ThemeSwitch";

function App() {
  return (
    <>
      <Avatar
        imgSource="https://avatars.githubusercontent.com/u/89479041?v=4"
        username="@ustav"
      />
      <ThemeSwitch />
      <Button title="My Pokemon Game" link="https://pokedoro.vercel.app/" />
      <Button title="My Projects" link="https://uprojects.vercel.app/" />
      <Button title="Github" link="https://github.com/gustafer" />
      <Button title="See this projects code" link="https://github.com/gustafer/DaisyDevLinks" />
      <SocialLinks
        githubLink="https://github.com/gustafer"
        instagramLink="https://github.com/gustafer"
        discordLink="https://discord.com/users/801073563368947742"
        linkedinLink="https://linkedin.com"
      />
      <Footer text="Feito com ♥ , ustav" />
    </>
  );
}

export default App;
