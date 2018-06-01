import users from '../../../dummy-data/users.json'

export const usersHandler = username => {
  if (username) {
    const userName = encodeURIComponent(username)
    return users.filter(user => user.username === userName)
  } else {
    return users
  }
}
