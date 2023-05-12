import React from "react";
import "./styles.css";
import Grid from "@mui/material/Grid";
import AppBarContainer from "../../../containers/AppBarContainer";
import SearchBar from "../SearchBar";
import { useMediaQuery } from "@mui/material";

function Header(props) {
  //const [blogs, setBlogs] = React.useState(blogList);
  const [searchKey, setSearchKey] = React.useState("");
  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    props.onSetSearch(searchKey);
  };
  // Clear search and show all blogs
  const handleClearSearch = () => {
    //setBlogs(blogList);
    setSearchKey("");
  };

  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <header className="home-header">
      <AppBarContainer />
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={12} sm={12} md={7}>
          <h2>»»——— ★ ———««</h2>
          <h1>Demystifying Natural Language Processing</h1>
          <p>
            From foundations to advanced techniques <br />
            Everything you need to know about NLP explained in less than 300
            words
          </p>
          <SearchBar
            value={searchKey}
            clearSearch={handleClearSearch}
            formSubmit={handleSearchBar}
            handleSearchKey={(e) => setSearchKey(e.target.value)}
          />
        </Grid>
        {isSmallScreen ? null : (
          <Grid item xs={12} sm={12} md={5}>
            <img src="/assets/images/robot.png" alt="Logo" width="100%" />
          </Grid>
        )}
      </Grid>
    </header>
  );
}

export default Header;
