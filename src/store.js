import { observable } from 'mobx'

const store = observable({
  entries: [
    {
      user_avatar: "http://fillmurray.com/128/128",
      messages: [
        "Line one",
        "Line two",
        "Line three",
      ]
    },
    {
      user_avatar: "http://fillmurray.com/132/132",
      messages: [
        "Line one",
        "Line two",
        "Line three",
      ]
    },
  ]
})

export default store
