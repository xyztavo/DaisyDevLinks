<h1 align="center"> DaisyDevlinks </h1>

<p align="center">
This is a project inspired on <a href="https://github.com/maykbrito/devlinks" target="_blank">DevLinks</a>, it uses daisyUi and can be easily modified only using <a href="./src/App.tsx" target="_blank">App.tsx</a>.  <br/>
</p>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p align="center">
  <img alt="License" src="./src/assets/images/readme-banner.png">
</p>

<br>

## 🚀 Technologies

This project was developed using the following technologies:

- [React](https://react.dev/), [TailwindCSS](https://tailwindcss.com/) and [DaisyUi](https://daisyui.com/docs/themes/)

- [Typescript](https://www.typescriptlang.org/)

- [Git](https://git-scm.com/) e [Github](https://github.com/)

- [Figma](https://www.figma.com/)

- [React Icons](https://react-icons.github.io/react-icons/)

## 💻 Project

### This project is basically a link tree that can be easily modified and customized.

### [See how it actually is live](https://gustafer.github.io/DaisyDevLinks/)

## 💾 Installation

<h3 align="center"> Clone this rep :</h3>

```
 git clone https://github.com/gustafer/DaisyDevLinks.git
```

<h3 align="center"> Open your folder :</h3>

```
cd DaisyDevlinks
```

<h3 align="center"> Install dependencies :</h3>

```
npm install
```

If you have <strong>[yarn](https://chore-update--yarnpkg.netlify.app/en/docs/install)</strong> installed, use this instead :

```
yarn
```

 <h3 align="center">Run your IDE and development server:</h3>
 
  For visual studio :
```
code .
```
 Dev server using npm :
```
npm dev
```
Or using yarn :
```
yarn dev
```

### Create your own fork ([Guide to create a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)) then you are good to go 🎉 !

## 🔖 Usage

### Its as simple as going to [App.tsx](./src/App.tsx) and changing everything you need

example:

```
  username="@ustav"
  imgSource="https://gustafer.github.io/devlinks/assets/avatar.png"
```

- you can also change the icons at [SocialLinks.tsx](./src/assets/components/SocialLinks.tsx) using [React Icons](https://react-icons.github.io/react-icons/)

## 🎨 Customization

### DaisyUi has plenty of themes to choose from! Choose them at:

### - [DaisyUi Themes](https://daisyui.com/docs/themes/)

- All you gotta do to use those is actually changing the themes for the ones you want (one for dark mode, another for light mode) in [tailwind.config.js](./tailwind.config.js), and making sure you also change the value for the [theme switch](./src/assets/components/ThemeSwitch.tsx).

### [[ . . . ] or even making a theme youself !!](https://daisyui.com/theme-generator/)

### You can also customize anything you want using [tailwindcss](https://tailwindcss.com/) on the [components folder](./src/assets/components/).

## 📖 License

This project has [MIT](./MIT-LICENSE.txt) license.

---
