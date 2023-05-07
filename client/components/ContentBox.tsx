import { Box } from '@mantine/core'

import { ChildrenProps } from '../../shared/types'

export default function ContentBox({ children }: ChildrenProps) {
  return (
    <Box
      sx={(theme) => ({
        textAlign: 'center',
        padding: theme.spacing.xl,
        margin: theme.spacing.xl,
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.yellow[9]
            : theme.colors.yellow[0],
        borderRadius: theme.radius.md,
      })}
    >
      {children}
    </Box>
  )
}
