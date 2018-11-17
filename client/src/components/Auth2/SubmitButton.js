import React from 'react';
import PropTypes from 'prop-types';
import './Auth.css';
import FaGoogle from 'react-icons/lib/fa/google';
import FaGithub from 'react-icons/lib/fa/github';
import Button from "@material-ui/core/Button";
import { ArrowForward } from "@material-ui/icons";


const SubmitButton = (props) => {

	let socialNets = null;

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