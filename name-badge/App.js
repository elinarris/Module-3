import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      faveFood: "",
      textarea: "",
      namebadgeEntries: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(event) {
    const { name, value, type } = event.target;
    this.setState({
      [name]: value,
    });
  }
  submit(e) {
    e.preventDefault();
    this.setState((prevState) => {
      const newEntry = {
        firstName: prevState.firstName,
        lastName: prevState.lastName,
        email: prevState.email,
        placeOfBirth: prevState.placeOfBirth,
        phone: prevState.phone,
        faveFood: prevState.faveFood,
        textarea: prevState.textarea,
      };

      return {
        namebadgeEntries: [...prevState.namebadgeEntries, newEntry],
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        faveFood: "",
        textarea: "",
      };
    });

    console.log(this.state);
  }

  render() {
    const allNameBadges = this.state.namebadgeEntries.map((badge) => (
      <div className="badge">
        <h1 className="badgeTitle">Hello {badge.firstName}!</h1>
        <div className="badgeOutput">
          <p>First Name: {badge.firstName}</p>
          <p>Last Name: {badge.lastName}</p>
          <p>Email: {badge.email}</p>
          <p>Place of Birth: {badge.placeOfBirth}</p>
          <p>Phone: {badge.phone}</p>
          <p>Favorite Food: {badge.faveFood}</p>
          <p>About Me: {badge.textarea}</p>
        </div>
      </div>
    ));

    return (
      <div className="App">
        
          <form className="form">

            <div className="divform">
              <input
                type="text"
                placeholder="First Name"
                onChange={this.handleChange}
                name="firstName"
              />
            

            
              <input
                type="text"
                placeholder="Last Name"
                onChange={this.handleChange}
                name="lastName"
              />
            

            
              <input
                type="text"
                placeholder="Email"
                onChange={this.handleChange}
                name="email"
              />
            

            
              <input
                type="text"
                placeholder="Place of Birth"
                onChange={this.handleChange}
                name="placeOfBirth"
              />
            

            
              <input
                type="text"
                placeholder="Phone"
                onChange={this.handleChange}
                name="phone"
              />
            

            
              <input
                type="text"
                placeholder="Favorite Food"
                onChange={this.handleChange}
                name="faveFood"
              />

            
              <textarea
                name="textarea"
                onChange={this.handleChange}
                type="text"
                placeholder="Tell us about yourself..."
              ></textarea>
            
            
              <button name="submit" onClick={this.submit}>
                Submit
              </button>


            </div>
          </form>
      

        <br />
        <br />

        {allNameBadges}
      </div>
    );
  }
}
export default App;
