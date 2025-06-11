# Limitations of React Js
* It's not feasible to create a fully-featured application ready for production .
* React is library for building user interfaces .
* You need to make decisions about other features such as routing , data fetching and more .

# What is Next Js ?
* It uses React for building user interfaces .
* Provides additional features that enables u to build production-ready applications .
* These features include routing, optimised rendering , data fetching, bundling, compiling, and more .
* U dont need to install additional packages as Next.js provides everything u need.
* As it is a framework , opinions and conventions should be followed to implement these features

In short , Next.js is a React Framework for building web applications.

## IMP 
# Why Learn Next.js ?
It simpilfies the process of production-ready web applications.
1. Routing
2. Api routes
3. Rendering fllexiblity - supports both client-side and server-side rendering .
4. Streamlined Data fetching - provides built-in async-await support
5. flexible in styling
6. Optimization
7. Dev and prod build system



# Lecture 4 
## React Server Components (RSC)
* React server components is a new artitecture that was introduced by React and quickly adopted by Next.js
* This architecture introduces a new approach to creating React components by dividing them into diff. types : a. Server Components , b. Client Components

## Server Components
* By default, Next.js treats all components as Server components.
* These components can perform server-side tasks like reading files or fetching data directly from a database.
* The trade-off is that they can't use React hooks or handle user interactions .

## Client Components 
* To create a client component, you'll need to add the "use client" diretive at the top of ur component file
* While they can't perform server-side tasks like reading files , they can use hooks and handle user interactions
* Client components are the traditional react components you're already familiar with from previous versions of React.  
