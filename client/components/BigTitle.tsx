import { Title, TitleOrder } from '@mantine/core'
import { ChildrenProps } from '../../shared/types'

interface BigTitleProps extends ChildrenProps {
  order?: TitleOrder
}

export default function BigTitle({ order, children }: BigTitleProps) {
  return (
    <Title
      order={order}
      sx={(theme) => ({
        fontSize: '12.5rem',
        [`@media (max-width: ${theme.breakpoints.md})`]: {
          fontSize: '10rem',
        },
        [`@media (max-width: ${theme.breakpoints.sm})`]: {
          fontSize: '7.5rem',
        },
        [`@media (max-width: ${theme.breakpoints.xs})`]: {
          fontSize: '4.5rem',
        },
      })}
    >
      {children}
    </Title>
  )
}
