import { BaseCard } from '@/components/Card'
import Button from '@/components/Button'

export default function Publish() {
    return (
        <div className='w-full flex-1 px-4 py-16'>
            <BaseCard className='max-w-sm w-full flex flex-col gap-4 mx-auto'>
                <p className='text-2xl font-medium'>
                    Publish your App
                </p>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Application Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            placeholder="BOS Royale"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Unique Identifier
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            placeholder="bos-app"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
                        Application URL
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="url"
                            id="url"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            placeholder="root.near/widget/Wiki"
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                           htmlFor="file_input">Icon</label>
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input" type="file"/>
                </div>

                <div>
                    <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
                        Tags
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="url"
                            id="url"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            placeholder="dao game nft"
                        />
                    </div>
                </div>

                <div className='flex justify-end'>
                    <Button>
                        Publish
                    </Button>
                </div>
            </BaseCard>

        </div>
    )
}