const b = bem('label');

import {PropTypes} from 'react';
import './index.styl';

export default class Label extends React.Component {
    static propTypes = {
        onChange: PropTypes.func,
        selectedID: PropTypes.string,
        data: PropTypes.array.isRequired
    }

    render() {
        let {data, children, onChange, selectedID} = this.props;

        if (!data.length) {
            return null;
        }

        return (
            <label className={b}>
                <span className={b('text')}>{children}:</span>
                <select defaultValue={selectedID} onChange={onChange}>
                    <option value="">--</option>
                    {
                        data.map(([value, title]) => {
                            return (
                                <option value={value} key={value}>{title}</option>
                            );
                        })
                    }
                </select>
            </label>
        );
    }
}
