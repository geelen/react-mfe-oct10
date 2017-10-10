export const handleNewMessage = ({ user_avatar, message }) => dispatch => {
  dispatch({
    type: 'NEW_MESSAGE',
    user_avatar,
    message,
  })
}
