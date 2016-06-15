const CARS_UPDATE_MARK = 'CARS_UPDATE_MARK';
const CARS_UPDATE_SERIES = 'CARS_UPDATE_SERIES';
const CARS_UPDATE_MODEL = 'CARS_UPDATE_MODEL';
const CARS_UPDATE_ENGINE = 'CARS_UPDATE_ENGINE';

export const updateMark = (mark) =>
    ({type: CARS_UPDATE_MARK, mark});

export const updateSeries = (series) =>
    ({type: CARS_UPDATE_SERIES, series});

export const updateModel = (model) =>
    ({type: CARS_UPDATE_MODEL, model});

export const updateEngine = (engine) =>
    ({type: CARS_UPDATE_ENGINE, engine});

const getDefaultState = () =>
    immutable({
        mark: '',
        series: '',
        model: '',
        engine: ''
    });

export default (state = getDefaultState(), {type, mark, series, engine, model}) => {
    switch (type) {
        case CARS_UPDATE_MARK:
            return state.merge({mark});

        case CARS_UPDATE_SERIES:
            return state.merge({series});

        case CARS_UPDATE_MODEL:
            return state.merge({model});

        case CARS_UPDATE_ENGINE:
            return state.merge({engine});
    }

    return state;
};
