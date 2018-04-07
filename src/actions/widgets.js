import axios from 'axios';

export const addWidgetAction = (selected, temp) => (dispatch) => {
	axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${selected.key}.json`, {
		params: {
			apikey: '',
			details: true,
		}
	}).then(result => {
		const json = result.data[0];
		const payload = {
			id: selected.id,
			name: selected.name,
			key: selected.key,
			icon: json ? json.WeatherIcon : null,
			temp: json ? json.Temperature.Metric.Value : 0,
			descr: json ? json.WeatherText : null,
			link: json ? json.Link : null,
			wind: json ? json.Wind.Speed.Metric.Value : 0,
			pressure: json ? json.Pressure.Metric.Value : 0,
		};

		if(payload.temp < temp) {
			alert(`Виджет добавлен, но был автоматически скрыт, т.к. в городе ${payload.name} сейчас холоднее ${temp} °C`);
		}

		dispatch({ type: 'ADD_WIDGET', payload });
	}).catch(() => {
		const payload = {
			id: selected.id,
			name: selected.name,
			key: selected.key,
			icon: null,
			temp: 1000,
			descr: null,
			link: null,
			wind: 0,
			pressure: 0,
		};

		dispatch({ type: 'ADD_WIDGET', payload });
	});
};

export const updateWidgetAction = (widget) => (dispatch) => {
	axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${widget.key}.json`, {
		params: {
			apikey: '',
			details: true,
		}
	}).then(result => {
		const json = result.data[0]
		const payload = {
			id: widget.id,
			name: widget.name,
			key: widget.key,
			icon: json ? json.WeatherIcon : null,
			temp: json ? json.Temperature.Metric.Value : 0,
			descr: json ? json.WeatherText : null,
			link: json ? json.Link : null,
			wind: json ? json.Wind.Speed.Metric.Value : 0,
			pressure: json ? json.Pressure.Metric.Value : 0,
		}

		dispatch({ type: 'UPDATE_WIDGET', payload });
	}).catch(() => {
		const payload = {
			id: widget.id,
			name: widget.name,
			key: widget.key,
			icon: null,
			temp: 1000,
			descr: null,
			link: null,
			wind: 0,
			pressure: 0,
		};

		dispatch({ type: 'UPDATE_WIDGET', payload });
	});
};
