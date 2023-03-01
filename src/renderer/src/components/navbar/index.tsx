import Button from '../Button'
import { Link, useLocation } from 'react-router-dom'
import { Container, IconImage, NavContainer } from './style'
import Icon from '../../assets/icon.svg'

type pagesI = {
  name: string
}

const pages: pagesI[] = [
  { name: 'Painel' },
  { name: 'Equipas' },
  { name: 'Video/foto' },
  { name: 'Shortcuts' },
  { name: 'Cores' },
  { name: 'Sons' },
  { name: 'Banner-color' },
  { name: 'Texto' }
]

function Navbar(): JSX.Element {
  const { pathname } = useLocation()

  return (
    <NavContainer>
      <IconImage src={Icon} alt="icon" />
      <Container>
        {pages.map((page: pagesI, n) => {
          return (
            <Link key={n} to={page.name}>
              <Button type={pathname.includes(page.name) ? 1 : 2}>{page.name}</Button>
            </Link>
          )
        })}
      </Container>
    </NavContainer>
  )
}

export default Navbar
