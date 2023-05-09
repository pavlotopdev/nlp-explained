import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from '@mui/material';
import Chip from '../../../common/Chip';
import './styles.css';
import { useHistory } from 'react-router-dom';


const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    cover,
    category,
    id,
    url,
  },
}) => {
  const history = useHistory();
  return (
    
    <div className='blogItem-wrap'>
      <Button sx={{p: 0}} onClick={()=>history.push(`/${url}`)}>
      <img className='blogItem-cover' src={cover} alt='cover' />
      </Button>

      <Grid sx={{ px: 1 }}><Chip label={category} /></Grid>

      <Link onClick={()=>history.push(`/${url}`)} style={{cursor: "pointer"}} underline="none"><h3>{title}</h3></Link>

      <p className='blogItem-desc'>{description.replace('<p>', '')}</p>
      
      <footer>
        <div className='blogItem-author'>
          <p>{createdAt}</p>
        </div>     
      </footer>      
    </div>
  );
};

export default BlogItem;
