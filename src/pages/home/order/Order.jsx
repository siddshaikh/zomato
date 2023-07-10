import {
  Card,
  Container,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Delivery from "./componets/Delivery";
import Dining from "./componets/Dining";
import Nightlife from "./componets/Nightlife";
import { myContext } from "../../../Context/context";
import FullPrpoduct from "../../../compo/FullPrpoduct";
const useStyles = makeStyles((theme) => ({
  navContainer: {
    display: "flex",
    alignItems: "center",
  },
  linkRoute: {
    textDecoration: "none",
    color: "gray",
  },
  navTitle: {
    fontSize: "2rem",
    color: "black",
    fontWeight: 1000,
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    marginLeft: "10rem",
    marginTop: "1rem",
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    width: "50rem",
  },
  searchCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "3rem",
  },
  locateIcon: {
    color: "#e85499",
  },
  mainCatContainer: {
    display: "flex",
    alignItems: "center",
    width: "80vw",
    marginLeft: 0,
    marginTop: "1rem",
  },
  categoryItem: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "border-bottom-color 0.3s ease",
    padding: "1rem",
  },
}));
const Order = () => {
  const classes = useStyles();
  const [activeCategory, setActiveCategory] = useState("delivery");
  const { productInfo } = useContext(myContext);
  return (
    <>
      {/* Nav Conatiner */}
      <Container className={classes.navContainer}>
        <Link to={"/"} className={classes.linkRoute}>
          <Typography component={"h1"} className={classes.navTitle}>
            Zomato
          </Typography>
        </Link>
        <Container className={classes.searchContainer}>
          <Card className={classes.searchCard}>
            <LocationOnIcon className={classes.locateIcon} />
            <TextField placeholder={"pune"} aria-readonly />
            <ArrowDropDownIcon className={classes.arrowIcon} />
            <span style={{ color: "gray" }}>|</span>
            <SearchIcon className={classes.SearchIcon} />
            <TextField
              placeholder="Search for a restaurant cuisine or a dish"
              fullWidth
            />
          </Card>
        </Container>
        <Typography component={"h2"} style={{ display: "flex" }}>
          user <ArrowDropDownIcon />
        </Typography>
      </Container>
      {/* Navigation Links */}
      <Typography>
        <Link to={"/"} className={classes.linkRoute}>
          Home
        </Link>{" "}
        /{" "}
        <Link to={"/order"} className={classes.linkRoute}>
          order
        </Link>
      </Typography>
      {productInfo === true ? (
        <FullPrpoduct />
      ) : (
        <>
          {/* main category */}
          <Container className={classes.mainCatContainer}>
            <span
              component={"h2"}
              style={{
                borderBottom:
                  activeCategory === "delivery"
                    ? "3px solid rgb(255, 126, 139)"
                    : "none",
                color:
                  activeCategory === "delivery" ? "rgb(255, 126, 139)" : "gray",
              }}
              className={classes.categoryItem}
              onClick={() => setActiveCategory("delivery")}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/order/scooter.png`}
                alt="scooter"
                height={50}
              />
              <Typography style={{ marginLeft: "1rem", fontSize: "1.5em" }}>
                Delivery
              </Typography>
            </span>
            <span
              component={"h2"}
              style={{
                borderBottom:
                  activeCategory === "dining"
                    ? "3px solid rgb(255, 126, 139)"
                    : "none",
                color:
                  activeCategory === "dining" ? "rgb(255, 126, 139)" : "gray",
                marginLeft: "7rem",
              }}
              className={classes.categoryItem}
              onClick={() => setActiveCategory("dining")}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/order/Dinn.png`}
                alt="dining"
                height={50}
              />
              <Typography style={{ marginLeft: "1rem", fontSize: "1.5em" }}>
                Dining Out
              </Typography>
            </span>
            <span
              component={"h2"}
              style={{
                borderBottom:
                  activeCategory === "nightlife"
                    ? "3px solid rgb(255, 126, 139)"
                    : "none",
                color:
                  activeCategory === "nightlife"
                    ? "rgb(255, 126, 139)"
                    : "gray",
                marginLeft: "7rem",
              }}
              className={classes.categoryItem}
              onClick={() => setActiveCategory("nightlife")}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/order/Dinn.png`}
                alt="nightlife"
                height={50}
              />
              <Typography style={{ marginLeft: "1rem", fontSize: "1.5em" }}>
                Nightlife
              </Typography>
            </span>
          </Container>

          {/* conditionally rendering components based on activecategory */}
          {activeCategory === "delivery" && <Delivery />}
          {activeCategory === "dining" && <Dining />}
          {activeCategory === "nightlife" && <Nightlife />}
        </>
      )}
    </>
  );
};

export default Order;
