export default <T extends any>(Actions) => (state: T, action) => {
  const mutator = Actions[action.type];
  if (mutator) {
    return mutator(state, action) as T;
  }
  return state;
}