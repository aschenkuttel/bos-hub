import clsx from 'clsx'

export const AppDisplayBottom = ({app, size = 28, wrapperClassName, iconClassName}) => {
    return (
        <div className={clsx('text-sm', wrapperClassName)}>
            <div className={clsx(
                'rounded-xl bg-white border',
                iconClassName,
                size !== null && `h-${size} w-${size}`
            )} />
            <div className='ml-0.5'>
                <p className="font-semibold">{app.name}</p>
                <p >{app.rating}</p>
            </div>
        </div>
    )
}

export const AppDisplaySide = ({app}) => {
    return (
        <div className='flex gap-4 text-sm'>
            <div className="h-16 w-16 rounded-xl bg-white border" />
            <div className='max-w-xs'>
                <p className="font-semibold">{app.name}</p>
                <p >{app.rating}</p>
            </div>
        </div>
    )
}