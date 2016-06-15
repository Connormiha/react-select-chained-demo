const b = bem('entry');

import {PropTypes} from 'react';
import toPairs from 'lodash/toPairs';
import * as carsData from 'data/cars';
import Label from 'components/common/Label';
import './index.styl';

/**
 * @todo Add "engine" label
 */
export default class PageEntryPure extends React.Component {
    static propTypes = {
        cars: PropTypes.object
    }

    /**
     * Handels change select mark
     * @param {e} Synthetic event
     */
    handleChangeMark({target: {value}}) {
        this.props.onUpdateMark(value);
    }

    /**
     * Handels change select series
     * @param {e} Synthetic event
     */
    handleChangeSeries({target: {value}}) {
        this.props.onUpdateSeries(value);
    }

    /**
     * Handels change select model
     * @param {e} Synthetic event
     */
    handleChangeModel({target: {value}}) {
        this.props.onUpdateModel(value);
    }

    /**
     * Renders select component
     * @param {Object} params
     * @param {Array} params.data
     * @param {Function} params.onChange
     * @param {String} params.name
     * @param {String} params.selectedID
     * @return {React.Component}
     */
    renderSelect({data, name, onChange, selectedID}) {
        return (
            <label>
                {name}:
                <select defaultValue={selectedID} onChange={onChange}>
                    <option value="">--</option>
                    {
                        data.map((item) => {
                            return (
                                <option value={item[0]} key={item[0]}>{item[1]}</option>
                            );
                        })
                    }
                </select>
            </label>
        );
    }

    render() {
        let {mark, series, model} = this.props.cars,
            seriesList = carsData.marksSeries[mark] || [],
            modelsList = carsData.seriesModels[series] || [];

        return (
            <div className={b}>
                <Label
                    data={toPairs(carsData.MARKS)}
                    selectedID={mark}
                    onChange={this.handleChangeMark.bind(this)}
                >
                    Mark
                </Label>

                <Label
                    data={toPairs(carsData.SERIES).filter((item) => seriesList.includes(item[0]))}
                    selectedID={series}
                    onChange={this.handleChangeSeries.bind(this)}
                >
                    Series
                </Label>

                <Label
                    data={toPairs(carsData.MODELS).filter((item) => modelsList.includes(item[0]))}
                    selectedID={model}
                    onChange={this.handleChangeModel.bind(this)}
                >
                    Models
                </Label>
            </div>
        );
    }
}
