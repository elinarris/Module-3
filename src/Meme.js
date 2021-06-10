// import React from "react";

// function Meme(props) {
//   return (
//     <div className="grid-container">
//       <form onSubmit={props.saveMeme} className="meme-generator">
//         <input
//           name="topText"
//           placeholder="Top Text"
//           value={props.topText}
//           onChange={props.handleChange}
//         />

//         <input
//           name="bottomText"
//           placeholder="Bottom Text"
//           value={props.bottomText}
//           onChange={props.handleChange}
//         />

//         <button
//           className="buttons"
//           onClick={(e) => {
//             e.preventDefault();
//             props.randomizeImage();
//           }}
//         >
//           Refresh Meme Image
//         </button>

//         <button className="buttons" onClick={props.saveMeme}>
//           Save Meme
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Meme;
