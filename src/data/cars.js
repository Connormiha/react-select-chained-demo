/**
 * @todo add engines for models
 */

export const ENGINE_PETROL_25 = 'ENGINE_PETROL_25';
export const ENGINE_PETROL_30 = 'ENGINE_PETROL_30';
export const ENGINE_DIESEL_30 = 'ENGINE_DIESEL_30';

export const MARK_BMW = 'MARK_BMW';
export const MARK_AUDI = 'MARK_AUDI';

export const MARK_BMW_SERIES_1 = 'MARK_BMW_SERIES_1';
export const MARK_BMW_SERIES_3 = 'MARK_BMW_SERIES_3';
export const MARK_BMW_SERIES_5 = 'MARK_BMW_SERIES_5';
export const MARK_BMW_SERIES_6 = 'MARK_BMW_SERIES_6';
export const MARK_BMW_SERIES_7 = 'MARK_BMW_SERIES_7';

export const MARK_AUDI_A1 = 'MARK_AUDI_A1';
export const MARK_AUDI_A3 = 'MARK_AUDI_A3';
export const MARK_AUDI_S3 = 'MARK_AUDI_S3';
export const MARK_AUDI_A4 = 'MARK_AUDI_A4';
export const MARK_AUDI_S4 = 'MARK_AUDI_S4';
export const MARK_AUDI_A5 = 'MARK_AUDI_A5';
export const MARK_AUDI_S5 = 'MARK_AUDI_S5';
export const MARK_AUDI_A6 = 'MARK_AUDI_A6';
export const MARK_AUDI_S6 = 'MARK_AUDI_S6';
export const MARK_AUDI_RS6 = 'MARK_AUDI_RS6';
export const MARK_AUDI_A8 = 'MARK_AUDI_A8';

export const MODEL_BMW_3_DOORS = 'MODEL_BMW_3_DOORS';
export const MODEL_BMW_5_DOORS = 'MODEL_BMW_5_DOORS';
export const MODEL_BMW_COUPE = 'MODEL_BMW_COUPE';
export const MODEL_BMW_CABRIO = 'MODEL_BMW_CABRIO';
export const MODEL_BMW_SEDAN = 'MODEL_BMW_SEDAN';
export const MODEL_BMW_TOURING = 'MODEL_BMW_TOURING';
export const MODEL_BMW_GRAN_TOURISMO = 'MODEL_BMW_GRAN_TOURISMO';

export const MODEL_AUDI_CABRIO = 'MODEL_AUDI_CABRIO';
export const MODEL_AUDI_SEDAN = 'MODEL_AUDI_SEDAN';
export const MODEL_AUDI_SPORTBACK = 'MODEL_AUDI_SPORTBACK';
export const MODEL_AUDI_CABRIOLET = 'MODEL_AUDI_CABRIOLET';
export const MODEL_AUDI_AVANT = 'MODEL_AUDI_AVANT';
export const MODEL_AUDI_ALLROAD = 'MODEL_AUDI_ALLROAD';
export const MODEL_AUDI_COUPE = 'MODEL_AUDI_COUPE';

export const MARKS = {
    [MARK_BMW]: 'bmw',
    [MARK_AUDI]: 'audi'
};

export const ENGINES = {
    [ENGINE_PETROL_25]: '25-petrol',
    [ENGINE_PETROL_30]: '30-petrol',
    [ENGINE_DIESEL_30]: '30-diesel'
};

export const SERIES = {
    [MARK_BMW_SERIES_1]: '1 series',
    [MARK_BMW_SERIES_3]: '3 series',
    [MARK_BMW_SERIES_5]: '5 series',
    [MARK_BMW_SERIES_6]: '6 series',
    [MARK_BMW_SERIES_7]: '7 series',
    [MARK_AUDI_A1]: 'A1',
    [MARK_AUDI_A3]: 'A3',
    [MARK_AUDI_S3]: 'S3',
    [MARK_AUDI_A4]: 'A4',
    [MARK_AUDI_S4]: 'S4',
    [MARK_AUDI_A5]: 'A5',
    [MARK_AUDI_S5]: 'S5',
    [MARK_AUDI_A6]: 'A6',
    [MARK_AUDI_S6]: 'S6',
    [MARK_AUDI_RS6]: 'RS6',
    [MARK_AUDI_A8]: 'A8'
};

