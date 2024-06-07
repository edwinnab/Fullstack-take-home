import React from 'react';
import Navbar from './Navbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries';
import BookCard from './BookList';

export default function Layout({ onAddToReadingList }) {
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <Navbar onAddToReadingList={onAddToReadingList} />
      <Container style={{ marginTop: "5em", marginBottom: '5em'}}>
        <Typography 
          variant="h4" 
          component="h6" 
          align="center" 
          gutterBottom
          style={{color: '#335C6E', fontWeight: 'bold' }}
        >
          Explore Ello reading sets
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {data.books.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <BookCard
                title={book.title}
                author={book.author}
                image={book.coverPhotoURL}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
