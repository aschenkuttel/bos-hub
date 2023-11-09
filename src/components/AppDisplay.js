import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import Rating from '@/components/Rating'
import Bookmark from '@/components/Bookmark'

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
                    className={clsx('rounded-xl bg-white border', iconClassName, size)}
                />
            </Link>

            <div className='flex justify-between'>
                <div className="ml-0.5 mt-2">
                    <p className="font-semibold text-base tracking-tighter text-gray-700">{app.name}</p>
                    <Rating value={app.rating} />
                </div>

                <Bookmark size="text-xl" appId={app.id} />
            </div>
        </div>
    )
}

export const AppDisplaySide = ({ app, size, wrapperClassName, iconClassName }) => {
    return (
        <div className={clsx('flex gap-2 text-sm', wrapperClassName)}>
            <Link href={`/app/${app.id}`}>
                <Image
                    width={256}
                    height={256}
                    quality={100}
                    src={app.iconUrl || '/images/placeholder.svg'}
                    alt={app.name}
                    className={clsx('rounded-xl bg-white border', iconClassName, size)}
                />
            </Link>

            <div className="max-w-xs mt-0.5">
                <p className="font-semibold">{app.name}</p>
                <Rating value={app.rating} />
            </div>
        </div>
    )
}
