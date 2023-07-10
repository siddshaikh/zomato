import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { myContext } from "../../../../../Context/context";

const useSyles = makeStyles((theme) => ({
  filterPopup: {
    position: "absolute",
    width: "60%",
    top: "3rem",
    height: "75vh",
    right: 0,
    left: "3rem",
    background: "#fff",
    paddingTop: "1rem",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    zIndex: 999,
  },
  mainData: {
    display: "flex",
    justifyContent: "space-between",
  },
  filterRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  CloseIcon: {
    cursor: "pointer",
    fontSize: "2rem",
  },
  horizontalLine: {
    marginTop: "1rem",
  },
  categoryList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "1rem",
    height: "15rem",
    backgroundColor: "#f7f8fa",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: "1rem",
  },
}));
const FilterPopup = () => {
  const classes = useSyles();
  const { setShowFilter, selectedValue, setSelectedValue, popupFilterCategory,
    setPopupFilterCategory } =
    useContext(myContext);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleApply = () => {
    setShowFilter(false);
  };
  const handleClearAllFilter = () => {
    setSelectedValue("option1");
    setPopupFilterCategory(true);
  }
  return (
    <>
      {/* popup component */}
      <Container className={classes.filterPopup}>
        {/* close button and title row*/}
        <span className={classes.filterRow}>
          <Typography component={"h2"} style={{ fontSize: "2rem" }}>
            Filter
            {}
          </Typography>
          <CloseIcon
            className={classes.CloseIcon}
            onClick={() => setShowFilter(false)}
          />
        </span>
        <hr className={classes.horizontalLine} />
        <Container className={classes.mainData}>
          {/* filter category list */}
          <Container className={classes.categoryList}>
            <Typography component={"h3"} style={{ cursor: "pointer" }}>
              Sort by
            </Typography>
            <Typography
              component={"h3"}
              style={{ marginTop: "1.5rem", cursor: "pointer" }}
            >
              Cuisins
            </Typography>
            <Typography
              component={"h3"}
              style={{ marginTop: "1.5rem", cursor: "pointer" }}
            >
              Rating
            </Typography>
            <Typography
              component={"h3"}
              style={{ marginTop: "1.5rem", cursor: "pointer" }}
            >
              Cost per person
            </Typography>
          </Container>
          {/* filter category result */}
          <Container>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="options"
                name="options"
                value={selectedValue}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="Popularity"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Rating: High to Low"
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="Cost Low to High"
                />
                <FormControlLabel
                  value="option4"
                  control={<Radio />}
                  label="Cost High to Low"
                />
              </RadioGroup>
            </FormControl>
          </Container>
        </Container>
        <hr className={classes.horizontalLine} />
        {/* footer */}
        <span className={classes.footer}>
          <Button
            variant="outlined"
            style={{ cursor: "pointer" }}
            onClick={handleClearAllFilter}
          >
            Clear all
          </Button>
          <Button
            variant="outlined"
            style={{ backgroundColor: "rgb(255, 126, 139)", color: "#fff" }}
            onClick={handleApply}
          >
            Apply
          </Button>
        </span>
      </Container>
    </>
  );
};

export default FilterPopup;
