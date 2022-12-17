import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Button } from '@mui/material';
import { useTheme } from "@mui/material/styles";

function Example(props)
{
    const theme = useTheme();
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            background: "#0000FF"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            background: "#00FF00"
        },
        {
            name: "Random Name #3",
            description: "Idiots everywhere",
            background: "#FF0000"
        }
    ]

    return (
        <Carousel
        indicatorIconButtonProps={{
            style: {
                color: theme.palette.primary.secondary
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                backgroundColor: theme.palette.primary
            }
        }}
        indicatorContainerProps={{
            style: {
                marginTop: '1rem',
            }
    
        }}
    >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Box sx={{ bgcolor: props.item.background, height: '50vh', width: '100%', p: '3.5rem' }}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton" variant="contained">
                Check it out!
            </Button>
        </Box>
    )
}

export default Example;