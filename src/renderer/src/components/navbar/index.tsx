import Button from '../Button'
import { Link, useLocation } from 'react-router-dom'
import { Container } from './style'
type pagesI = {
  name: string
}

const pages: pagesI[] = [
  { name: 'Painel' },
  { name: 'Equipas' },
  { name: 'Video-foto' },
  { name: 'Shortcuts' },
  { name: 'Cores' },
  { name: 'Sons' },
  { name: 'Banner-color' },
  { name: 'Texto' }
]

function Navbar(): JSX.Element {
  const { pathname } = useLocation()

  return (
    <Container>
      {pages.map((page: pagesI, n) => {
        return (
          <Link key={n} to={page.name}>
            <Button isprimaly={pathname.includes(page.name)}>{page.name}</Button>
          </Link>
        )
      })}
    </Container>
  )
}

export default Navbar
