import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Posts() {
  const {id} = useParams()

  useEffect(() => {
    async function fetchPosts() {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      console.log(data)
    }
    fetchPosts()
  }, [])
  return (
    <div>
      {id}
    </div>
  );
}

export default Posts;
