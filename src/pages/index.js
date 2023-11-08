import Search from '@/components/Search'
import { BaseCard } from '@/components/Card'
import { AppDisplayBottom, AppDisplaySide } from '@/components/AppDisplay'

const apps = [
    {
        name: 'Example App',
        rating: 90,
    },
    {
        name: 'Example App',
        rating: 90,
    },
    {
        name: 'Example App',
        rating: 90,
    },
    {
        name: 'Example App',
        rating: 90,
    },
    {
        name: 'Example App',
        rating: 90,
    },
    {
        name: 'Example App',
        rating: 90,
    },
]

export default function Browse() {
    return (
        <div className="w-full flex-1 flex justify-center p-4">
            <div className="w-full max-w-4xl py-16">
                <Search />

                <div className="flex flex-col gap-4 mt-8">
                    <BaseCard className="flex w-full">
                        <div className="flex-1 flex flex-col gap-4">
                            <p>Most Bookmarked</p>

                            {Array(5)
                                .fill(0)
                                .map((_, i) => {
                                    return (
                                        <div key={i} className='w-full flex justify-between pr-4'>
                                            <AppDisplaySide {...apps[i]} />

                                            Bookmark
                                        </div>
                                    )
                                })}
                        </div>

                        <div className="flex-1 flex flex-col gap-4">
                            <p>Trending</p>

                            {Array(5)
                                .fill(0)
                                .map((_, i) => {
                                    return (
                                        <div key={i} className='w-full flex justify-between pr-4'>
                                            <AppDisplaySide {...apps[i]} />

                                            Bookmark
                                        </div>
                                    )
                                })}
                        </div>
                    </BaseCard>

                    <BaseCard className="w-full">
                        <div className='p-4'>
                            <p className='text-xl font-medium'>
                                DeFi
                            </p>
                            <div className="flex gap-4 rounded-lg mt-2">
                                {apps.map((app) => {
                                    return <AppDisplayBottom key={app.name} {...app} />
                                })}
                            </div>
                        </div>

                        <div className='p-4'>
                            <p className='text-xl font-medium'>
                                DAO
                            </p>
                            <div className="flex gap-4 rounded-lg mt-2">
                                {apps.map((app) => {
                                    return <AppDisplayBottom key={app.name} {...app} />
                                })}
                            </div>
                        </div>

                        <div className='p-4'>
                            <p className='text-xl font-medium'>
                                NFT
                            </p>
                            <div className="flex gap-4 rounded-lg mt-2">
                                {apps.map((app) => {
                                    return <AppDisplayBottom key={app.name} {...app} />
                                })}
                            </div>
                        </div>

                        <div className='p-4'>
                            <p className='text-xl font-medium'>
                                Games
                            </p>
                            <div className="flex gap-4 rounded-lg mt-2">
                                {apps.map((app) => {
                                    return <AppDisplayBottom key={app.name} {...app} />
                                })}
                            </div>
                        </div>

                        <div className='p-4'>
                            <p className='text-xl font-medium'>
                                Social
                            </p>
                            <div className="flex gap-4 rounded-lg mt-2">
                                {apps.map((app) => {
                                    return <AppDisplayBottom key={app.name} {...app} />
                                })}
                            </div>
                        </div>

                        <div className='p-4'>
                            <p className='text-xl font-medium'>
                                Misc
                            </p>
                            <div className="flex gap-4 rounded-lg mt-2">
                                {apps.map((app) => {
                                    return <AppDisplayBottom key={app.name} {...app} />
                                })}
                            </div>
                        </div>
                    </BaseCard>
                </div>
            </div>
        </div>
    )
}
