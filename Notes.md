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

# Lecture 29
## Handling Global errors
* If an error boundary cant catch errors in the layout.tsx file from the same segment, what about errors in the root layout?
* It doesn't have a parent segment- how do we handle those erros ?
* Nest.js provides a special file calles global-error.tsx that goes in ur root app directory.
* This is your last line of defense when something goes catastrophically wrong at the highest level of your app .
    * Works only in production mode
    * requires html and body tags to be rendered


# Lecture 30
## Parallel Routes
* Parallel routing is an advanced routing mechanism that lets us render multiple pages simultaneously within the same layout .

## How to set them up ?
* Parallel routes in Next.js are defined using a feature known as "slots"
* Slots help organize content in a modular way.
* To create a slot , we use the `@folder` naming convention
* Each defined slot automatically becomes a prop in its corresponding `layout.tsx` file.

## Parallel routes use cases
* Dashboard with multiple sections 
* Split-view interfaces
* Multi-pane Layouts
* Complex admin interfaces

## Parallel routes benefits
* Parallel routes are great for spliting a layout into manageable slots (especially when diff. teams work diff. parts).
* Independent Route Handling 
* Sub-navigation in routes .

## Independent route handling
* Each slot in ur layout such as users , revenues , etc , can handle its own loading and error states
* This granular control is particularly useful in scenarios where diff. sections of the page load at varying speeds or encounter unique errors.

## Sub-navigation in routes
* Each slot can essentially function as a mini-application, complete with its own navigation and state management .
* Users can interact with each section seperately , applying filters , sorting data , or navigation through pages without affecting other parts.

# Lecture 31
## Unmatched routes
* Navigation from the UI
- When navigating from the UI(like clicking a link), Next.js keeps showing whatever was in the unmatched slots before.
* Page reload
- Next.js looks for a `default.tsx` file in each unmatched slot.
- This file is critical as it serves a as a fallback to render content when the framework can't retrieve a slot's active state from the current URL.
* Without the file, you will get a 404 error


# Lecture 32
## Conditional Routes
* Imagine you want to show different content based on whether a user is logged in or not.
* You might want to display a dashboard for authenticated users but show a login page for those who aren't.
* Conditional routes allow us to achieve this while  maintaining completely seperate code on the same URL .


# Lecture 33
## Intercepting Routes
* Intercepting routes is an advanced routing mechanism that allows u to load a route from another part of your application within the current layout.
* It's particularly useful when u want to display new content while keeping ur user in the same context.  

## Intercepting Route conventions 
* (.) to match segments on the same level.
* (..) to match segments one level above.
* (..)(..) to match segments two level above.
* (...) to match segments from the root app directory.


# Lecture 42
## Headers in route handlers
* HTTP headers represent metadata about the associated APi request or response.

## Request Headers
* These are sent by client, such as a web browser. They contain essential information about the request, which helps the server undestand and process it correctly.
* 'User-Agent' which identifies the browser and operating system to the server.
* 'Accept' which indicates the content types like text, video or image formats that the client can process.
* 'Authorization' which is used to send credentials for authentication purposes.

## Response Headers
* These are sent back from the server to the client. They provide information about the server and the data being sent in response.
* 'Content-Type' which indicates the type of data being sent, such as JSON or HTML.


# Lecture 43
## Cookies in route handlers
* cookies are small pieces of data that a server sends to a user's web browser.
* The browser can store the cookies and send them back to the same server with future requests .

* Cookies serve three main purposes:
    - managing sessions(like user logins and shopping carts).
    - handling personalization (such as user preferences).
    - tracking (like recording and analyzing user behaviour).


# Lecture 45
## Caching in route handlers
* Route handlers are not cached by default but you can opt into catching when using GET method.
* Caching only works for GET requests.
* if u are using POST, PUT, DELETE, or PATCH methods, caching will not be applied.
* if u are using dynamic functions like headers(), cookies(), or response, caching will not be applied.

# Lecture 46
## Middleware
* Middleware in Next.js is a powerful feature that lets you intercept and control the flow of requests and responses throughout ur application .
* It does this at a global level, significantly enhancing features like redirects, URL rewrites, and authentication , headers , cookies and more.

