import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {GridListTileBar, ListSubheader}  from "@material-ui/core";
import Lottie from "react-lottie";
import educationData from "./assets/book-loading.json";
import projData from "./assets/developer.json";
import medalData from "./assets/medal-animation.json";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMedal } from '@fortawesome/free-solid-svg-icons'


// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "95%",
    height: "100%",
    paddingBottom: '200px'
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const tileData = [
  {
    title: "Technology Management Specialist - 2012",
    subtitle: "Bogotá-Col	Universidad Autónoma de Colombia",
  },
  {
    title: "Telematic Engineering - 2005",
    subtitle: "Bogotá-Col	Universidad Distrital Francisco José de Caldas",
  },  
  {
    title: "Data Systematization Technology - 2003",
    subtitle: "Bogotá-Col	Universidad Distrital Francisco José de Caldas",
  },
  
];

const jobData = [
  {
    title: "FISCALÍA GENERAL DE LA NACIÓN - [2016 - nowadays] ",
    subtitle: "Bogotá-Col	•	Front-End Developer (Vuejs, React, Angular, Bootstrap). ",
  },
  {
    title: "GGT INFORMÁTICA  - 2016",
    subtitle: "Bogotá-Col	•	Front-End Developer (Angular, Bootstrap).",
  },  
  {
    title: "Dirección de Impuestos y Aduanas Nacionales – DIAN - [2005 - 2015]",
    subtitle: "Bogotá-Col	•	Front-End Developer (Flex, JavaScript, JSF, RichFaces).",
  },
  
];

const certificationData = [
  {
    title: "Front-end avanzado en React - 2020 ",
    subtitle: "Bogotá-Col Acámica",
  },
  {
    title: "Curso Profesional de JavaScript - 2020",
    subtitle: "Platzi Credential ID  e4a6406f-cbee-4cc6-ad01-aae3a44cc648",
  },  
  {
    title: "Curso de Asincronismo con JavaScript - 2020",
    subtitle: "Platzi Credential ID  e4bc353b-2aa7-4047-b71d-c86478e4a49a",
  },  
  {
    title: "Curso de ECMAScript 6",
    subtitle: "Platzi Credential ID  3a361b0a-f27d-4bbe-ae69-cf0c162345d3",
  },  
  {
    title: "Curso Básico de JavaScript",
    subtitle: "Platzi Credential ID  d9a69bbd-b604-40f8-ab95-262907c84043",
  },  
  {
    title: "Fundamentos de JavaScript",
    subtitle: "Platzi Credential ID  09fc544d-bbc2-452f-b241-cc4bf9442737",
  },  
  
];

export default function TitlebarGridList() {
  const classes = useStyles();

  const educationOptions = {
    loop: true,
    autoplay: true,
    animationData: educationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const projOptions = {
    loop: true,
    autoplay: true,
    animationData: projData,
    
  };

  const medalOptions = {
    loop: true,
    autoplay: true,
    animationData: medalData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={1} cellHeight={"60vh"}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"> + </ListSubheader>
          <GridListTileBar
            title="+  EDUCATION"
            actionIcon={
              <FontAwesomeIcon icon={faLaptopCode}  size="lg"/>
            }
          />
        </GridListTile>
        <GridListTile>
        {tileData.map((tile) => (
        <Card className={classes.root} variant="outlined" key={tile.title}>
            <CardMedia>
              <Lottie options={educationOptions} height={100} width={100} style={{'left': 40}} />
            </CardMedia>
            <div className={classes.details}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {tile.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {tile.subtitle}
                </Typography>
              </CardContent>
            </div>
          </Card>
        ))}

          {/* <GridListTileBar
            style={{'marginTop': '30px'}}
            title="EDUCATION"
            actionIcon={
              <FontAwesomeIcon icon={faGraduationCap}  size="lg"/>
            }
          /> */}
        </GridListTile>

        <GridListTile>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"> + </ListSubheader>
          <GridListTileBar
            title="+  PROFESSIONAL EXPERIENCE"
            actionIcon={
              <FontAwesomeIcon icon={faLaptopCode}  size="lg"/>
            }
          />
        </GridListTile>
        {jobData.map((tile) => (
        <Card className={classes.root} variant="outlined" key={tile.title}>
            <CardMedia>
              <Lottie options={projOptions} height={100} width={100} />
            </CardMedia>
            <div className={classes.details}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {tile.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {tile.subtitle}
                </Typography>
              </CardContent>
            </div>
          </Card>
        ))}

          {/* <GridListTileBar
            title="PROFESSIONAL EXPERIENCE"
            actionIcon={
              <FontAwesomeIcon icon={faLaptopCode}  size="lg"/>
            }
          /> */}
        </GridListTile>
        <GridListTile>  
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"> + </ListSubheader>
          <GridListTileBar
            title="+  Certifications"
            actionIcon={
              <FontAwesomeIcon icon={faMedal}  size="lg"/>
            }
          />
        </GridListTile>        
        {certificationData.map((tile) => (
        <Card className={classes.root} variant="outlined" key={tile.title}>
            <CardMedia>
              <Lottie options={medalOptions} height={100} width={100} />
            </CardMedia>
            <div className={classes.details}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {tile.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {tile.subtitle}
                </Typography>
              </CardContent>
            </div>
          </Card>
        ))}

          
        </GridListTile>
      </GridList>
    </div>
  );
}
