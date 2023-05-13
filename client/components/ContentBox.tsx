import styled from '@emotion/styled'
import { ChildrenProps } from '../../shared/types'

export enum ContentBoxVariant {
  Dark,
  Light,
}
interface ContentBoxProps extends ChildrenProps {
  variant: ContentBoxVariant
}

const ContentBoxWrapper = styled.div<ContentBoxProps>`
  text-align: center;
  min-height: 100vh;
  padding: 5rem 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: ${({ variant }) =>
    variant === ContentBoxVariant.Dark ? '#000000' : '#ffffff'};
  color: ${({ variant }) =>
    variant === ContentBoxVariant.Dark ? '#ffffff' : '#000000'};
`

const ContentBoxBody = styled.div`
  display: table-caption;
`
const ContentBoxFlexTarget = styled.div`
  display: block;
`

export default function ContentBox(props: ContentBoxProps) {
  const { children } = props
  return (
    <ContentBoxWrapper {...props}>
      <ContentBoxFlexTarget>
        <ContentBoxBody>{children}</ContentBoxBody>
      </ContentBoxFlexTarget>
    </ContentBoxWrapper>
  )
}
