import Image from 'next/image'
import styled from 'styled-components'

const Logo = () => {
  return (
    <LogoMenu>
      <Image
        src={'/images/img_logo01.svg'}
        width={24}
        height={24}
        alt="로고이미지"
      />
      <Title>DBDLAB Corp.</Title>
    </LogoMenu>
  )
}

export default Logo

const LogoMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
`

const Title = styled.p`
  font-weight: bold;
  margin-left: 5px;
`
