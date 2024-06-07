import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries';
import SearchResultsModal from './SearchResultsModal';
import { Link } from "react-router-dom"
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#335C6E',
  fontWeight: "bold",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar({ onAddToReadingList }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const { data } = useQuery(GET_BOOKS)

  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    if(data) {
      const filteredBooks = data.books.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase())
      )
      setSearchResults(filteredBooks)
      setIsModalOpen(true)
    }
  }

  const handleCloseModel = () => {
    setIsModalOpen(false)
  }

  return (
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
          
          <Search>
            <SearchIconWrapper
                style = {{color: "#335C6E"}} 
            >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearch}
            />
          </Search>

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
      <SearchResultsModal
        open={isModalOpen}
        handleClose={handleCloseModel}
        searchResults={searchResults}
        onAddToReadingList={onAddToReadingList}
      />
    </Box>
  );
}
