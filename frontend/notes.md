# commands

- npm run dev
- npm install axios --save
- npm install --save-dev @types/axios
- npm install dotenv --save

=========================================
up2: - analysing the onPortfolioCreate function definition and how the array is funcitoning with our ListPortfolio and CardPortfolio

TS: 13 - Arrays

onClick: (e: SyntheticEvent) => void;

===========================================

note: onPortfolioCreate funciton does not need to be propdrilled from root component down. It can be just defined and used inside AddPortfolio if its not used anywhere else, only define it inside the root if the function is shared throughout the app.

=============================================

# tailwind install:

## commands

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## config

- set your tailwind.config.js
- create a main.css with the below and link it to your main.tsx

@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;
