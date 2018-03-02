/* eslint-disable */
import sinon from 'sinon';

global.sinon = sinon;

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

