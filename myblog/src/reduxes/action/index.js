const actionStat = (payload) => {
  return {
    type: 'ARTICLES',
    payload
  }
}

export const fetchArticle = payload => {
  return actionStat(payload)
}
