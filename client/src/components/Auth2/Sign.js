import React from 'react';
import PropTypes from 'prop-types';
import './Auth.css';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdAddCircle from 'react-icons/lib/md/add-circle';

const Sign = (props) => {

	let icon = null;

	if (props.type == 'signIn') {
		icon = <MdAccountCircle className='icons'/>
	} else {
		icon = <MdAddCircle className='icons'/>
	}

	return (
		<div onClick={props.onChange} className={props.type === 'signIn' ? 'signIn' : 'signUp'}>
			<div className='center'>
				{icon}
				<p>{props.type == 'signIn' ? 'SIGN IN' : 'SIGN UP'}</p>
			</div>
		</div>
	);
}

Sign.propTypes = {
	type: PropTypes.string,
	onChange: PropTypes.func	
};

export default Sign;