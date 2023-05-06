import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react'

export default function LightAndDarkButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'fawn'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      sx={(theme) => ({
        textAlign: 'center',
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.yellow[9]
            : theme.colors.yellow[0],
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.yellow[0]
            : theme.colors.yellow[9],
        borderColor:
          theme.colorScheme === 'dark'
            ? theme.colors.yellow[9]
            : theme.colors.yellow[0],
        borderRadius: theme.radius.md,
        marginRight: theme.spacing.md,
      })}
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
  )
}
