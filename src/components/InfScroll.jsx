import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

import films from '../api/movies.json'

import Grid from '@mui/material/Grid';
import { 
  Container, 
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
 } from '@mui/material';
import { AppContext } from "./AppContext";

class InfScroll extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };

  static contextType = AppContext;

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
  
  render() {
    const handleOpenFilmInfo = this.props.handleOpenFilmInfo;
    const setSelectedFilm = this.props.setSelectedFilm;
    const authUser = this.context;
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.items.map((i, index) => (
            <div  key={films[index]}>
              <Container  style={{ maxWidth: "800px"}}>
              <Grid 
              container 
              spacing={{ xs: 2, md: 3 }} 
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
                <Grid  key={films[index].imdbID} item xs={6} >
                  <Card >
                        <CardMedia
                         style={{ backgroundColor: " rgba(0,0,0,.3)"}}
                          component="img"
                          height="550"
                          image={films[index].Poster}
                          alt={films[index].Title}
                        />
                        {authUser && (
                          <CardContent>
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
                </Grid>
            </Grid>

              </Container>

            </div>
          //   <Container key={card.imdbID} style={{ maxWidth: "800px"}}>
          //   <Grid 
          //     container 
          //     spacing={{ xs: 2, md: 3 }} 
          //     columns={{ xs: 4, sm: 8, md: 12 }}
          //   >
          //     {films.map((card) => (
          //       <Grid  key={card.imdbID} item xs={6} >
          //         <Card >
          //               <CardMedia
          //                style={{ backgroundColor: " rgba(0,0,0,.3)"}}
          //                 component="img"
          //                 height="550"
          //                 image={card.Poster}
          //                 alt={card.Title}
          //               />
          //               {authUser && (
          //                 <CardContent>
          //                   <Typography variant="h5" style={{position: "absolute", transform: "translateY(-250px)", 
          //                   color: "white",  maxWidth: "300px"}}>
          //                     {card.Title}
          //                   </Typography>
          //                   <Typography >
          //                     {'Genre:'} 
          //                     {' '}
          //                     {card.Genre}
          //                   </Typography>
          //                   <Typography>
          //                     {`Director: ${card.Director}`}
          //                   </Typography>
          //                   <Typography marginBottom={2}>
          //                     {'Year:'}
          //                     {' '}
          //                     {card.Year}
          //                   </Typography>
          //                   <CardActions style={{ padding: "0px"}} >
          //                     <Button 
          //                       onClick={() => {
          //                         handleOpenFilmInfo();
          //                         setSelectedFilm(card);
          //                       }
          //                         } 
          //                       style={{backgroundColor: '#DC143C', marginRight: "20px"}} variant="contained">
          //                       Show more
          //                       <InfoOutlinedIcon color="inherit" />
          //                     </Button>
          //                     { 
          //                     card.imdbRating > 7 
          //                       ? <ThumbUpOutlinedIcon style={{color: '#2e7d32'}}/> 
          //                       : <ThumbDownOutlinedIcon style={{color: '#dd2c00'}}/> 
          //                     }
          //                   </CardActions>
          //                 </CardContent>
          //               )}
          //         </Card>
          //       </Grid>
          //     ))}
          //   </Grid>
          // </Container>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default InfScroll;

