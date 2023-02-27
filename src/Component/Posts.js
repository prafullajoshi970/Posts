import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Posts() {
    const [data, setData] = useState([]);
    const ApiFetch = () => {
        fetch("https://dummyjson.com/posts")
            .then(resp => resp.json())
            .then(data => (setData(data.posts)))
            .catch(error => console.error(error));
        console.log(data.posts)
    }

    useEffect(() => {
        ApiFetch();
    })

    console.log(data);

    return (

        <div id="container">
            <h2>POSTS</h2>
            {data.length > 0 && (
                <>
                    {data.map(post => (

                        <div className='card'>

                            <Card sx={{ maxWidth: 345 }}>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {post.title} </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {post.body}</Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small">{post.tags + " "}</Button>
                                    <Button size="small">{"🤔" + post.reactions}</Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </>
            )}
        </div>

    );
}

export default Posts;
