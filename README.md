# Blogify App

Blogify is a simple tool for users to write, edit and share technical/non-technical blogs with their respective audiences. [Read more](https://docs.google.com/document/d/1Pjb6fpcA9RTHJzCMiyLudzkkzUDZeyzqmH8JPRZlngY/edit#heading=h.9fb0newpw87n)


### Code Structure

   - __pkg__
     - __app__
       - [Dockerfile](pkg/app/Dockerfile)
       - [deploy.sh](pkg/app/deploy.sh)
       - [next\-env.d.ts](pkg/app/next-env.d.ts)
       - [next.config.mjs](pkg/app/next.config.mjs)
       - [node\_modules](pkg/app/node_modules)
       - [package.json](pkg/app/package.json)
       - [postcss.config.cjs](pkg/app/postcss.config.cjs)
       - __public__
         - [blogify\-logo.png](pkg/app/public/blogify-logo.png)
         - [favicon.ico](pkg/app/public/favicon.ico)
       - __src__
         - __components__
           - [AvatarDropDown.tsx](pkg/app/src/components/AvatarDropDown.tsx)
           - [BlogEditor.tsx](pkg/app/src/components/BlogEditor.tsx)
           - [BlogsTimeLine.tsx](pkg/app/src/components/BlogsTimeLine.tsx)
           - [Footer.tsx](pkg/app/src/components/Footer.tsx)
           - [Header.tsx](pkg/app/src/components/Header.tsx)
           - [TipTap.tsx](pkg/app/src/components/TipTap.tsx)
         - __env__
           - [client.mjs](pkg/app/src/env/client.mjs)
           - [schema.mjs](pkg/app/src/env/schema.mjs)
           - [server.mjs](pkg/app/src/env/server.mjs)
         - __hooks__
           - [useAuth.tsx](pkg/app/src/hooks/useAuth.tsx)
         - __interfaces__
           - [db.ts](pkg/app/src/interfaces/db.ts)
         - __lib__
           - __firebase__
             - [authUIConfig.ts](pkg/app/src/lib/firebase/authUIConfig.ts)
             - [index.tsx](pkg/app/src/lib/firebase/index.tsx)
         - __pages__
           - [\_app.tsx](pkg/app/src/pages/_app.tsx)
           - __api__
             - [blogs.ts](pkg/app/src/pages/api/blogs.ts)
             - [firebase.ts](pkg/app/src/pages/api/firebase.ts)
           - __blogs__
             - [[id].tsx](pkg/app/src/pages/blogs/%5Bid%5D.tsx)
             - [index.tsx](pkg/app/src/pages/blogs/index.tsx)
           - [index.tsx](pkg/app/src/pages/index.tsx)
           - [login.tsx](pkg/app/src/pages/login.tsx)
         - __styles__
           - [globals.css](pkg/app/src/styles/globals.css)
       - [tailwind.config.cjs](pkg/app/tailwind.config.cjs)
       - [tsconfig.json](pkg/app/tsconfig.json)
       - [yarn.lock](pkg/app/yarn.lock)
     - __firebase__
       - [firebase.json](pkg/firebase/firebase.json)
       - [firestore.indexes.json](pkg/firebase/firestore.indexes.json)
       - [firestore.rules](pkg/firebase/firestore.rules)
