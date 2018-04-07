import React from 'react';
import PropTypes from 'prop-types';

const ViewCounter = (props) => {
	const {
    widgetsCount,
    widgetsVisible,
	} = props;

	return (
		<div>
			{widgetsCount === 0 ? 'Нет добавленных виджетов' : `Показано ${widgetsVisible} из ${widgetsCount}`}
		</div>
	);
};

ViewCounter.propTypes = {
  widgetsCount: PropTypes.number,
  widgetsVisible: PropTypes.number,
};

export default ViewCounter;
