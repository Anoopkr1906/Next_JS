# Lecture 1
## Limitations of React Js
* It's not feasible to create a fully-featured application ready for production .
* React is library for building user interfaces .
* You need to make decisions about other features such as routing , data fetching and more .

## What is Next Js ?
* It uses React for building user interfaces .
* Provides additional features that enables u to build production-ready applications .
* These features include routing, optimised rendering , data fetching, bundling, compiling, and more .
* U dont need to install additional packages as Next.js provides everything u need.
* As it is a framework , opinions and conventions should be followed to implement these features

In short , Next.js is a React Framework for building web applications.

## Why Learn Next.js ?
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


# Lecture 5
## Routing
* Next.js has a file based routing system
* URLs you can access in your browser are determined by how you organize your files and folders in ur code .

## Routing conventions 
* All routes must live inside the app folder 
* Route files must be named either page.tsx or page.js
* Each folder represents a segment of the URL path .

When these conventions are followed, the file automatically becomes available as a route .


# Lecture 7 & 8 & 9
## Dynamic routing 
* for dynamic routing name folder inside square brackets eg. [productId] for products page.
* eg proucts/1 , products/2 and so on routing will be done dynamically not statically 
## Nested Dynamic routing
* eg products/[productId]/reviews/[reviewId]
* This allows you to create more complex URL structures that can handle multiple dynamic segments.
## Catch all segments
* eg. docs/feature1/concept1/example1

# Lecture 10 
* custom 404 page not found page
* we can use this anywhere as a function by importing it .
* suppose we in products section we dont want to display the review with reviewId > 1000 then we will show this page 
* This page can be created by creating a file named not-found.tsx or not-found.js inside the app folder.
* one folder can have their not-found.tsx file  

* Not-found component do not accept props


# Lecture 12
Private Folders 
* A way to tell Next.js, Hey this folder is just for internal stuff - dont include it in the routing system.
* The folder and all its subfolders are excluded from the routing .
* Add an underscore before the folder name to make it private.

* Advantages of Private Folders (super useful for a bunch of things)
1. Keeping your UI logic seperate from routing logic .
2. Having a consistent way to organize internal files in your project
3. Making it easier to group related files in ur code editor
4. Avoiding potential naming conflicts with future Next.js file naming conventions

* PRO TIP - use %5F in place of _(underscore) in the URL to access the private folder in the browser.

# Lecture 13
* creating auth folder in which we will group routes such as login, register, and logout.
* This is a good practice to keep your authentication-related routes organized and separate from other parts of your application.

* we wrap the auth folder inside paranthesis () , this tells next.js to treat this folder as an organizational tool only excluding it from the URL path


# Lecture 14
## How to create Layouts
* Default export a React component from a file named layout.tsx or layout.js inside the app folder.
* That component takes a children prop , which Next.js will populate with your page content.

* eg Made a header and footer in layout.tsx file in route-grous and will be visible even if u visit any routes 

# Lecture 15
## Nested Layouts
* if u want to create a layout for a specific section of your app, you can create a layout file inside that section's folder.
* eg for products reviews inside products folder we can create a layout.tsx file which will be used for all the reviews pages.

# Lecture 17
## Routing Metadata
* The Metadata Api in Next.js is a powerful feature that lets us define metadata for our each page.
* Meatadata ensures content looks great when its shared or indexed by search engines.
* Two ways to handle metadata in layout.tsx or page.tsx files:
    1. export a static metadata object
    2. export a dynamic generateMetadata function

## Configuring Metadata
* Both layout.tsx and page.tsx files can export metadata.
* Layout metadata applies to all pages within that layout.
* Page metadata applies only to that specific page.
* Metadat follows a top-down order, starting from root level .
* When metadata exists in multiple places along a route, they merge together, with page metadata overriding layout metadata for matching properties.

* Metadata will not work in pages that use the "use client" directive, as these pages are client components and do not support server-side metadata generation.

# Lecture 18 
## title metadata
* The title field's primary purpose is to define document title .
* It can either be a string or an object


# Lecture 21
## Params and searchParams
For a given URL ,
* params is a promise that resolves to an object containing the dynamic route parameters(like id).
* searchParams is a promise that resolves to an object containing the query parameters in the URL( like filters and sorting ).
* While page.tsx has access to both params and searchParams, layout.tsx only has access to params.

# Lecture 23
## Templates
* templates are similar to layouts in that they are also UI shared between multiple pages in ur app 
* Whenever a user navigates between routes sharing a template , you get a completely fresh start.
    * a new template component instance is mounted
    * DOM elements are recreated
    * state is cleared
    * effects are re-synchronized

* Create a template by exporting a React component from a file named template.tsx or template.js .

# Lecture 24
## loading.tsx
* This file helps us create loading states that users see while waiting for a content to load in a specifc route segment.
* The loading states appear instantly when navigating , letting users know that the application is responsive and actively loading content.


# Lecture 25
## Error Handling
* Next.js provides a built-in error handling mechanism that allows you to create custom error pages for your application.
* You can create a file named error.tsx or error.js inside the app folder to define a custom error page.
* This error page will be displayed whenever an error occurs in your application, providing a better user experience than the default error page.
* The error page can accept an error prop, which contains information about the error that occurred.
* You can use this information to display a user-friendly error message or take other actions based on the error type.
* The error page can also include a link to navigate back to the home page or any other route in your application.

## error.tsx
* It automatically wraps route segments and their nested children in a React Error Boundary.
* You can create custom error UIs for specific segments using file-system hierarchy.
* It isolates errors to affected segments while keeping the rest of ur app functional.
* It enables you to attempt to recover from an error without requiring a full page reload.

## Component Hierarchy
* layout.tsx
    * template.tsx
        * error.tsx
            * loading.tsx
                * not-found.tsx
                    * page.tsx



# Lecture 27
## Handling errors in nested routes
* errors always bubble up to find the closest parent error boundary.
* An error.tsx filehandles errors not just for its own folder, but for all the nested child segments below it too.
* By strategically placing error.tsx files at different levels in your route folders , you can control exactly how detailed your error handling gets.

* Where u put your error.tsx file makes a huge difference - it determines exactly which parts of ur UI get affected when things go wrong.