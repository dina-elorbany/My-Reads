<!-- # MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) to bootstrap the project.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed. -->

<!-- ## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md). -->

# MyReads Project

# App Description and Instructions:

- It's a book tracker App contains 2 main pages, Home and Search.

## Home

- Shows three categories/shelves of books
- Each book has an arrow that opens a drop down menu contains all allowed categories
- Any book can be moved to any shelf or we can remove it by selecting 'none'

### Components

- 1. Header: only shows the main title of the app
- 2. Shelves: for handling the main categories
- 3. Shelf: for handling each shelf which is one of shelves
- 4. Book: for showing everything about the book itself such as: its image, title, and authors
- 5. ShelfSelector: for handling the drop down menu and its options
- 6. AddBook: its the only button in this page. it's for navigating to the search page using routing

## Search

- It's an empty page that only contains a search bar to search about what we need
- When we start typing any word for example react or redux, the page starts shows the related books
- when we look at the drop down that is on each book we can know if this book is already sorted in a shelf or it's brand new.
- We can also use the drop down menu to add a book to a any shelf or move it too.
- When we click on the left arrow that located in the top left page, we navigate to the home page and we will fine the book sorted correctly in its shelf that we selected from the search page.

### Components

- Uses the main page of Search and the same Book, and shelfSelector components

## App API:

- In this app, we used some APIs that live in the apis/BooksAPI component:
- 1. `getAll()`:
     for getting all books into the main home page
- 2. `update(book, shelf)`:
     FOR updating any shelf that contains a certain book and
- 3. `search(query)`:
     for getting books that match the search word.

# Installation and Start:

### Download app:

- `npm install` for installing all its dependencies.

### Start app:

- `npm start` for start localhost all.

# Images

> Home Page:

![](https://i.ibb.co/25N56fM/screenshot-home.png)

![](https://i.ibb.co/MRc9KhB/screenshot-shelves-options.png)

> Search Page:

![](https://i.ibb.co/FB9XyHw/screenshot-search-empty-page.png)

![](https://i.ibb.co/k1f5xd3/screenshot-search-result.png)

![](https://i.ibb.co/47qkTSL/Screenshot-check-book-shelf.png)
