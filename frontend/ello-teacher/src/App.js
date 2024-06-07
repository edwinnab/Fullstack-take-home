import Navbar from './components/Navbar';
import Container from '@mui/material/Container';
import BookCard from './components/BookList';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import "./App.css"
import { useState } from 'react';
import ReadingList from './components/ReadingList';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../src/queries'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomeComponent from './components/HomeComponent';

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS)
  const [ readingList, setReadingList ] = useState([])

  const handleAddToReadingList = (book) => {
    setReadingList((prevList) => [...prevList, book]);
    alert('Book added successfully!')
  }

  const removeBook = (bookToRemove) => {
    setReadingList(prevList => prevList.filter(book => book !== bookToRemove));
    alert('Book removed successfully!')
  };
  

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <Routes>
      <Route index element={<HomeComponent />} />
      <Route  path="/resources" element={<Layout  onAddToReadingList={handleAddToReadingList}/>} />
      <Route  path='/reading-list' element={<ReadingList books={readingList}  removeBook={removeBook}/>}/>      
    </Routes>
    );
}

export default App;
