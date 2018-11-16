import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import FaGoogle from 'react-icons/lib/fa/google';
import FaGithub from 'react-icons/lib/fa/github';
import classNames from 'classnames';
import Button from "@material-ui/core/Button";
import { ArrowForward } from "@material-ui/icons";


const SubmitButton = (props) => {

	let socialNets = null;
	// var buttonClasses = classNames({
	// 	'jrs-button': true,
	// 	'sign-class': props.type === 'signIn' ? 'submitSignIn' : 'submitSignUp'
	// });

	if (props.type === 'signIn') {
		socialNets = (
			<div className='socialNets'>
				<FaGoogle className='socialNetsIcon'/>
				<FaGithub className='socialNetsIcon'/>
			</div>
		)
	} else {
		socialNets = (
			<div className='socialNets'>
			</div>
		)
	}
	return (
		<div className={'submitButton'}>
			{socialNets}
			{/* <button className={buttonClasses}><MdArrowForward/></button> */}
			<Button type="submit" variant="contained" color="success">
              <ArrowForward />
            </Button>
		</div>
	);
} 

SubmitButton.PropTypes = {
	type: PropTypes.String
};

export default SubmitButton;