export const MODELS = {
    [MODEL_BMW_3_DOORS]: '3 doors',
    [MODEL_BMW_5_DOORS]: '5 doors',
    [MODEL_BMW_COUPE]: 'Coupe',
    [MODEL_BMW_CABRIO]: 'Cabrio',
    [MODEL_BMW_SEDAN]: 'Sedan',
    [MODEL_BMW_TOURING]: 'Touring',
    [MODEL_BMW_GRAN_TOURISMO]: 'Gran Tourismo',
    [MODEL_AUDI_CABRIO]: 'Cabrio',
    [MODEL_AUDI_SEDAN]: 'Sedan',
    [MODEL_AUDI_SPORTBACK]: 'Sportback',
    [MODEL_AUDI_CABRIOLET]: 'Cabriolet',
    [MODEL_AUDI_AVANT]: 'Avant',
    [MODEL_AUDI_ALLROAD]: 'Allroad',
    [MODEL_AUDI_COUPE]: 'Coupe'
};

export const marksSeries = {
    [MARK_BMW]: [MARK_BMW_SERIES_1, MARK_BMW_SERIES_3, MARK_BMW_SERIES_5, MARK_BMW_SERIES_6, MARK_BMW_SERIES_7],
    [MARK_AUDI]: [
        MARK_AUDI_A1, MARK_AUDI_A3, MARK_AUDI_S3, MARK_AUDI_A4, MARK_AUDI_S4, MARK_AUDI_A5, MARK_AUDI_S5,
        MARK_AUDI_A6, MARK_AUDI_S6, MARK_AUDI_RS6, MARK_AUDI_A8
    ]
};

export const seriesModels = {
    [MARK_BMW_SERIES_1]: [MODEL_BMW_3_DOORS, MODEL_BMW_5_DOORS, MODEL_BMW_COUPE, MODEL_BMW_CABRIO],
    [MARK_BMW_SERIES_3]: [MODEL_BMW_COUPE, MODEL_BMW_CABRIO, MODEL_BMW_COUPE, MODEL_BMW_SEDAN, MODEL_BMW_TOURING],
    [MARK_BMW_SERIES_5]: [MODEL_BMW_SEDAN, MODEL_BMW_TOURING, MODEL_BMW_GRAN_TOURISMO],
    [MARK_BMW_SERIES_6]: [MODEL_BMW_CABRIO, MODEL_BMW_COUPE],
    [MARK_BMW_SERIES_7]: [MODEL_BMW_SEDAN],
    [MARK_AUDI_A1]: [MODEL_AUDI_SEDAN],
    [MARK_AUDI_A3]: [MODEL_AUDI_SEDAN, MODEL_AUDI_SPORTBACK, MODEL_AUDI_CABRIOLET],
    [MARK_AUDI_S3]: [MODEL_AUDI_SEDAN, MODEL_AUDI_SPORTBACK],
    [MARK_AUDI_A4]: [MODEL_AUDI_SEDAN, MODEL_AUDI_AVANT, MODEL_AUDI_ALLROAD],
    [MARK_AUDI_S4]: [MODEL_AUDI_SEDAN, MODEL_AUDI_AVANT],
    [MARK_AUDI_A5]: [MODEL_AUDI_SPORTBACK, MODEL_AUDI_CABRIOLET],
    [MARK_AUDI_S5]: [MODEL_AUDI_SPORTBACK, MODEL_AUDI_CABRIOLET],
    [MARK_AUDI_A6]: [MODEL_AUDI_SEDAN, MODEL_AUDI_AVANT, MODEL_AUDI_ALLROAD],
    [MARK_AUDI_S6]: [MODEL_AUDI_SEDAN, MODEL_AUDI_AVANT],
    [MARK_AUDI_RS6]: [MODEL_AUDI_SEDAN, MODEL_AUDI_AVANT],
    [MARK_AUDI_A8]: []
};
