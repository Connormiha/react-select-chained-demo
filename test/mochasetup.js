import sinon from 'sinon';
import {expect} from 'chai';
import bem from 'bem-cn';
import React from 'react';
import immutable from 'seamless-immutable';

global.DEBUG = true;
global.sinon = sinon;
global.expect = expect;
global.React = React;
global.immutable = immutable;
global.bem = bem;
