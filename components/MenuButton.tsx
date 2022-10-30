import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { lowerCase } from '../utils/lowercase'

type menuDataProps = {
  sideMenu: {
    id: number
    name: string
    image: string
  }
}

const MenuButton = ({ sideMenu }: menuDataProps) => {
  const { name, image } = sideMenu
  const router = useRouter()

  return (
    <SideMenuButton>
      <Image src={image} width={16} height={16} alt={`${name}이미지`} />
      <MenuName isActive={router.route.includes(lowerCase(name))}>
        {name}
      </MenuName>
    </SideMenuButton>
  )
}

export default MenuButton

const SideMenuButton = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`

const MenuName = styled.span<{ isActive: boolean }>`
  margin-left: 8px;
  color: ${({ isActive }) =>
    isActive ? ({ theme }) => theme.select : ({ theme }) => theme.sideBarFont};
`
