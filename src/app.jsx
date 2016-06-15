import {render} from 'react-dom';
import store from 'store';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import PageEntry from 'components/page/entry';
import './style.styl';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={PageEntry} />
        </Router>
    </Provider>,
    document.querySelector('#app')
);
