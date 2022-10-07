import React from "react";
import '../App.css'
import InfiniteScroll from "react-infinite-scroll-component";

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

import films from '../api/movies.json';

import { 
  Container, 
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box
 } from '@mui/material';
import { AppContext } from "./AppContext";

class MoviesList extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 22) {
      this.setState({ hasMore: false });
      return;
    }

    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 2000);
  };
  
  static contextType = AppContext;
  render() {

    const handleOpenFilmInfo = this.props.handleOpenFilmInfo;
    const setSelectedFilm = this.props.setSelectedFilm;
    const authUser = this.context.authUser;
    return (
      <div>
        <Box >
          <InfiniteScroll
            className="grid"
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4  style={{ textAlign: "center", gridColumnStart: "1", gridColumnEnd: "3" }}>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center", gridColumnStart: "1", gridColumnEnd: "3" }}>
                <b> You you have watched all the movies</b>
              </p>
            }
          >
          {this.state.items.map((i, index) => (
            <Container key={films[index].imdbID} style={{maxWidth: "420px"}}>
              <Card style={{ textAlign: "center"}}>
                <CardMedia
                  component="img"
                  height="550"
                  image={films[index].Poster}
                  alt={films[index].Title}
                />
                  {authUser && (
                <CardContent style={{ textAlign: "start"}}>
                  <Typography variant="h5" style={{position: "absolute", transform: "translateY(-250px)", 
                  color: "white",  maxWidth: "300px"}}>
                    {films[index].Title}
                  </Typography>
                  <Typography >
                    {'Genre:'} 
                    {' '}
                    {films[index].Genre}
                  </Typography>
                  <Typography>
                    {`Director: ${films[index].Director}`}
                  </Typography>
                  <Typography marginBottom={2}>
                    {'Year:'}
                    {' '}
                    {films[index].Year}
                  </Typography>
                  <CardActions style={{ padding: "0px"}} >
                    <Button 
                      onClick={() => {
                        handleOpenFilmInfo();
                        setSelectedFilm(films[index]);
                      }
                        } 
                      style={{backgroundColor: '#DC143C', marginRight: "20px"}} variant="contained">
                      Show more
                      <InfoOutlinedIcon color="inherit" />
                    </Button>
                    { 
                    films[index].imdbRating > 7 
                      ? <ThumbUpOutlinedIcon style={{color: '#2e7d32'}}/> 
                      : <ThumbDownOutlinedIcon style={{color: '#dd2c00'}}/> 
                    }
                  </CardActions>
                </CardContent>
              )}
              </Card>

            </Container>
          ))}
        </InfiniteScroll>
        </Box>

      </div>
    );
  }
}

export default MoviesList;

