import { get } from 'lodash/fp';
import { createSelector } from 'reselect';

export const stateSelector = state => get('app', state);

export const pewSelector = createSelector(
  stateSelector,
  get('pew'),
);
