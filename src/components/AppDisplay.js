import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

export const AppDisplayBottom = ({ app, size, wrapperClassName, iconClassName }) => {
    return (
        <div className={clsx('text-sm', wrapperClassName)}>
            <Link href={`/app/${app.id}`}>
                <Image
                    width={256}
                    height={256}
                    quality={100}
                    src={app.iconUrl || '/images/placeholder.svg'}
                    alt={app.name}
                    className={clsx('rounded-xl bg-white border', iconClassName, size && `h-${size} w-${size}`)}
                />
            </Link>

            <div className="ml-0.5 mt-2">
                <p className="font-semibold">{app.name}</p>
                <p>{app.rating}</p>
            </div>
        </div>
    )
}

export const AppDisplaySide = ({ app }) => {
    return (
        <div className="flex gap-2 text-sm">
            <div className="h-16 w-16 rounded-xl bg-white border" />
            <div className="max-w-xs mt-0.5">
                <p className="font-semibold">{app.name}</p>
                <p>{app.rating}</p>
            </div>
        </div>
    )
}
