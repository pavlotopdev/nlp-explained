import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import { blogList } from '../../config/data';
import Footer from '../../containers/Footer';
import { Pagination } from '@mui/material';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [page, setPage] = useState(1);

  const postsPerPage = 9;
  const totalPosts = blogs.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const displayedPosts = blogs.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value)}

  function handleBlogChange(blogs){
    setBlogs(blogs)}

  return (
    <div>
      {/* Page Header */}
      <Header onBlogChange={handleBlogChange} />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={displayedPosts} />}

      {/* Pagination */}
      <div sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination 
          count={totalPages} 
          page={page} 
          onChange={handlePageChange}
          size="large"
          color="primary"
          showFirstButton
          showLastButton
          sx={{ '& ul': { justifyContent: 'center', marginTop: "4rem" } }} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
