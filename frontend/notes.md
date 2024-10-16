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
