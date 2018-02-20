import axios from 'axios'

export const actionStat = (payload) => {
  return {
    type: 'ARTICLES',
    payload
  }
}

export const fetchArticle = () => {
  return (dispatch, getState) => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    axios.get(url)
    .then(resp => {
      console.log(resp);
      dispatch(actionStat(resp.data))
    })
  }
}
