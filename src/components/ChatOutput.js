import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Entry = styled.div`
  padding: 1rem;
  display: flex;
`
const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 50%;
`
const Messages = styled.div`
  line-height: 1.2;
  > :not(:first-child) { margin-top: 0.25rem; }
`

const entries = [
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

const ChatOutput = () => (
  <Wrapper>
    {
      entries.map((entry, i) => (
        <Entry key={i}>
          <Avatar src={ entry.user_avatar }/>
          <Messages>
            {
              entry.messages.map((line, i) => (
                <div key={i}>{ line }</div>
              ))
            }
          </Messages>
        </Entry>
      ))
    }
  </Wrapper>
)

export default ChatOutput
