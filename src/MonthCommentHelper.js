export const findMonth = (months=[], monthId) =>
  months.find(month => month.id === monthId)

export const findComment = (comments=[], commentId) =>
  comments.find(comment => comment.id === commentId)

export const getCommentsForMonth = (comments=[], monthId) => (
  (!monthId)
    ? comments
    : comments.filter(comment => comment.monthId === monthId)
)

export const countCommentsForMonth = (comments=[], monthId) =>
  comments.filter(comment => comment.monthId === monthId).length