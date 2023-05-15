import { ValidationError, useForm } from '@formspree/react'
import TextareaAutosize from 'react-textarea-autosize'

import AboveTitleText from './AboveTitleText'
import ContentBox, { ContentBoxVariant } from './ContentBox'
import styled from '@emotion/styled'
import BaseTitle from './BaseTitle'
import { BREAKPOINTS } from '../../shared/constants'
import BelowTitleText from './BelowTitleText'

const Form = styled.form`
  margin-top: 4rem;
  width: 73vw;
  padding: 0 1.5rem;
  box-size: border-box;

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 88vw;
  }
`

const inputStyle = `
display: inline-block;
margin: 0.5rem 0;
background-color: #000000;
font-family: Work sans, sans serif;
font-size: 1.25rem;
font-weight: 400;
min-height: 2em;
border: 0;
width: 100%;
padding: 0.5rem 0.75rem;
box-sizing: border-box;
color: #ffffff;

&::placeholder {
  color: rgba(255,255,255,0.5);
}
`

const Input = styled.input`
  ${inputStyle}
`

const TextArea = styled(TextareaAutosize)`
  ${inputStyle}
`

const Button = styled.button`
  display: flex;
  background-color: #000000;
  color: #ffffff;
  font-family: Work sans, sans serif;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  border: 0;
  padding: 1rem 1.5rem;
  transition: opacity 0.3s;

  &:hover {
    background-color: #000000;
    opacity: 0.5;
  }
`

const EmailConfirmation = styled(BelowTitleText)`
  text-align: center;
`

export default function Contact() {
  const [state, handleSubmit] = useForm('xjvdzbpq')
  return (
    <>
      <ContentBox variant={ContentBoxVariant.Light} id="contact">
        <AboveTitleText>LET&apos;S CHAT</AboveTitleText>
        <BaseTitle vwPercent={20} mobileSizeMultiplier={1.2}>
          CONTACT ME
        </BaseTitle>

        <Form onSubmit={handleSubmit}>
          {state.succeeded ? (
            <EmailConfirmation>
              Your email has been sent! Thank you for getting in touch.
            </EmailConfirmation>
          ) : (
            <>
              <ValidationError errors={state.errors} />
              <ValidationError
                field="email"
                prefix="Email"
                errors={state.errors}
              />
              <Input id="name" name="name" type="text" placeholder="Name" />
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="Email *"
              />
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
              />
              <TextArea
                maxRows={10}
                minRows={5}
                id="message"
                name="message"
                placeholder="Message *"
              />
              <Button type="submit">SEND</Button>
            </>
          )}
        </Form>
      </ContentBox>
    </>
  )
}
