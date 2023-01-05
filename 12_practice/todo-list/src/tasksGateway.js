const baseUrl = 'https://6384c3013fa7acb14fffc5eb.mockapi.io/tasks';

export const updateFromServer = () =>
  fetch(baseUrl).then((res) =>
    res.ok ? res.json() : new Error('Network Error')
  );

export const onCreateTask = (text) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: text, done: false }),
  }).then((res) => {
    if (!res.ok) throw new Error('Network error');
  });

export const setDone = (id, updatedTask) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  }).then((res) => {
    if (!res.ok) throw new Error('Network error');
  });

export const onDelete = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    if (!res.ok) throw new Error('Network error');
  });
