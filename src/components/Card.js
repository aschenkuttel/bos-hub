import clsx from 'clsx'

export const BaseCard = ({ children, className }) => {
    return <div className={clsx('bg-slate-50 border border-slate-100 rounded-lg p-4', className)}>{children}</div>
}

export const Card = ({ children, className, innerClassName }) => {
    return (
        <div className={clsx('overflow-hidden rounded-lg bg-white shadow', className)}>
            <div className={clsx('px-4 py-5 sm:p-6', innerClassName)}>{children}</div>
        </div>
    )
}
