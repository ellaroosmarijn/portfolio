export interface Project {
  id: number
  name: string
  projectType: string
  link: string
  github: string
  dateCompleted: string
  image: string
}

export interface ChildrenProps {
  children: React.ReactNode | React.ReactNode[]
}
