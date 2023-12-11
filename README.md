# NextJS 14 Starter 

This project demonstrates how to combine some cool techstacks for NextJS project and can be used as a starter project. 

## Stack details

- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/) for CSS styling
- [Prisma](https://www.prisma.io/) for ORM
- [NextAuth](https://next-auth.js.org/) for authentication via GitHub
- [ShadCN] (https://ui.shadcn.com/) for ui components (tabs, toasts, labels, cards..)
- [Supabase] (https://supabase.com/) for Postgre headless server.

#### Features:
- Fully responsive.
- Eslint setup.
- Clean Architect project folder that can scalable (can easily add new feature or implement multi-tenant, multi-site feature).
- Use Middleware for multi-features (movies is just one feature, you can add other features like shopping, blogs etc with similar structure and skeleton). Also multi-tenant, multi-sites is in TODO LIST.

#### TODO LIST:
- Add other modules (features) like: ecommerce, subscriptions, blogs, multi-tenant, multi-sites
- Add social activities like: comment, like, favourite movies.
- Add CRUD Admin for all data

#### Credits:
- https://github.com/ffw-hai-cao/nextjs-tmdb
- https://github.com/ffw-manh-nguyen/rxp-nextjs-cinema-assignment
- https://github.com/SudoKMaar/netflix-clone-nextjs
  
## Deploy your own

### Install this repo
Run the follow three commands to clone this repo and install its dependencies:
```
git clone https://github.com/hunghoxuan/nextjs-movie.git
cd nextjs-movie
yarn
-- or
npm i && npm run dev
```

### Create a `.env.local` file

You can configure these values locally by copying the `.env.example` file to a new file called `.env` and filling out the values as you receive them in the steps below.

### Demo account

User can use demo accounts defined in .env.local DEMO_USER key to login.

### GitHub OAuth setup

To create your OAuth app, follow these steps:

1. Go to [https://github.com/settings/developers](https://github.com/settings/developers)

2. Click "OAuth Apps" and create an Oauth application to use in Development:

![Github Oauth Application Setup](./screenshots/github-oauth.png)

| Application name               | Homepage URL                                       | Authorization callback URL |
|--------------------------------|----------------------------------------------------|----------------------------|
| NextJS Movie | https://github.com/hunghoxuan/nextjs-movie | http://localhost:3000/     |

3. Copy the `GITHUB_ID` and `GITHUB_SECRET` and paste them into your environment variables on Vercel and in your `.env` file.

> Note: when you deploy a production copy of this application, you'll need to create another GitHub OAuth app which uses your production URL as the "Authorization callback URL" value.
