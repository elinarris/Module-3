import React, { Component } from "react";

class MemeGen extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomMemeImg = this.state.allMemeImgs[randomNum].url;
    this.setState({ randomImage: randomMemeImg });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGen;

// class MemeGen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       topText: "",
//       bottomText: "",
//       randomImage: "",
//       allMemeImages: [],
//       currentMeme: {
//         id: "",
//         url: "",
//       },
//       savedMemes: [],
//     };
//     this.saveMeme = this.saveMeme.bind(this);
//     this.deleteButton = this.deleteButton.bind(this);
//     this.editButton = this.editButton.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.randomizeImage = this.randomizeImage.bind(this);
//   }

//   randomizeImage() {
//     let index = Math.floor(Math.random() * this.state.allMemeImages.length);
//     this.setState({
//       randomImage: this.state.allMemeImages[index].url,
//       currentMeme: this.state.allMemeImages[index],
//     });
//   };

//   componentDidMount() {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((rawResponse) => {
//         return rawResponse.json();
//       })
//       .then((response) => {
//         const { memes } = response.data;
//         this.setState({ allMemeImages: memes });

//         this.randomizeImage();
//       });
//   }

//   handleChange(e) {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   saveMeme(event) {
//     event.preventDefault();
//     let meme = {
//       topText: this.state.topText,
//       bottomText: this.state.bottomText,
//       image: this.state.randomImage,
//       id: this.state.currentMeme.id,
//     };
//     this.setState((prevState) => {
//       return {
//         ...prevState,
//         topText: "",
//         bottomText: "",
//         savedMemes: [...prevState.savedMemes, meme],
//       };
//     });
//     this.randomizeImage();
//   }

//   deleteButton(memeId) {
//     let newArray = this.state.savedMemes.filter((meme) => memeId !== meme.id);
//     this.setState((prevState) => ({ ...prevState, savedMemes: newArray }));
//   }

//   editButton(passedMeme, stringOne, stringTwo) {
//     let newArr = this.state.savedMemes.map((meme) => {
//       if (passedMeme.id === meme.id) {
//         passedMeme.topText = stringOne;
//         passedMeme.bottomText = stringTwo;
//         return passedMeme;
//       } else {
//         return meme;
//       }
//     });
//     this.setState((prevState) => ({ ...prevState, savedMemes: newArr }));
//   }

//   render() {
//     const info = {
//       topText: this.state.topText,
//       bottomText: this.state.bottomText,
//       image: this.state.randomImage,
//       id: this.state.currentMeme.id,
//     };
//     const memes = this.state.savedMemes.map((eachMeme) => (
//       <Meme
//         handleChange={this.handleChange}
//         onSubmit={this.saveMeme}
//         info={eachMeme}
//         deleteButton={this.deleteButton}
//         editButton={this.editButton}
//         data={this.state}
//       />
//     ));
//     return { memes };
//   }
// }
