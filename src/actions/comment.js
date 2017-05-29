export const addComment = (text) => {
  console.log('adding comment: ' + text);

  return{
    type: 'ADD_COMMENT',
    text
  }
}
