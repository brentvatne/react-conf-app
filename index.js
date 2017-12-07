// @flow
import Expo from 'expo';
import React from 'react';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';
React.PropTypes = PropTypes;
React.createClass = createClass;

const ReactConf2017 = require('./app/ReactConf2017').default;

Expo.registerRootComponent(ReactConf2017);
