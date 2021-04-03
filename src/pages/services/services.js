import React from 'react'
import Footer from '../../components/footer/footer'
import MainNav from '../../components/nav/nav'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import App from "../../images/app.jpg";
import Web from "../../images/web.png";
import No from "../../images/no.jpg";
import Big from "../../images/big.jpg";
import "./services.css"
const useStyles = makeStyles({
    root: {
      maxWidth: 400,
        margin:10
    },
    media: {
      height: 170,
    },
  });
function Services() {
    const classes = useStyles();
    return (
        <div className="App">
            <MainNav/>
            <div className="container">
                <h2 className="services-title">Our Services</h2>
                <p className="text-center "> In today’s rapidly evolving technological environment, our team of engineers helps your business grow and develop. Our expertise covers wide range of advanced technologies and our employees can solve your business problems in an optimized, cost effective way with quality. We will support you from project design to implementation, deployment & production support.
                    <br/>
                    <br/>
                    We have the best IT talent who can tackle various domains of your business. Whether your business is a start-up or a large business expanding, we can provide the business solutions that best suite your needs.
                </p>
                <div class="cards mt-4">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={Big}
                            title="BigData & Cloud"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            BigData & Cloud
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            SkillVoice team of BigData, Spark & Cloud engineers has remarkable experience developing, deploying and supporting BigData at scale across various industries. We can design, optimize and provide support at any stage
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={No}
                            title="NoSQL Services"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            NoSQL Services
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            NoSQL provides a mechanism for storage and retrieval of data which is modeled in means other than the tabular relations used in relational databases. Our Engineers will support you in development, deployment & scale your data in NoSQL environments.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={Web}
                            title="Apps & Web Development"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Apps & Web Development
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            We have a dedicated team of web developers creating powerful and engaging mobile apps & developers for web services who can accomplish diverse requirements.                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={App}
                            title="Application Development"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Application Development
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            We innovatively design, develop, integrate, test, deploy, maintain and support quality business applications that fit your specific business needs. Our Engineers has vast experience of working on various programming languages including java, scala & python designing various Frameworks, Applications.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Services
