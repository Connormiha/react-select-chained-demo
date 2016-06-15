import {shallow, render} from 'enzyme';
import PageEntryPure from 'components/page/entry/PageEntryPure.jsx';
import * as carsData from 'data/cars';

/**
 * @todo Add tests for dirrerent situations
 */
describe('PageEntryPure', () => {
    it('should render', () => {
        let view = render(<PageEntryPure
                cars={{
                    mark: carsData.MARK_BMW,
                    series: '',
                    model: '',
                    engine: ''
                }}
            />);

        expect(view.find('select').length).to.equal(2);
    });
});
