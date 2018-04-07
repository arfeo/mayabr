import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
	const {
    iconType,
    widgetIcon,
    widgetDescr,
	} = props;

	const generateIcon = () => {
		switch (iconType) {
			case 'widgetWeatherIcon':
			{
				return (
					<img
						src={widgetIcon ? require(`../../static/${widgetIcon}`) : ''}
						alt={widgetDescr}
						title={widgetDescr}
					/>
				);
			}
			default:
			{
				return;
			}
		}
	}

	return (
		<div>
			{generateIcon()}
		</div>
	);
};

Icon.propTypes = {
  iconType: PropTypes.string,
  widgetIcon: PropTypes.string,
  widgetDescr: PropTypes.string,
};

export default Icon;
