import React from 'react';
import Grid from '@mui/material/Grid';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { Container, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ListIcon from '@mui/icons-material/List';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';


function ReadingList({ books, removeBook}) {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color=''>
          <Toolbar>
            <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <img src='../logo.png'  alt='logo' width={60}/>
            </IconButton>
            </Link>
      
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to="/resources">
              <IconButton
                size="large"
                style = {{color: "#335C6E"}}
              >
                <CollectionsBookmarkIcon />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  color="#335C6E"
                  fontWeight= "bold"
                  >
                  Resources
                  </Typography>
              </IconButton>
            </Link>
            <Link to="/reading-list">
              <IconButton
                size="large"
                style = {{color: "#335C6E", paddingInline: "1em"}}
              >
                <ListIcon />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  color="#335C6E"
                  fontWeight= "bold"
                  >
                  Reading List
                  </Typography>
              </IconButton>
            </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Link to="/">
        <IconButton
        size="large"
        >
        <Typography 
          component="h6" 
          align="center" 
          gutterBottom
          style={{ 
            marginTop: '5em',
            color: '#335C6E',  
            display: 'flex',
            alignItems: 'center', 
          }}
        >
          <KeyboardBackspaceIcon style={{ marginRight: '0.5em' }} /> 
          Return to home
        </Typography>
        </IconButton>
      </Link>

      <Grid container spacing={3} justifyContent="center">
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={book.coverPhotoURL}
              title={book.title}
            />
            <CardContent style={{ paddingBottom: 0 }}>
              <Typography 
              color="#335C6E"
              variant="h6" 
              >
                {book.title}
              </Typography>
              <Typography 
              variant="body2" 
              color="#335C6E">
                By: {book.author}
              </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', 
               }}>
              <Button size="large" 
              style={{color: "red", fontWeight: "bolder", textTransform: 'none'}}
              onClick={() => removeBook(book)}
              >Remove</Button>
              <Button size="large" style={{color: '#FABD33', fontWeight: "bolder", textTransform: 'none'}}>Learn More</Button>
            </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ReadingList;
