# BlockBustler

Bringing BlockBuster's POS system into the 21st century so it can live out its golden years in dignity.

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

After watching the Netflix Documentary _The Last BlockBuster_ I could not believe the store's manager Sandi Harding had to keep a stock of dusty 20-year-old computers to scavenge for parts to keep the POS system running. It inspired me to rethink their system with modern technology that could be accessed from any modern computer or mobile device with internet access and wouldn't be so tethered to the equipment it was designed for.


<br>

## MVP

_**BlockBustler** MVP will be an easily searchable inventory of movies in stock at BlockBuster. Intended for employees, after login users will be able to search for movies by title, director, or actors, check to see if it's in stock, and mark it rented or returned. To stay consistent with their current POS system, the application will be styled in the spirit of a DOS application._

<br>

### Goals

- Full CRUD on front and back end with soft delete
- Easily searchable movie inventory
- Ability to mark movies as checked out or returned
- Seed database with a large inventory of movies

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-end framework for effeciently rendering single-page applications|
|      React-router       | navigational component collection |
|   Rails  | Framework for building database-backed web applications |
| bcrypt | password-hashing service used to secure user information |
|     jwt      | service allowing for secure transmission of json data |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

``` structure

src
|__ components/
      |__ Movie.jsx
|__ containers/
      |__ MovieContainer.jsx
|__ layout/
      |__ Header.jsx
      |__ Layout.jsx
|__ screens/
      |__ Login.jsx
      |__ Movies.jsx
      |__ MovieDetails.jsx
      |__ AddMovie.jsx
      |__ EditMovie.jsx
|__ services/
       |__ api-config.js
       |__ auth.js
       |__ search.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://i.imgur.com/xXm8b2J.png)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
