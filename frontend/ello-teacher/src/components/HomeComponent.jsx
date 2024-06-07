import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ListIcon from '@mui/icons-material/List';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

export default function HomeComponent() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color=''>
          <Toolbar>
            <Link to="/">
            <IconButton
              size="large"
              edge="start"
              style={{color: "#5ACCCC"}}
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
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em', textAlign: 'center', marginTop: "10em" }}>
        <img src="https://books.ello.com/static/media/summer-icon.bcf576872ef448e77ffe5178a9438f64.svg" alt="centerImage" />
        <Typography 
        variant="h4" 
        component="h6" 
        style={{ color: '#335C6E', fontWeight: 'bold' }}>
          Confident, Independent Reading
        </Typography>
        <Typography variant="body2" style={{ color: '#335C6E' }}>
          Over 700 decodable books that match your child's reading ability. Help prevent the summer slump, without frustration
        </Typography>
        <Link  to="/resources">
        <Button
          size="large"
          style={{ backgroundColor: '#5ACCCCCC', borderRadius: "5em", color: "#FFFFFF", fontWeight: "bolder",  width: '20em'}}
        >
          Explore Reading Sets
        </Button>
        </Link>

        <Typography variant="body2" style={{ color: '#335C6E' }}>
          Share this library with friends!
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1em' }}>
          <a href="ello-teacher@example.com" target="_blank" rel="noopener noreferrer">
          <IconButton  style={{color: "#5ACCCC"}}>
            <MailIcon />
          </IconButton>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <IconButton  style={{color: "#5ACCCC"}}>
            <InstagramIcon />
          </IconButton>
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
          <IconButton  style={{color: "#5ACCCC"}}>
            <XIcon />
          </IconButton>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <IconButton  style={{color: "#5ACCCC"}}>
            <FacebookIcon />
          </IconButton>
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <IconButton  style={{color: "#5ACCCC"}}>
            <PinterestIcon />
          </IconButton>
          </a>
        </div>
      </Container>
    </>
    
  );
}
