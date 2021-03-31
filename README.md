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

- Landing

![Landing Login Page](https://i.imgur.com/yjCcnE1.png)

- New Employee Registration

![Employee Registration](https://i.imgur.com/xpVnOwi.png)


- Movies

![Movies](https://i.imgur.com/zhOUpag.png)


- Movie Details

![Movie Details](https://i.imgur.com/cqueNZo.png)


- Movie Add/Edit

![Movie Form](https://i.imgur.com/PWztJ2G.png)



#### Component Tree

>Front-end application structure:

[Component Tree](https://i.imgur.com/H6ShInP.png)

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

| Component | Priority | Estimated Time | Actual Time |
|---|---|---|---|
| Rails DB creation |   H   | 2hr |   |
| Creating Models and Schema |    H  | 2hrs | 
| Seeding DB Data | H | 4hrs |
| Testing DB Routes | H | 2hrs | 
| Creating Front-End Application | H | 1hrs | 
| Front-End File Structure | H | 4hrs |	
| Integrating Back and Front Ends | H | 4hrs | 
| Front-End Full Crud | H | 2hrs |
| Testing Front-End | H | 2hrs |
| Seeding Inventory with as many movies as possible | H | 6hrs |
| CSS Styling | L | 6hrs | -

|Total|	- | 35hrs |

<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://i.imgur.com/0ukANAF.png)
<br>

***

## Post-MVP

Post MVP goals include movie categories, tracking the number in stock and checked out, along with rental lengths, and when they are due back, and adding criteria to flag movies as 'new releases'. A styling post-MVP goal is to add more elements to make the experience feel like using a DOS machine like primarily using arrow keys and tab to navigate the application.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
