import Search from '@/components/Search'
import { BaseCard } from '@/components/Card'
import { AppDisplayBottom, AppDisplaySide } from '@/components/AppDisplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

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
                    <BaseCard className='flex gap-4'>
                        {Array(5).fill(0).map((_, i) => {
                           return <AppDisplayBottom
                               key={`spotlight_${i}`}
                               app={apps[i]}
                               wrapperClassName='flex-1'
                               iconClassName='aspect-square'
                               size={null}
                           />
                        })}
                    </BaseCard>

                    <BaseCard className="flex w-full">
                        <div className="flex-1 flex flex-col gap-4">
                            <p>Most Bookmarked</p>

                            {Array(5)
                                .fill(0)
                                .map((_, i) => {
                                    return (
                                        <div key={i} className='w-full flex justify-between items-center'>
                                            <AppDisplaySide app={apps[i]} />

                                            <FontAwesomeIcon icon={faBookmark} fixedWidth className="text-gray-300 text-xl hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                    )
                                })}
                        </div>

                        <div className='border-l mx-8 my-4' />

                        <div className="flex-1 flex flex-col gap-4">
                            <p>Trending</p>

                            {Array(5)
                                .fill(0)
                                .map((_, i) => {
                                    return (
                                        <div key={i} className='w-full flex justify-between items-center pr-4'>
                                            <AppDisplaySide app={apps[i]} />

                                            <FontAwesomeIcon icon={faBookmark} fixedWidth className="text-gray-300 hover:text-indigo-600 text-xl" aria-hidden="true" />
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
                                    return <AppDisplayBottom key={app.name} app={app} />
                                })}
                            </div>
                        </div>

                        <div className='p-4'>
                            <p className='text-xl font-medium'>
                                DAO
                            </p>
                            <div className="flex gap-4 rounded-lg mt-2">
                                {apps.map((app) => {
                                    return <AppDisplayBottom key={app.name} app={app} />
                                })}
                            </div>
                        </div>

                        <div className='p-4'>
                            <p className='text-xl font-medium'>
                                NFT
                            </p>
                            <div className="flex gap-4 rounded-lg mt-2">
                                {apps.map((app) => {
                                    return <AppDisplayBottom key={app.name} app={app} />
                                })}
                            </div>
                        </div>

                        <div className='p-4'>
                            <p className='text-xl font-medium'>
                                Games
                            </p>
                            <div className="flex gap-4 rounded-lg mt-2">
                                {apps.map((app) => {
                                    return <AppDisplayBottom key={app.name} app={app} />
                                })}
                            </div>
                        </div>

                        <div className='p-4'>
                            <p className='text-xl font-medium'>
                                Social
                            </p>
                            <div className="flex gap-4 rounded-lg mt-2">
                                {apps.map((app) => {
                                    return <AppDisplayBottom key={app.name} app={app} />
                                })}
                            </div>
                        </div>

                        <div className='p-4'>
                            <p className='text-xl font-medium'>
                                Misc
                            </p>
                            <div className="flex gap-4 rounded-lg mt-2">
                                {apps.map((app) => {
                                    return <AppDisplayBottom key={app.name} app={app} />
                                })}
                            </div>
                        </div>
                    </BaseCard>
                </div>
            </div>
        </div>
    )
}
