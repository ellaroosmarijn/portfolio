import { Box } from '@mantine/core'

import { ChildrenProps } from '../../shared/types'

export enum ContentBoxVariant {
  Dark,
  Light,
}
interface ContentBoxProps extends ChildrenProps {
  variant?: ContentBoxVariant
}

export default function ContentBox({
  children,
  variant = ContentBoxVariant.Dark,
}: ContentBoxProps) {
  return (
    <Box
      m={0}
      py={'300px'}
      sx={(theme) => ({
        textAlign: 'center',
        padding: theme.spacing.xl,
        margin: theme.spacing.xl,
        backgroundColor:
          variant === ContentBoxVariant.Dark ? theme.black : theme.white,
        color: variant === ContentBoxVariant.Dark ? theme.white : theme.black,
      })}
    >
      {children}
    </Box>
  )
}
