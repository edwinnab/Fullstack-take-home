import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BookCard({title, author, image, key}) {
  return (
    <Card sx={{ maxWidth: 300, marginTop: "1em"}}>
      <CardMedia
        sx={{ height: 140 }}
        image= {image}
        title= {title}
      />
      <CardContent>
        <Typography color="#335C6E" gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography variant="body2" color="#335C6E">
            By: {author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" style={{color:'#5ACCCC', fontWeight: 'bold', textTransform: 'none'}}>Share</Button>
        <Button size="large" style={{color:'#FABD33', fontWeight: 'bold', textTransform: 'none'}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
