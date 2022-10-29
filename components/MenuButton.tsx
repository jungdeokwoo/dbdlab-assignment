import styled from 'styled-components'
import Image from 'next/image'

type menuDataProps = {
  sideMenu: {
    id: number
    name: string
    image: string
  }
}

const MenuButton = ({ sideMenu }: menuDataProps) => {
  const { name, image } = sideMenu

  return (
    <SideMenuButton>
      <Image src={image} width={16} height={16} alt={`${name}이미지`} />
      <MenuName>{name}</MenuName>
    </SideMenuButton>
  )
}

export default MenuButton

const SideMenuButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`

const MenuName = styled.p`
  margin-left: 8px;
`
