import Link from 'next/link'

import NavLinkProps from '../interfaces/navlinkProps'

import styles from '../styles/navlink.module.css'

export default function NavLink(props: NavLinkProps) {
    return (
        <Link href={props.href} passHref>
            <a className={styles.a}>{props.name} {props.children}</a>
        </Link>
    )
}
