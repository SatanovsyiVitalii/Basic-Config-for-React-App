import { FAKE_ACTION } from '../actions/fakeAction';

export default (state = 0, action) => {
  switch (action.type) {
    case FAKE_ACTION:
      return state + 1;
    default:
      return state;
  }
};
