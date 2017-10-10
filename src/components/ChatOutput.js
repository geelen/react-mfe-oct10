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

const ChatOutput = () => (
  <Wrapper>
    <Entry>
      <Avatar src="http://fillmurray.com/128/128"/>
      <Messages>
        <div>Line one</div>
        <div>Line two</div>
        <div>Line three</div>
      </Messages>
    </Entry>
  </Wrapper>
)

export default ChatOutput
