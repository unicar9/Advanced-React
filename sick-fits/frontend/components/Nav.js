import Link from 'next/Link'

const Nav = () => {
  return (
    <div>
        <Link href="/sell">
            <a>Sell!</a>
        </Link>

        <Link href="/">
            <a>Home!</a>
        </Link>
    </div>
  )
}

export default Nav
