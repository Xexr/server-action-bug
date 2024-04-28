Repo to demonstrate that server actions are broken on the edge runtime with latest vercel CLI

Simply call any server action and you will get a response 405 Method Not Allowed

## Getting Started

First, run the development server:

```bash
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser

Press the 'Hello World' button.

You should see hello world logged on the server (via vercel logs)

Instead you will get a 405 Method Not Allowed error
