import {shallow, render} from 'enzyme';
import Label from 'components/common/Label';

describe('Label', () => {
    it('should render label', () => {
        let view = render(<Label data={[['foo', 'bar']]}>zoo</Label>);

        expect(view.find('label').length).to.equal(1);
        expect(view.find('option').length).to.equal(2);
        expect(view.find('option[value="foo"]').text()).to.equal('bar');
    });
});
