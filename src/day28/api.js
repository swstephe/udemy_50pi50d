import axios from 'axios'

const APIURL = 'https://api.github.com/users/'

export async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created')
    return data
  } catch (err) {
    throw new Error("Problem fetching repos")
  }
}

export async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
    return data
  } catch (err) {
    if (err.response.status === 404) {
      throw new Error("No profile with this username")
    }
  }
}
