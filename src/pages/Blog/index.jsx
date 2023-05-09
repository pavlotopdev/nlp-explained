import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import Footer from '../../containers/Footer';
import AppBarContainer from '../../containers/AppBarContainer';

const Blog = () => {
  const { path } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.url === path);
    if (blog) {
      setBlog(blog);
    }
  }, [path]);

  return (
    <>
      <AppBarContainer />
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <div className='blog-desc' 
            dangerouslySetInnerHTML={{ __html: blog.description }}>
          </div>
          <Footer />
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
