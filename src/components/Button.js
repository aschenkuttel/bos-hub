import { cva } from 'class-variance-authority'
import clsx from 'clsx'

const button = cva('rounded font-semibold shadow-sm focus-visible:outline', {
    variants: {
        intent: {
            primary:
                'bg-teal-700 text-white hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
        },
        size: {
            xs: 'px-2 py-1 text-xs',
            sm: 'px-2 py-1 text-sm',
            md: 'px-2.5 py-1.5 text-sm',
            lg: 'px-3 py-2 text-sm',
            xl: 'px-3.5 py-2.5 text-sm',
        },
    },
    defaultVariants: {
        intent: 'primary',
        size: 'md',
    },
})

export default function Button({ children, intent, size, className, onClick, disabled = false }) {
    return (
        <button
            className={clsx(className, button({ intent, size }))}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    )
}
