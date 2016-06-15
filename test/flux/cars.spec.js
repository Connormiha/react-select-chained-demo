import * as Actions from 'flux/cars';
import {createAppStore} from 'store';

let store;

const getState = () =>
    store.getState().cars;

describe('User Store', () => {
    beforeEach(() => {
        store = createAppStore();
    });

    it('should update mark', () => {
        store.dispatch(Actions.updateMark('Foo'));
        expect(getState().mark).to.equal('Foo');
    });

    it('should update series', () => {
        store.dispatch(Actions.updateSeries('Foo'));
        expect(getState().series).to.equal('Foo');
    });

    it('should update model', () => {
        store.dispatch(Actions.updateModel('Foo'));
        expect(getState().model).to.equal('Foo');
    });

    it('should update engine', () => {
        store.dispatch(Actions.updateEngine('Foo'));
        expect(getState().engine).to.equal('Foo');
    });

    it('should have initial value', () => {
        expect(getState()).to.deep.equal({mark: '', series: '', model: '', engine: ''});
    });
});
