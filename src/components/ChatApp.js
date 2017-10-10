import React from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput'
import ChatOutput from './ChatOutput'

export const inputHeight = 4
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  > :nth-child(1) {
    height: calc(100vh - ${inputHeight}rem);
  }
  > :nth-child(2) {
    height: ${inputHeight}rem;
  }
`

class ChatApp extends React.Component {
  state = {
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
  }

  render() {
    return (
      <Container>
        <ChatOutput entries={this.state.entries}/>
        <ChatInput/>
      </Container>
    )
  }
}

export default ChatApp
