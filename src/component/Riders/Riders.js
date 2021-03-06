import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

const Riders = (props) => {
    const {name, image} = props.rider;
    
    const history = useHistory();

    const handleRider = () =>{
      history.push('/login');
    }

    const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: '2px solid #ddd',
    padding: '5px'
  },
  media: {
    height: 140,
  },
});
const classes = useStyles();
    return (
        <Card className={classes.root} onClick={() => handleRider()}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );
};

export default Riders;