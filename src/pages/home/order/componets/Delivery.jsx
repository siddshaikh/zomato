import {
  Button,
  Card,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import TuneIcon from "@material-ui/icons/Tune";
import { myContext } from "../../../../Context/context";
import FilterPopup from "./subComponents/FilterPopup";
import StarIcon from "@material-ui/icons/Star";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  filterContaner: {
    display: "flex",
    marginTop: "2.5rem",
  },
  blurredBackground: {
    filter: "blur(5px)",
  },
  foodList: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "1rem",
  },
  foodItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  foodItemName: {
    cursor: "pointer",
    fontSize: "1.5rem",
    marginTop: "1rem",
    color: "dark-gray",
  },
  mainFoodItems: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: "2rem",
  },
  foodImage: {
    width: 300,
    height: 250,
    objectFit: "cover",
    cursor: "pointer",
    "&:hover": {
      scale: 1.1,
      transition: "1s ease",
    },
  },
  nameAndRateRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  foodName: {
    color: "black",
    fontWeight: 600,
  },
  ratingBox: {
    backgroundColor: "#228f38",
    borderRadius: "10px",
    padding: "0.2em",
    display: "flex",
    color: "#fff",
  },
  cateAndPriceRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "gray",
  },
  isVeganBox: {
    width: "100%",
    color: "#fff",
    textAlign: "center",
    backgroundColor: "green",
  },
}));
const Delivery = () => {
  const classes = useStyles();
  const {
    showFilter,
    setShowFilter,
    data,
    isVegFilter,
    setIsVegFilter,
    highratedFilter,
    setHighratedFilter,
    selectedValue,
    popupFilterCategory,
    setSelectedProduct,
    setProductInfo,
  } = useContext(myContext);
  const [filterData, setFilterData] = useState(data);
  const navigate = useNavigate()
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const handleIsVegFilter = () => {
    setIsVegFilter((prevState) => !prevState);
  };

  const handleIsHighratedFilter = () => {
    setHighratedFilter((prevState) => !prevState);
  };
  useEffect(() => {
    let filtered = data;
    if (isVegFilter) {
      filtered = filtered.filter((element) => element.isVegan === true);
    }
    if (highratedFilter) {
      filtered = filtered.filter((element) => element.rating > 4);
    }
    if (selectedValue === "option1") {
    } else if (selectedValue === "option2") {
      //Apply filter for option 2 (rating high to low)
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (selectedValue === "option3") {
      // Apply Filter For Option 3 (price high to low)
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (selectedValue === "option4") {
      //apply filter for option 4 (price low to high)
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
    setFilterData(filtered);
  }, [data, isVegFilter, highratedFilter, selectedValue]);
  useEffect(() => {
    if (popupFilterCategory === true) {
      setFilterData(data);
    }
  }, [popupFilterCategory]);
  const handleSelectedProduct = (productId) => {
    const clickedProduct = filterData.find(
      (element) => element.id === productId
    );
    setSelectedProduct(clickedProduct);
    setProductInfo(true);
  };
  return (
    <>
      {/* filter items */}
      <Container
        className={`${classes.filterContaner} ${
          showFilter ? classes.blurredBackground : ""
        }`}
      >
        <Button variant="outlined" onClick={toggleFilter}>
          <TuneIcon /> Filters
        </Button>
        <Button
          variant="outlined"
          style={{
            marginLeft: "1rem",
            backgroundColor: highratedFilter === true ? "rgb(255,126,139)" : "",
          }}
          onClick={handleIsHighratedFilter}
        >
          Rating: 4.0+
        </Button>
        <Button
          variant="outlined"
          style={{
            marginLeft: "1rem",
            backgroundColor: isVegFilter === true ? "rgb(255, 126, 139)" : "",
          }}
          onClick={handleIsVegFilter}
        >
          Pure Veg
        </Button>
        <Button variant="outlined" style={{ marginLeft: "1rem" }}>
          Cuisins <ArrowDropDownIcon />
        </Button>
      </Container>
      {/* filter popup */}
      {showFilter && <FilterPopup />}
      {/* Food type carousel */}
      <Container>
        <Typography
          component={"h2"}
          style={{ marginTop: "2rem", fontSize: "2rem", color: "gray" }}
        >
          Inspiration for your first order
        </Typography>
        {/* food list and their pictures */}
        <Container className={classes.foodList}>
          <span className={classes.foodItem}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/order/delivery/biryani.png`}
              alt="Biryani"
              height={150}
            />
            <Typography className={classes.foodItemName}>Biryani</Typography>
          </span>
          <span className={classes.foodItem}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/order/delivery/burger.png`}
              alt="Burger"
              height={150}
              style={{ marginLeft: "1.5rem" }}
            />
            <Typography className={classes.foodItemName}>Burger</Typography>
          </span>
          <span className={classes.foodItem}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/order/delivery/chicken.png`}
              alt="Chicken"
              height={150}
              style={{ marginLeft: "1.5rem" }}
            />
            <Typography className={classes.foodItemName}>Chicken</Typography>
          </span>
          <span className={classes.foodItem}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/order/delivery/pizza.png`}
              alt="Pizza"
              height={150}
              style={{ borderRadius: "50%", marginLeft: "1.5rem" }}
            />
            <Typography className={classes.foodItemName}>Pizza</Typography>
          </span>
          <span className={classes.foodItem}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/order/delivery/sandwich.png`}
              alt="Sandwich"
              height={150}
              style={{ borderRadius: "50%", marginLeft: "1.5rem" }}
            />
            <Typography className={classes.foodItemName}>Sandwich</Typography>
          </span>
          <span className={classes.foodItem}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/order/delivery/thali.png`}
              alt="Thali"
              height={150}
              style={{ borderRadius: "50%", marginLeft: "1.5rem" }}
            />
            <Typography className={classes.foodItemName}>Thali</Typography>
          </span>
        </Container>
        {/* foods */}
        <Container className={classes.mainFoodItems}>
          {filterData?.map((element) => {
            return (
              <Card
                key={element.id}
                style={{ marginTop: "1rem", cursor: "pointer" }}
                onClick={() => handleSelectedProduct(element.id)}
              >
                <img
                  src={element.path}
                  alt={element.name}
                  className={classes.foodImage}
                />
                <span className={classes.nameAndRateRow}>
                  <Typography className={classes.foodName}>
                    {element.name}
                  </Typography>
                  <Typography
                    className={classes.ratingBox}
                    style={{
                      backgroundColor: element.rating > 1 ? "green" : "gray",
                    }}
                  >
                    {element.rating}.{Math.floor(Math.random() * 5)}
                    <StarIcon />
                  </Typography>
                </span>
                <span className={classes.cateAndPriceRow}>
                  <Typography>{element.category}</Typography>
                  <Typography>{element.price}₹</Typography>
                </span>
                <Typography
                  className={classes.isVeganBox}
                  style={{
                    backgroundColor:
                      element.isVegan === true
                        ? "#8bfa7a"
                        : "rgb(255, 126, 139)",
                  }}
                >
                  {element.isVegan === true ? "Pure Veg" : "Non Veg"}
                </Typography>
              </Card>
            );
          })}
        </Container>
      </Container>
    </>
  );
};

export default Delivery;
