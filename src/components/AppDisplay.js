export const AppDisplayBottom = (app) => {
    return (
        <div className=''>
        <div className='text-sm'>
            <div className="h-28 w-28 rounded-xl bg-white border" />
            <div className='ml-0.5'>
                <p className="font-semibold">{app.name}</p>
                <p >{app.rating}</p>
            </div>
        </div>
        </div>
    )
}

export const AppDisplaySide = (app) => {
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