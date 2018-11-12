import React from "react";
import "./Form.css";
import TextField from "@material-ui/core/TextField";

const Form = props => (
  <div className="container EGA-whiteText">
    <form>
      <div className="form-group row has-warning EGA-whiteText">
        <label
          for="inputHorizontalWarning"
          className="col-sm-2 col-form-label EGA-whiteText"
        >
          Name
        </label>
        <div className="col-sm-10 EGA-whiteText">
          <input
            type="text"
            className="form-control form-control-warning EGA-whiteText"
            id="inputHorizontalWarning"
            placeholder="Your Name"
          />
        </div>
      </div>
      <div className="form-group row has-warning EGA-whiteText">
        <label
          for="inputHorizontalWarning"
          className="col-sm-2 col-form-label EGA-whiteText"
        >
          Email
        </label>
        <div className="col-sm-10 EGA-whiteText">
          <input
            type="email"
            className="form-control form-control-warning EGA-whiteText"
            id="inputHorizontalWarning"
            placeholder="name@example.com"
          />
        </div>
      </div>
      <div className="form-group row has-warning EGA-whiteText">
        <label
          for="inputHorizontalWarning"
          className="col-sm-2 col-form-label EGA-whiteText"
        >
          Question
        </label>
        <div className="col-sm-10 EGA-whiteText">
          <TextField
            className="EGA-textField"
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows="4"
            defaultValue="Default Value"
            margin="normal"
          />
        </div>
      </div>
    </form>
  </div>
);

export default Form;
