import { SHOW_GRID, CHANGE_BORDER } from '../../actionTypes';

const initialState = {
    toggleGrid: false,
    valueBorder: 0,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SHOW_GRID:
            return { ...state, toggleGrid: !state.toggleGrid, };
        case CHANGE_BORDER:
            return { ...state, valueBorder: action.valueBorder };
        default:
            return state;
    }
}