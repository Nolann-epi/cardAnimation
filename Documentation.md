# Creating React App with typescript

npx create-react-app app --template typescript

# Install tailwind

* npx tailwindcss init -p

* add to tailwind.config.js :
```
content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
```

* add to index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Packages (npm install)

* tailwindcss 
* postcss 
* autoprefixer 
* react-router-dom
* react-icons


# Steps of the Projects

* #1 Initialisation du projet (Jira)
* #2 Definitions des couleurs (/palette) (DA)
* #3 Mise en place NavBar
* #4 Mise en place sidebar
* #5 Mise en place languages
* #6 Mise en place des sections
* #6 Home section
* #7 About section
* #8 Projects section
* #9 Contact section
* #10 Dockerisation du projet
* #11 Hebergement du site