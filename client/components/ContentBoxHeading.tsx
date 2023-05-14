import styled from '@emotion/styled'
import { ChildrenProps } from '../../shared/types'

const ContentBoxBody = styled.div`
  display: table-caption;
`
const ContentBoxHeadingWrapper = styled.div`
  display: block;
`

export default function ContentBoxHeading({ children }: ChildrenProps) {
  return (
    <ContentBoxHeadingWrapper>
      <ContentBoxBody>{children}</ContentBoxBody>
    </ContentBoxHeadingWrapper>
  )
}
