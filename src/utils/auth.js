export const BASE_URL = 'https://api.mymovie.nomoredomains.work';

const getResult = (res) => {
    if (res.ok) {
    return res.json();
  }
    return Promise.reject(`Ошибка: ${res.status}`)
}

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then(getResult)
}

// export const register = (name, email, password) => {
//     return fetch(`${BASE_URL}/signup`, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: name,
//         email: email,
//         password: password
//       }),
//       credentials: 'include',
//     })
//       .then(getResult)
//       .then(res => {
//         return {email: email};
//       });
// }

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {'Accept': 'application/json',
         'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: email,
      password: password,
      name: name
    }),
    credentials: 'include',
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }).then(body => {
    if (body.error) {
      return {error: body.error};
    }
    if (body.message) {
      return {error: body.message};
    }
    return {email: body.user.email};
  });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password}),
    credentials: 'include',
  })
  .then(getResult)
}

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  .then(getResult)
  .then((data) => {
    return data;
  })
}

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
  .then(getResult)
}
