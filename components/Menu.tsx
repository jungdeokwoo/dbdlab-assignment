import styled from 'styled-components'
import MenuButton from './MenuButton'

const SIDE_MENU_LIST = [
  { id: 1, name: 'Dashboard', image: '/images/icon_dashboard01.svg' },
  { id: 2, name: 'Research', image: '/images/icon_research01.svg' },
  { id: 3, name: 'Members', image: '/images/icon_members01.svg' },
  { id: 4, name: 'Insight', image: '/images/icon_insight01.svg' },
  { id: 5, name: 'Calendar', image: '/images/icon_calendar01.svg' },
]

const Menu = () => {
  return (
    <MenuWrapper>
      {SIDE_MENU_LIST.map(sideMenu => (
        <MenuButton key={sideMenu.id} sideMenu={sideMenu} />
      ))}
    </MenuWrapper>
  )
}

export default Menu

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 56px;
  height: 328px;
`
