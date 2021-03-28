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
                            image={Web}
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
                            image={App}
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
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Services
