import {connect} from 'react-redux';
import PageEntryPure from './PageEntryPure.jsx';
import * as carsActions from 'flux/cars';

export default connect(
    ({cars}) => ({cars}),
    (dispatch) => {
        return {
            onUpdateMark(value) {
                dispatch(carsActions.updateMark(value));
            },

            onUpdateSeries(value) {
                dispatch(carsActions.updateSeries(value));
            },

            onUpdateModel(value) {
                dispatch(carsActions.updateModel(value));
            },

            onUpdateEngine(value) {
                dispatch(carsActions.updateEngine(value));
            }
        };
    }
)(PageEntryPure);
