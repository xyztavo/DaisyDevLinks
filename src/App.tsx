import Avatar from "./assets/components/Avatar";
import Button from "./assets/components/Button";
import Footer from "./assets/components/Footer";
import SocialLinks from "./assets/components/SocialLinks";
import ThemeSwitch from "./assets/components/ThemeSwitch";

function App() {
  return (
    <>
      <Avatar
        imgSource="https://media.discordapp.net/attachments/953680400616660992/1204542358583119872/pfp-small.png?ex=65d51c7d&is=65c2a77d&hm=30b1e446b03d004c8f8d700537733a1308e8b14378d1084889f920afe3799a20&=&format=webp&quality=lossless&width=670&height=671"
        username="@ustav"
      />
      <ThemeSwitch />
      <Button title="Ver meu Portfolio" link="https://ustav-folio.vercel.app" />
      <Button title="Ver meus Projetos" link="https://projects-hub-ustav.vercel.app/" />
      <Button title="Ver meu Github" link="https://github.com/gustafer" />
      <Button title="Ver código deste projeto." link="https://github.com/gustafer/DaisyDevLinks" />
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
