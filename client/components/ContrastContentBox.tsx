import { Box } from '@mantine/core'

import { ChildrenProps } from '../../shared/types'

export default function ContrastContentBox({ children }: ChildrenProps) {
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing.xl,
        margin: theme.spacing.xl,
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.yellow[0]
            : theme.colors.yellow[9],
        borderRadius: theme.radius.md,
      })}
    >
      {children}
    </Box>
  )
}
