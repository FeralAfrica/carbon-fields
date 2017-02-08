/**
 * The external dependencies.
 */
import immutable from 'object-path-immutable';
import { handleActions, combineActions } from 'redux-actions';
import { omit } from 'lodash';

/**
 * The internal dependencies.
 */
import { decorateFieldReducer } from 'lib/registry';
import {
	setupField,
	updateField,
	addFields,
	removeFields,
	setUI
} from 'fields/actions';

/**
 * The reducer that handles the `fields` branch.
 */
export default decorateFieldReducer(handleActions({
	[combineActions(setupField, setUI)]:  (state, { payload: { fieldId, ui }}) => immutable.assign(state, `${fieldId}.ui`, ui),
	[addFields]: (state, { payload }) => ({ ...state, ...payload }),
	[removeFields]: (state, { payload }) => omit(state, payload),
	[updateField]: (state, { payload: { fieldId, data }}) => immutable.assign(state, fieldId, data),
}, {}));
