import React, { Component } from 'react';
import './InputList.css';



class InputList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          result: {
            value: "",
            touched: false
          },
          date: {
            value: "",
            touched: false
          },
          description: {
            value: "",
            touched: false
          }
        };
      }
    
      updateResult(result) {
        this.setState({result: { value: result, touched: true } });
      }
    
      updateDate(date) {
        this.setState({
          date: {value: date, touched: true }
        });
      }
    
      updateDescription(description) {
        this.setState({
          description: {
            value: description,
            touched: true
          }
        });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const { result, date, description} = this.state;
    
        console.log("result: ", result.value);
        console.log("date: ", date.value);
        console.log("description: ", description.value);
      }
    
    
    
    render() {
    
    return (
        <div>
        <h2>Enter Your Results</h2>
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="result">Result </label>
          <input
            type="number"
            className="registration__control"
            name="result"
            id="result"
            onChange={e => this.updateResult(e.target.value)}
          />
        
        </div>
        <div className="form-group">
          <label htmlFor="date">Date </label>
          <input
            type="number"
            className="registration__control"
            name="date"
            id="date"
            onChange={e => this.updateDate(e.target.value)}
          />
          <div className="registration__hint">
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="registration__control"
            name="description"
            id="description"
            onChange={e => this.updateDescription(e.target.value)}
          />
         
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button
            type="submit"
            className="registration__button"
          >
            Save
          </button>
        </div>
      </form>
      </div>
    );
  }
}

  export default InputList;
