import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import './Widget.css';

const Widget = (props) => {
	const {
    keyIndex,
    isVisible,
    widgetId,
    widgetName,
    widgetLink,
    widgetIcon,
    widgetDescr,
    tempInfo,
    windInfo,
    pressureInfo,
	} = props;

	return (
		<div
			className="widget"
			key={keyIndex}
			style={isVisible ? { display: 'inline-block' } : { display: 'none' }}
		>
			<div className="city-title">
				<a href={widgetLink} target="_blank">{widgetName}</a>
			</div>
			<div>
				<Button
					buttonAction="removeWidget"
					buttonText="✕"
					widgetId={widgetId}
					isEnabled={true}
				/>
			</div>
			<div className="temperature">
				<Icon
					iconType="widgetWeatherIcon"
					widgetIcon={widgetIcon < 10 ? `0${widgetIcon}-s.png` : `${widgetIcon}-s.png` }
					widgetDescr={widgetDescr}
				/>
				{tempInfo === 1000 ? '--' : tempInfo > 0 ? `+${tempInfo}` : tempInfo === 0 ? 0 : tempInfo } °C
			</div>
			<div className="details">
				<div>Ветер: { parseInt(windInfo * 0.277778, 10) } м/с</div>
				<div>Давление: { parseInt(pressureInfo * 0.750062, 10) } мм</div>
			</div>
		</div>
	);
};

Widget.propTypes = {
  keyIndex: PropTypes.number,
  isVisible: PropTypes.bool,
  widgetId: PropTypes.string,
  widgetName: PropTypes.string,
  widgetLink: PropTypes.string,
  widgetIcon: PropTypes.string,
  widgetDescr: PropTypes.string,
  tempInfo: PropTypes.number,
  windInfo: PropTypes.number,
  pressureInfo: PropTypes.number,
};

export default Widget;
