import React from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
// import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import "./Form.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: "100%"
  }
});

class Form extends React.Component {
  state = {
    name: "",
    age: "",
    multiline: "Controlled"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        id="EGA-contactForm"
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Question"
          multiline
          rows="10"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);

// import React from "react";
// import "./Form.css";
// import TextField from "@material-ui/core/TextField";

// const Form = props => (
//   <div className="container EGA-whiteText">
//     <form>
//       <div className="form-group row has-warning EGA-whiteText">
//         <label
//           for="inputHorizontalWarning"
//           className="col-sm-2 col-form-label EGA-whiteText"
//         >
//           Name
//         </label>
//         <div className="col-sm-10 EGA-whiteText">
//           <input
//             type="text"
//             className="form-control form-control-warning EGA-whiteText"
//             id="inputHorizontalWarning"
//             placeholder="Your Name"
//           />
//         </div>
//       </div>
//       <div className="form-group row has-warning EGA-whiteText">
//         <label
//           for="inputHorizontalWarning"
//           className="col-sm-2 col-form-label EGA-whiteText"
//         >
//           Email
//         </label>
//         <div className="col-sm-10 EGA-whiteText">
//           <input
//             type="email"
//             className="form-control form-control-warning EGA-whiteText"
//             id="inputHorizontalWarning"
//             placeholder="name@example.com"
//           />
//         </div>
//       </div>
//       <div className="form-group row has-warning EGA-whiteText">
//         <label
//           for="inputHorizontalWarning"
//           className="col-sm-2 col-form-label EGA-whiteText"
//         >
//           Question
//         </label>
//         <div className="col-sm-10 EGA-whiteText">
//           <TextField
//             className="EGA-textField"
//             id="standard-multiline-static"
//             label="Multiline"
//             multiline
//             rows="4"
//             defaultValue="Default Value"
//             margin="normal"
//           />
//         </div>
//       </div>
//     </form>
//   </div>
// );

// export default Form;
