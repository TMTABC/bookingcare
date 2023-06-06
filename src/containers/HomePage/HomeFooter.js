import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {
  render() {
    return (
      <div className="homefooter">
        <p>
          &copy; 2023 TMT done.{" "}
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=03yf3iCbXLQ&list=PLn-YxAuZySA0lsN-uQmZPgG1u3hD1IJLg&index=39&ab_channel=VietsubM%E1%BB%97iNg%C3%A0y"
          >
            That's Hilarious
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
