import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #444;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

const Input = styled.div`
  flex-grow: 1;
  > input {
    width: calc(100% - 2rem);
    font-size: 1.25rem;
    padding: 0.4rem 0.5rem;
    border: 1px solid #666;
    border-radius: 0.5rem;    
    color: chartreuse;
    background: #333;
    &::-moz-selection {
      background: chartreuse;
      color: black;
    }
  }
`
const SubmitButton = styled.div`
  > button {
    cursor: pointer;
    background: chartreuse;
    color: black;
    font-size: 1.5rem;
    border: none;
    height: 2.5rem;
    width: 5rem;
    border-radius: 0.5rem;
    > span {
      display: block;
      transform: rotate(-90deg);
    }
  }
`

const ChatInput = () => (
  <Wrapper>
    <Input>
      <input type="text"/>
    </Input>
    <SubmitButton>
      <button type="submit" onClick={ console.log("Clicked!") }>
        <span>➡</span>
      </button>
    </SubmitButton>
  </Wrapper>
)

export default ChatInput
