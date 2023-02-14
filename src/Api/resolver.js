export async function resolve(promise) {
  const resolved = {
    data: null,
    error: null,
  };

  try {
    resolved.data = await promise;
  } catch (e) {
    resolved.error = e.response.statusText == 'Unauthorized' ? 'Unauthorized' : e;
  }

  return resolved;
}
