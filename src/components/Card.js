import clsx from 'clsx'

export const BaseCard = ({ children, className }) => {
    return <div className={clsx('bg-slate-50 border border-slate-100 rounded-lg p-4', className)}>{children}</div>
}

export const Card = ({ children, className, innerClassName, padding = 'p-6' }) => {
    return (
        <div className={clsx('overflow-hidden rounded-lg bg-white border', className)}>
            <div className={clsx(padding, innerClassName)}>{children}</div>
        </div>
    )
}
