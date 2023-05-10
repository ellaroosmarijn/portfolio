import { useForm as MantineForm } from '@mantine/form'
import {
  Text,
  Button,
  Container,
  Group,
  TextInput,
  Title,
  Textarea,
} from '@mantine/core'

import ContentBox, { ContentBoxVariant } from './ContentBox'
import { ValidationError, useForm } from '@formspree/react'

export default function Contact() {
  const form = MantineForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const [state, handleSubmit] = useForm('xjvdzbpq')
  if (state.succeeded) {
    return <p>Thank you for getting in touch.</p>
  }

  return (
    <>
      <ContentBox variant={ContentBoxVariant.Light}>
        <Container maw="800px" mx="auto" id="contact">
          <Text fz="sm" fw="700">
            LET&apos;S CHAT
          </Text>
          <Title order={2}>CONTACT ME</Title>
          <form onSubmit={handleSubmit}>
            <TextInput
              name="name"
              label="NAME"
              placeholder="Name"
              {...form.getInputProps('name')}
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
            <TextInput
              withAsterisk
              name="email"
              label="EMAIL"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />
            <ValidationError
              prefix="email"
              field="email"
              errors={state.errors}
            />
            <TextInput
              name="subject"
              label="SUBJECT"
              placeholder="Subject"
              {...form.getInputProps('subject')}
            />
            <ValidationError
              prefix="subject"
              field="subject"
              errors={state.errors}
            />
            <Textarea
              withAsterisk
              name="message"
              label="MESSAGE"
              placeholder="Message"
              minRows={6}
              autosize
              {...form.getInputProps('message')}
            />
            <ValidationError
              prefix="message"
              field="message"
              errors={state.errors}
            />

            <Group position="right" mt="md">
              <Button type="submit" onClick={(e) => form}>
                Send
              </Button>
            </Group>
          </form>
        </Container>
      </ContentBox>
    </>
  )
}
