# Blogify App

Blogify is a simple tool for users to write, edit and share technical/non-technical blogs with their respective audiences. [Read more](https://docs.google.com/document/d/1Pjb6fpcA9RTHJzCMiyLudzkkzUDZeyzqmH8JPRZlngY/edit#heading=h.9fb0newpw87n)


[APP Demo URL](https://blogify-app-eazkncqexa-em.a.run.app)

### Code Structure

- **pkg**
  - **app**
    - [Dockerfile](pkg/app/Dockerfile)
    - [deploy.sh](pkg/app/deploy.sh)
    - [next\-env.d.ts](pkg/app/next-env.d.ts)
    - [next.config.mjs](pkg/app/next.config.mjs)
    - [package.json](pkg/app/package.json)
    - [postcss.config.cjs](pkg/app/postcss.config.cjs)
    - **public**
      - [blogify\-logo.png](pkg/app/public/blogify-logo.png)
      - [favicon.ico](pkg/app/public/favicon.ico)
    - **src**
      - **components**
        - [Footer.tsx](pkg/app/src/components/Footer.tsx)
        - [Header.tsx](pkg/app/src/components/Header.tsx)
      - **env**
        - [client.mjs](pkg/app/src/env/client.mjs)
        - [schema.mjs](pkg/app/src/env/schema.mjs)
        - [server.mjs](pkg/app/src/env/server.mjs)
      - **hooks**
        - [useAuth.tsx](pkg/app/src/hooks/useAuth.tsx)
      - **interfaces**
        - [HelloWorld.ts](pkg/app/src/interfaces/HelloWorld.ts)
        - [db.ts](pkg/app/src/interfaces/db.ts)
      - **lib**
        - **firebase**
          - [authUIConfig.ts](pkg/app/src/lib/firebase/authUIConfig.ts)
          - [index.tsx](pkg/app/src/lib/firebase/index.tsx)
      - **pages**
        - [\_app.tsx](pkg/app/src/pages/_app.tsx)
        - **api**
          - [hello.ts](pkg/app/src/pages/api/hello.ts)
        - [blogs.tsx](pkg/app/src/pages/blogs.tsx)
        - [index.tsx](pkg/app/src/pages/index.tsx)
        - [login.tsx](pkg/app/src/pages/login.tsx)
      - **styles**
        - [globals.css](pkg/app/src/styles/globals.css)
    - [tailwind.config.cjs](pkg/app/tailwind.config.cjs)
    - [tsconfig.json](pkg/app/tsconfig.json)
    - [yarn.lock](pkg/app/yarn.lock)
  - **firebase**
    - [firebase.json](pkg/firebase/firebase.json)
    - [firestore.indexes.json](pkg/firebase/firestore.indexes.json)
    - [firestore.rules](pkg/firebase/firestore.rules)
