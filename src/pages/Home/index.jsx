import React, { useEffect, useState } from "react";
import axios from "axios";

import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import Footer from "../../containers/Footer";
import { Pagination } from "@mui/material";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`/api/blogs?page=${page}&search=${search}`).then(({ data }) => {
      setBlogs(data.blogs);
      setTotalPages(data.total_page);
    });
  }, [page, search]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  function handleBlogChange(blogs) {
    setBlogs(blogs);
  }

  return (
    <div>
      {/* Page Header */}
      <Header onBlogChange={handleBlogChange} onSetSearch={setSearch} />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      {/* Pagination */}
      <div sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          size="large"
          color="primary"
          showFirstButton
          showLastButton
          sx={{ "& ul": { justifyContent: "center", marginTop: "4rem" } }}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
