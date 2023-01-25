module.exports = {

  resolve: async function (promise) {
    const resolved = {
      data: null,
      error: null
    };

    try {
      resolved.data = await promise;
    } catch (e) {
      resolved.error = e;
    }

    return resolved;
  }
};