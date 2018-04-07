import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import ViewCounter from '../ViewCounter/ViewCounter';

import './Header.css';

const Header = (props) => {
	const {
    widgetsCount,
    widgetsVisible,
	} = props;

	return (
		<div className="header">
			<ViewCounter
				widgetsCount={widgetsCount}
				widgetsVisible={widgetsVisible}
			/>
			<Button
				buttonAction="updateWidgets"
				buttonText="Обновить"
				buttonStyle={widgetsCount > 0 ? ({ display: 'inline-block' }) : ({ display: 'none' })}
			/>
		</div>
	);
};

Header.propTypes = {
  widgetsCount: PropTypes.number,
  widgetsVisible: PropTypes.number,
};

export default Header;