* Middleware lets u specify paths where it should be active
    - custom matcher config
    - conditional statements

# Lecture 47
## Rendering 
* It is the process of transforming the component code u write into user interfaces that users can see and interact with .
* In Next.js,the tricky part to building a performant application is figuring out when and where this transformation should happen.
    - CSR, SSR and RSCs ?

# Lecture 48
## Client-side rendering (CSR)
* The whole approach where your browser (the client) transforms React components into what you see on screen - that's what we call client-side rendering (CSR).
* CSR was super-popular for single-page-applications(SPAs) , and everyone was using it .
* It wasn't long before when developers began noticing some inherent drawbacks to this approach.

    ## Drawbacks of CSR

    ### SEO
    * When search engines crawl your site, they're mainly looking at HTML content, but with CSR, ur initial HTML is basically just an empty div- not great for search engines trying to figure out what ur page is about.
    * When u have a lot of nested components making API calls, the meaningful content might load too slowly for search engines to even catch it.

    ### Performance
    * Your browser (the client) has to do everything: fetch data, build the UI, make everything interactive... that's a lot of work! 

    * Users often end up staring at a blank screen or a loading spinner while all this happens.
    * Everytime u add a new feature to ur app , that js bundle gets bigger, making users wait even longer
    * This is especially frustrating for people with slower internet connections.


# Lecture 49
## Server-side solutions
* Search engines can now easily index the server-rendered content, solving our SEO problem.
* Users see actual HTML content right away instead of staring at a blank screen or loading spinner.
* This has it's own complexities.

## Hydration
* DUring hydration, React takes control in the browser and reconstructs ths component tree in memory, using the server-rendered HTML as a blueprint.

* It carefully maps out where all the interactive elements should go, then hooks up the javascript logic.
* This involves initializing application state, adding click and mouseover handlers, and setting up all the dynamic features needed for a full interactive user experience 

## Server-side solutions 
1. Static Site Generation (SSG)
2. Server-side Rendering (SSR)

* SSG happens during build time when u deploy ur application to the server. This results in pages that are already rendered and ready to serve. It's perfect for content that stays relatively stable, like blogs or documentation sites.
* SSR, on the other hand, renders pages on-demand when users request them. It's ideal for personalized content like social media feeds where the HTML changes based on who's logged in.
* Server-SIde rendering(SSR) was a significant improvement over CSR, providing faster initial page loads and better SEO, it came with its own set of challenges.

## Drawbacks of SSR - all or nothing waterfall
* U have to fetch everything befor u can show anything.
* U have to load everything befor u can hydrate anything.
* U have to hydrate everything befor u can interact with anything.

# Lecture 50
## Suspense SSR architecture
* Use the <Suspense> component to unlock two major SSR features:
    1. HTML streaming on the server
    2. Selective hydration on the client

### HTML streaming on the server
- HTML streaming solves our first problem:
    * U don't have to fetch everything before u can show anything.
    * If a particular section is slow and could potentially delay the initial HTML, no problem!
    * It can be seamlessly integrated into the stream later when it's ready.

- The other hurdle
    * Even with faster HTML delivery, we cant start hydrating until we've loaded all the JavaScript for the main section
    * If that's a big chunk of code, we're still keeping users waiting from being able to interact with the page.

### Code splitting
* It lets u tell ur bundler, "These parts of the code aren't urgent - split them into seperate scripts".
* Using `React.lazy` for code splitting seperates ur main section's code from the core JS bundle .
* The browser can download React and most of ur app's code independently, without getting stuck waiting for that main section's code

### Selective hydration on the client 
* By wrapping ur main section in a `<Suspense>` component, u are not just enabling streaming but also telling REact its okay to hydarate other parts of tha page before everything is ready.
* This is what we call `selective hydration` .
* It allows for the hydration of parts of the page as they become available, even before the rest of the HTML and the JS code are fuly downloaded.


- It also solves or third problem 
* The neccesity to "hydrate everything to interact with anything".
* react starts hydrating as soon as it can , which means users can interact with things like the header and side navigation without waiting for main content. 
