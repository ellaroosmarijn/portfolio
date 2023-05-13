import styled from '@emotion/styled'

export enum ContentBoxVariant {
  Dark,
  Light,
}
interface ContentBoxProps {
  variant: ContentBoxVariant
}

const ContentBox = styled.div<ContentBoxProps>`
  display: flex;
  align-items: center;
  text-align: center;
  height: 55rem;

  background: ${({ variant }) =>
    variant === ContentBoxVariant.Dark ? '#000000' : '#ffffff'};
  color: ${({ variant }) =>
    variant === ContentBoxVariant.Dark ? '#ffffff' : '#000000'};
`

export default ContentBox
