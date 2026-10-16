import { useDisclosure } from "@mantine/hooks"

export const useCategories = () => {
  const [categoryModalOpened, categoryModalHandlers] = useDisclosure(false);

  return (
    {
      categoryModalOpened,
      categoryModalHandlers,
    }
  )
}