import logo from './logo.svg';
import './App.css';
import ResponsiveNavBar from './components/ResponsiveNavBar';
import ConditionalForm from './components/ConditionalForm';
import MediaCard from './components/MediaCard';
import SmallCard from './components/SmallCard';
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Container, Box, Stack, Radio, Rating, RadioGroup, FormControlLabel, FormControl, FormLabel, Switch, TextField, Button, Slider, ButtonGroup, Card, Checkbox, Accordion } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Example from './components/Example';

function App() {

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveNavBar />
        <Box sx={{mt: '3rem' }} >
          <Example />
        </Box>
        <Container sx={{mt: '2rem' }} >
        <Grid2 container justifyContent='center' rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          <Grid2>
            <MediaCard
              imageSrc={"/static/contemplative-reptile.jpg"}
              title={"Lizard"}
              content={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
              />
          </Grid2>
          <Grid2>
            <MediaCard
              imageSrc={"/static/contemplative-reptile.jpg"}
              title={"Frog"}
              content={"xs={2} sm={4} md={4} key={1} Lizards are a widespread group of squamate reptiles, with over 6,000 species"}
              />
          </Grid2>
          <Grid2>
            <MediaCard
              imageSrc={"/static/contemplative-reptile.jpg"}
              title={"Duck"}
              content={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
              />
          </Grid2>
          <Grid2>
            <MediaCard
              imageSrc={"/static/contemplative-reptile.jpg"}
              title={"Goat"}
              content={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
              />
          </Grid2>
          <Grid2>
            <MediaCard
              imageSrc={"/static/contemplative-reptile.jpg"}
              title={"Pig"}
              content={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
              />
          </Grid2>
          <Grid2>
            <SmallCard />
            <SmallCard />
          </Grid2>
        </Grid2>
        </Container>


      <Container sx={{mt: '5rem' }} >
      <ConditionalForm />
      <Button variant="outlined"><AddIcon /></Button>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{mt: '5rem' }} >
      <Button>Normal</Button>&nbsp;
      <Button variant="contained">Contained</Button>&nbsp;
      <Button variant="outlined">Outlined</Button>&nbsp;
      <Button variant="contained"><AddIcon /></Button>&nbsp;
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
      </Box>
      <div>
      <div>Well, do this: <code>Hello, World!</code></div>
      <Card>
        
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </Stack>
      </Card>
      </div>
      <div>
      <Checkbox></Checkbox>Like
      <Checkbox></Checkbox>Dislike
      </div>
      <img class="App-logo" src={logo} alt="Logo" />

      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
      </Box>

      <div>
        <Switch {...label} defaultChecked />
        <Switch {...label} />
      </div>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Carousel</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              https://learus.github.io/react-material-ui-carousel/
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      </Container>
      </ThemeProvider>
    </>
  );
  
}

export default App;