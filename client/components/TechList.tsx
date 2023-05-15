import styled from '@emotion/styled'

interface TechListProps {
  align: 'left' | 'right'
}

export const TechLists = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
`
export const TechList = styled.ul<TechListProps>`
  position: relative;
  font-size: 0.75rem;
  font-weight: 600;
  width: 50%;
  text-align: ${({ align }) => align};
  margin: 0 0.25rem;
  padding: 0;
`

export const TechListItem = styled.li`
  list-style-type: none;
`
