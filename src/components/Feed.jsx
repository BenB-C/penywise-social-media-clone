import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import NewCardForm from './NewCardForm'

class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feedList: [
        {
          name: "Tim",
          url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
          body: "A functioning, production-ready application would contain an ever-changing list of tickets, cycling through each to dynamically render their unique information in the queue.",
        },
        {
          name: "Lenny",
          url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
          body: "A functioning, production-ready application would contain an ever-changing list of tickets, cycling through each to dynamically render their unique information in the queue.",
        },
        {
          name: "Clem",
          url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
          body: "A functioning, production-ready application would contain an ever-changing list of tickets, cycling through each to dynamically render their unique information in the queue.",
        },
        {
          name: "Ringo",
          url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
          body: "A functioning, production-ready application would contain an ever-changing list of tickets, cycling through each to dynamically render their unique information in the queue.",
        },
        {
          name: "Cletus",
          url: "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif",
          body: "A functioning, production-ready application would contain an ever-changing list of tickets, cycling through each to dynamically render their unique information in the queue.",
        }
      ]
    };
    this.handleNewCardFormSubmission = this.handleNewCardFormSubmission.bind(this);
  }

  handleNewCardFormSubmission(newCard) {
    const newFeedList = this.state.feedList.slice();
    newFeedList.unshift(newCard)
    this.setState({feedList: newFeedList});
  }

  render() {
    return (
      <div>
      <h3>What's happening?</h3>
      <div><NewCardForm onCardCreation={this.handleNewCardFormSubmission}/></div>
       {this.state.feedList.map((card) =>

         <Card name={card.name}
           url={card.url}
           body={card.body}
           key={card.id}/>
       )}
      </div>
    );
  }

}


export default Feed
