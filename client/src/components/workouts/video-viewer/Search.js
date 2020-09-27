import React from 'react';

class Search extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  };

  render() {
    return (
      <div className="search-bar ui segment workout-video-search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div>
            {/* <label>Search Videos</label> */}
            <input
              className="form-control"
              type="text"
              placeholder="&#128269; &nbsp;search &amp; scroll below"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>

    )
  }
}

export default Search;
