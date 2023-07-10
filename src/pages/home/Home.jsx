import React, { useState } from "react";
import Order from "./order/Order";
import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { createTheme, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/mainbg.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    height: "75vh",
  },
  toolbar: {
    paddingLeft: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    marginRight: "33rem",
    cursor: "pointer",
  },
  navContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 20,
  },
  maintitle: {
    textAlign: "center",
    fontSize: 80,
    fontWeight: "bolder",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    marginLeft: "10rem",
    marginTop: "1rem",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    width: "70%",
  },
  locateIcon: {
    color: "#e85499",
  },
  arrowIcon: {
    color: "gray",
  },
  SearchIcon: {
    marginRight: theme.spacing(1),
    color: "gray",
  },
  categoryCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 40,
  },
  catMainCard: {
    "&:hover": {
      cursor: "pointer",
      transform: `scale(${1.1})`,
      transition: "transform 0.6s ease",
    },
  },
  collectionContainer: {
    marginTop: 70,
  },
  collectionCardContainer: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  collectionCard: {
    height: 300,
    width: 260,
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      transform: `scale(${1.1})`,
      transition: "transform 0.6s ease",
    },
  },
  placeContainer:{
    display:"flex",
    flexWrap:'wrap',
  },
  placeCard: {
    display: "flex",
    flexDirection: "row",
    width: "25rem",
    height: "6rem",
    margin:'2rem',
    cursor:'pointer',
    '&:hover':{
      boxShadow:`${theme.shadows[4]}`,
    }
  },
  getAppContainer : {
    width:'100%',
    height:'17rem',
    backgroundColor:'rgb(255,251,247)',
    display:'flex',
    justifyContent:'space-around'
  },
  mobiImage : {
    display:'none',
    [theme.breakpoints.up('sm')] : {
      display:'block'
    }
  },
  formContainer : {
    textAlign:'center',
    paddingTop:'2rem',
    marginRight:'3rem'
  },

}));
const theme = createTheme({
  palette: {
    primary: {
      main: "#6200ee",
    },
    secondary: {
      main: "#03dac6",
    },
    // Other color definitions
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: 14,
    // Other typography settings
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
const Home = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [selectedRadio , setSelectedRadio] = useState('Email')
  const navigate  = useNavigate()
  console.log(selectedRadio)
  const moodCategory = [
    {
      id: 1,
      title: "Order Online",
      description: "Stay home and order to your doorstep",
      path: `${process.env.PUBLIC_URL}/assets/order.png`,
    },
    {
      id: 2,
      title: "Dining",
      description: "View the city favourite dining venues",
      path: `${process.env.PUBLIC_URL}/assets/dinning.png`,
    },
    {
      id: 3,
      title: "Nightlife and Clubs",
      description: "Explore the city top nightlife outlets",
      path: `${process.env.PUBLIC_URL}/assets/nightlife.png`,
    },
  ];
  const collectionCard = [
    {
      id: 1,
      title: "11 best insta-worthy places",
      placeCount: 11,
      path: `${process.env.PUBLIC_URL}/assets/worthy.jpg`,
    },
    {
      id: 2,
      title: "16 best bars & pubs",
      placeCount: 14,
      path: `${process.env.PUBLIC_URL}/assets/pub.jpg`,
    },
    {
      id: 3,
      title: "13 serene rooftop places",
      placeCount: 11,
      path: `${process.env.PUBLIC_URL}/assets/rooftop.jpeg`,
    },
    {
      id: 4,
      title: "12 newly opened restaurants",
      placeCount: 8,
      path: `${process.env.PUBLIC_URL}/assets/new.jpg`,
    },
  ];
  const placeCard = [
    { id: 1, city: "Baner", placeCount: 528 },
    { id: 2, city: "Viman Nagar", placeCount: 512 },
    { id: 3, city: "Hinjwadi", placeCount: 836 },
    { id: 4, city: "Koregaon Park", placeCount: 196 },
    { id: 5, city: "Wakad", placeCount: 706 },
    { id: 6, city: "Kothrud", placeCount: 629 },
    { id: 7, city: "Kalayni Nagar", placeCount: 134 },
    { id: 8, city: "Kharadi", placeCount: 605 },
  ];
  const handleCardClick = () => {
    navigate('/order')
  }
  return (
    <ThemeProvider theme={theme}>
      <>
      <Container className={classes.container}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Container className={classes.navContainer}>
            <Typography className={classes.title}>Get the App</Typography>
            <Typography style={{ cursor: "pointer" }}>
              Investor Relations
            </Typography>
            <Typography style={{ cursor: "pointer" }}>
              Add Restaurant
            </Typography>
            <Typography style={{ cursor: "pointer" }}>{"Siddeek"}</Typography>
          </Container>
        </Toolbar>
        <Typography className={classes.maintitle}>Zomato</Typography>
        <Typography
          style={{ textAlign: "center", fontWeight: "bold", fontSize: 40 }}
        >
          Discover the best food & drinks in pune
        </Typography>
        {/* Search feild */}
        <div className={classes.searchContainer}>
          <LocationOnIcon className={classes.locateIcon} />
          <TextField placeholder={"pune"} aria-readonly/>
          <ArrowDropDownIcon className={classes.arrowIcon} />
          <span style={{ color: "gray" }}>|</span>
          <SearchIcon className={classes.SearchIcon} />
          <TextField
            placeholder="Search for a restaurant cuisine or a dish"
            fullWidth
          />
        </div>
      </Container>
      {/*category Card  */}
      <Container className={classes.categoryCard}>
        {moodCategory.map((item) => {
          return (
            <Card className={classes.catMainCard} key={item.id} onClick={handleCardClick}>
              <CardActionArea>
                <CardMedia image={item.path} style={{ height: 140 }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component={"h2"}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component={"p"}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Container>
      {/* collections */}

      <Container className={classes.collectionContainer}>
        <Typography variant="h4" style={{ marginLeft: "3rem" }}>
          Collections
        </Typography>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <Typography style={{ marginLeft: "2rem" }}>
            Explore curated lists of to restaurants, cafes, pubs and bars in{" "}
            {"pune"} based on trends{" "}
          </Typography>
          <Typography
            style={{ color: "red", display: "flex", alignItems: "center" }}
          >
            All collections in pune <ArrowRightIcon />
          </Typography>
        </span>
        {/* collection card  container*/}
        <Container className={classes.collectionCardContainer}>
          {collectionCard.map((item) => {
            return (
              // collection Card
                <Card
                  key={item.id}
                  style={{
                    background: `url(${item.path})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className={classes.collectionCard}
                >
                  <Typography style={{ marginTop: "15rem" }}>
                    {item.title}
                  </Typography>
                  <Typography style={{ display: "flex" }}>
                    {item.placeCount} Places <ArrowRightIcon />{" "}
                  </Typography>
                </Card>
            );
          })}
        </Container>
      </Container>
      <Container>
        <Typography component={"h2"} style={{ fontSize: "2em",marginLeft:'3.5rem',marginTop:'2rem' }}>
          Popular lacalities in and around <b>Pune</b>
        </Typography>
        <Container className={classes.placeContainer}>
          {placeCard.map((item) => {
            return (
              <Card key={item.id} className={classes.placeCard}>
                <span style={{marginLeft:'1.5em',marginTop:'1.5em'}}>
                  <Typography><b>{item.city}</b></Typography>
                  <Typography>{item.placeCount} Places</Typography>
                </span>
                <span style={{marginLeft:'15rem',marginTop:'2.5rem'}}><ArrowRightIcon/> 
                </span>
              </Card>
            );
          })}
        </Container>
        {/* get Zomato app */}
        <Container className={classes.getAppContainer}>
        { 
         !isMobile && (  
         <Container >
          <img 
           src={`${process.env.PUBLIC_URL}/assets/mobi.png`}
           alt="Mob" 
           height={300}
           className={classes.mobiImage} 
            /> 
          </Container>
         )
        }
         {/* form container */}
         <Container className={classes.formContainer}>
          <Typography component={'h2'} style={{fontSize:'2rem'}}>Get the Zomato App</Typography>
          <Typography component={'p'}>We will send you a link , open it on your phone to download the app</Typography>
          <FormControlLabel
           value={'Email'}
           control={<Radio/>}
           label={'Email'}
           checked={selectedRadio === 'Email'}
           onChange={()=>setSelectedRadio('Email')}
           />
          <FormControlLabel
           value={'phone'}
           control={<Radio/>}
           label={'Phone Number'}
           checked={selectedRadio === 'phone'}
           onChange={()=>setSelectedRadio('phone')}
         />
            <br />
          <span style={{
            display:'flex'
          }}>
          <input type="text" name="Email" placeholder={selectedRadio} style={{padding:'0.7rem',borderRadius:'5px',width:'20rem', fontSize:'1.5rem'}} />
          <Button variant='contained' style={{backgroundColor:'rgb(239,79,95)',padding:'1 2rem', color:'#fff',marginLeft:'0.9rem'}}>Share App Link</Button>
          </span>
         </Container>
        </Container>
      </Container>
    </>
    </ThemeProvider>
  );
};

export default Home;

//bg-color rgb(255, 251, 247