import React from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput'

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
const ChatOutput = styled.div`
  
`

class ChatApp extends React.Component {
  render() {
    return (
      <Container>
        <ChatOutput/>
        <ChatInput/>
      </Container>
    )
  }
}

export default ChatApp
