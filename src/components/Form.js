import React from "react";
import "./form.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search Breed:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in the breed name to begin"
          id="breed"
        />
         <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;