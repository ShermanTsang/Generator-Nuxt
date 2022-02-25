function storeToLocalStorage(key, data) {
  if (process.client) {
    try {
      localStorage.setItem(`<%= name %>~${key}`, JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }
}

export default {
  SET_EXAMPLE_DATA(state, data) {
    state.exampleData = data;
    storeToLocalStorage("exampleData", data);
  }
};
