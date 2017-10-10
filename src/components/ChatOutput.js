import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

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

const ChatOutput = ({ entries }) => (
  <Wrapper>
    {
      entries.map((entry, i) => (
        <Entry key={i}>
          <Avatar src={entry.user_avatar}/>
          <Messages>
            {
              entry.messages.map((line, i) => (
                <div key={i}>{line}</div>
              ))
            }
          </Messages>
        </Entry>
      ))
    }
  </Wrapper>
)

export default connect(state => ({
  entries: state.entries
}))(ChatOutput)
