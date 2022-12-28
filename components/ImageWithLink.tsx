import Link from 'next/link'
import Image from 'next/image'

import ImageWithLinkProps from '../interfaces/imageWithLinkProps'

export default function ImageWithLink(props: ImageWithLinkProps) {
    return (
        <Link href={props.href}>
            <a>
                <Image src={props.src} alt={props.name} width={props.width} height={props.height} />
            </a>
        </Link>
    )
}
