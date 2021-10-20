# About Project

In this web application, you can find all Pokémons that are in the Pokédex by [The Pokémon Company](https://www.pokemon.com/).

On the Home page, you can find the full list of Pokémons. Clicking on each of them shows the detail page of the Pokémon. Here you can find the description, types, stats, evolution chain, and much more. 

Don't just judge me for the design and colors, please, I did the best I can. :relieved::blush:

# Tech stack

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) adding [TypeScript](https://github.com/Microsoft/TypeScript).

The following libraries were also used:

- [i18next](https://www.i18next.com/) for internationalization.

- [React query](https://react-query.tanstack.com/) to data synchronization.

- [React redux](https://react-redux.js.org/) an official React bindings for Redux.

- [Redux](https://redux.js.org/) a predictable State container.

- [Redux thunk](https://github.com/reduxjs/redux-thunk) a thunk middleware for Redux.

- [Styled components](https://styled-components.com/) for styles.

[PokéApi](https://pokeapi.co/) was used to obtain all the Pokémons data.

[Web Core Vitals](https://web.dev/i18n/es/vitals/) metrics were taken into account.

And [SEO](https://es.wikipedia.org/wiki/Posicionamiento_en_buscadores) techniques were also implemented.

# How to install and run the project

- First, you need to copy the URL to clone the project.
  
- Second, in a folder on your computer, you have to open the command console and run the following command and paste the URL you copied:
  
  `git clone [url]`

- Then open the project in your favorite IDE and the command console in that root.

- The next step is to install the dependencies with the following command:
  
  `npm install`

- Finally, to get the project up you have to run the following command:

  `npm run dev`

You can test the web application in this [link](https://complete-pokedex.vercel.app/) hosted on [Vercel](https://vercel.com/).

#### Enjoy it! :smile:

---

## Getting Started with Create Next App

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
