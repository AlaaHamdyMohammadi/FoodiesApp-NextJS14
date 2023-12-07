import Link from "next/link"
import Image from "next/image";

import logoImg from '@/assets/logo.png';
import classes from './MainHeader.module.css';

function MainHeader() {
    return (
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="logo" width={200} height={200} priority/>
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default MainHeader
