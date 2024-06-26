 ![svgviewer-output](https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93)


# Ello Engineering Challenge

## Project Setup
### Prerequisite
- React
- Apollo Client
- Material UI

### Backend 
From the backend folder enter the path: `fullstack-take-home-test/backend`
- run
```bash
npm install
```
- Then run the following command to start the server

```bash
npm start
```

This start a Graphql server at the url `http://localhost:4000/`, the server has a single query `books` that returns a list of books. 

`Backend should be up and running before running the frontend`

### Frontend
From the frontend folder enter the path: `fullstack-take-home-test/frontend/ello-teacher`
- run
```bash
npm install
```
- Then run the following command to start the client

```bash
npm start
```

This start a client runs at the url `http://localhost:3000/` It has the following components 

1. HomeComponent
   ![home](https://github.com/edwinnab/Fullstack-take-home/assets/50041140/ff8e8fa7-e519-4749-8679-08f700d07543)

3. MainComponent
  ![resource](https://github.com/edwinnab/Fullstack-take-home/assets/50041140/5cf34f3d-fc30-4fe3-b2f0-a7aa546e4c6d)


   -has the searchComponent
   ![search](https://github.com/edwinnab/Fullstack-take-home/assets/50041140/df7d7d98-4824-41b3-be90-65f28a8cd4b6)

4. ReadingListComponent
   
![read](https://github.com/edwinnab/Fullstack-take-home/assets/50041140/da762150-53a9-46c7-9e79-afccafbf501b)


## Demo Video
[ello.webm](https://github.com/edwinnab/Fullstack-take-home/assets/50041140/08a02706-bd1d-484b-82e6-cdbdb5891033)


### Functionalities
-  search bar that allows users to search for books by title.
-  list of search results that displays the book title, author, and a button to add the book to the students reading list.
-  reading list that displays all the books that the teacher has added.
-  button to remove a book from the reading list.
