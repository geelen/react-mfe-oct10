
export default (old_state = {}, action) => {
  if (action.type === 'NEW_MESSAGE') {

    const lastEntry = old_state.entries[old_state.entries.length - 1]

    if (lastEntry && lastEntry.user_avatar === action.user_avatar) {

      return {
        entries: old_state.entries.slice(0, old_state.entries.length - 1)
          .concat({
            ...lastEntry,
            messages: lastEntry.messages.concat(action.message)
          })
      }

    } else {

      return {
        entries: old_state.entries.concat({
          user_avatar: action.user_avatar,
          messages: [
            action.message
          ]
        })
      }
    }
  }

  return old_state
}
