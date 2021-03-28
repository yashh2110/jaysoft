import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import App from "../../images/app.jpg";
import Value from "../../images/values.jpg";
import Cus from "../../images/service.jpg";
import Team from "../../images/team.jpeg";
import "./work.css"
const useStyles = makeStyles({
    root: {
      maxWidth: 325,
      height:290,
      margin:10
    },
    media: {
      height: 150,
    },
  });
function Work() {
    const classes = useStyles();
    return (
        <div className="bg-light">
             <h2 className="p-4 mt-2">Special About Us</h2>
                    
        <div className="work">
       
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={App}
                title="Appication Development"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Application Development
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                We provide complete application development services covering all phases of the software development lifecycle
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Team}
                title="Personal Team"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Personal Team
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                We believe in teamwork and work together to reach pinnacle of success
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Value}
                title="Our Core Values"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Our Core Values
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                We provide complete application development services covering all phases of the software development lifecycle
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Cus}
                title="Creative Services"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Creative Services
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Cost-effective ideas, highly efficient design, qualitative development, technology support & project implementations.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
        </div>
    )
}

export default Work
