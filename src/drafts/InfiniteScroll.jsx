// import { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import films from '../api/movies.json';

// const style = {
//   height: 30,
//   border: "1px solid green",
//   margin: 6,
//   padding: 8
// };

// export const LoadMovies = () => {
//   const [items, setItems] = useState(Array.from({ length: 20 }));
//   const [hasMore, setHasMore] = useState(true);

//   console.log(items);

//   const fetchMore = () => {
//     if (items.length >= 22) {
//       setHasMore(false);
//       return;
//     }

//     setTimeout(() => {
//       setItems(prev => (prev.concat(Array.from({ length: 20 }))
//       ))
//     }, 2000)
//   }

//   return (
//     <div>
//       <h1>demo: react-infinite-scroll-component</h1>
//       <hr />
//       <InfiniteScroll
//       dataLength={items.length}
//       next={fetchMore()}
//       hasMore={hasMore}
//       loader={<h4>Loading...</h4>}
//       endMessage={
//         <p style={{ textAlign: "center" }}>
//           <b>Yay! You have seen it all</b>
//         </p>
//       }
//       >
//         {films.map((el, index) => {
//           return (
//               <div style={style} key={el.imdbID}>
//               div - #{index + 1}
//               {el.Title}
//             </div>
//           )
//         })}

//       </InfiniteScroll>
//     </div>
//   )
// }


