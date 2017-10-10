import store from './store'

export const handleNewMessage = ({ message, user_avatar }) => {
  const lastEntry = store.entries[store.entries.length - 1]

  if (lastEntry && lastEntry.user_avatar === user_avatar) {
    lastEntry.messages.push(message)
  } else {
    store.entries.push({
      user_avatar,
      messages: [
        message
      ]
    })
  }
}
