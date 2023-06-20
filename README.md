# Blogify App
Blogify is a simple tool for users to write, edit and share technical/non-technical blogs with their respective audiences.

# Idea 
Idea is to build a subset of what Hashnode does for the dev community.

# PRD

## MVP
- As a user, I should be able to create blogs with unique URL [DONE]
- As a user, I should be able to edit blogs [DONE]
- As a user, I should be able to view all available public blogs [DONE]

## V1
- As a user, I should be able to signup/login with google as IDP [Auth] [Done]
- As a user, I should be able to signup/login with GitHub as IDP [Auth] [Done]
- As a user, I should be able to signup/login with Facebook as IDP [Auth] (optional)

## V2 
- As a user, I should be able to view all my past blogs
- As a user, I should be able to like, share, and comment on blogs
- As the author of the post, I should be able to reply to comments on blogs


# EDD (Engineering design document)

## Tech Stack

We will be using the following technologies as part of bootstrapping our application:
- NextJS with API routes
- Firebase Auth (for user authentication)
- Firestore (for storing user blogs)
- Docker (to containerize Next App)
- Cloud Run (host containerized app with minimal configuration)
- Firebase Auth prebuilt UI
- Flowbite React UI Components for quick bootstrapping over tailwind built components
- Editor: TipTap


# Firestore Schema
1. **Users** collection: /users/{id}, to keep track of logged in users (shall be updated on `functions.auth.user().onCreate` side effect to sync users in firestore automatically
**myBlogs**
**Blogs**: 
   **Comments**
   **Replies**
   **Likes**
   **Views**


Note: Below mentioned is a schema, which is good to start with w.r.t maintaining data for users, user’s blogs and some future functionalities supporting comments, replies, likes and views.


<!--## Firestore structure



Link to diagram -->


# Security

Client: For authentication for client-side users, we will use Firebase auth (via google/signin anonymously and github as IDP)
Third party users: For Exposing APIs:
For each route we can setup custom CORS handler with allowable methods (GET, PUT, POST, DELETE)
We can accept API_SECRET_KEY on middleware to handle third party authentication


# Project Timeline

- Dockerized Next Application
- Added Deploy script to automatically deploy to cloud run with one single CLI command
- Started Thinking about what I should build, and I chose Blogs :p, I wanted to create a blogging website for so long
- Created Firestore Schema in draw.io
- Added Firebase Auth in App, with Google and Github as IDP
- Added Firebase Auth Prebuilt UI, faced some issues with React wrapper over Firebaseui
- Focused on Adding FirebaseAuthProvider in one of the best possible way in code (afaik)
- Focused on completing signin/signout
- Decided to use some UI kit (flowbite) to speed up development
- Started working on Integrating Firestore with App
- Integrated POST API route with App, to create post
- Added logic for creating/editing Blogs from UI
- Decided to use TipTap as Editor Engine, as it is one of the best editors out there
- Tested stuff e2e

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

# References
https://itnext.io/create-a-front-app-immediately-with-next-js-on-google-cloud-run-d0cfde795ce3
https://github.com/vercel/next.js/tree/canary/examples/with-docker
