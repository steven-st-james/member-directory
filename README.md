This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First run 
```bash
npm install --legacy-peer-deps // You may need to run with this flag
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
The data base automatically populates if it's empty on start up with data from http://randomuser.me 
To clear the data base run the command below. The next time the app is refreshed it will populate again.
```bash
npm run db:reset
```

