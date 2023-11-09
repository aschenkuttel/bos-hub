import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition, Tab } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faBookOpen, faMobile, faTablet, faDesktop } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import Connect from '@/components/Connect'

export default function AppNavigator() {
    return (
        <div className="fixed bottom-4 right-4 w-56 text-right z-[999]">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        <FontAwesomeIcon icon={faBars} className="text-2xl" />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute transform -top-2 -translate-y-full w-48 right-0 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="p-2 ">
                            <Connect className="w-full" />
                        </div>

                        <div className="p-2">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href="/"
                                        className={`${
                                            active ? 'relative bg-gray-700 text-white' : 'text-gray-700'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm no-underline`}
                                    >
                                        <FontAwesomeIcon icon={faHouse} className="mr-2 h-5 w-5" />
                                        Home
                                    </Link>
                                )}
                            </Menu.Item>

                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href="/library"
                                        className={`${
                                            active ? 'bg-gray-700 text-white' : 'text-gray-700'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm no-underline`}
                                    >
                                        <FontAwesomeIcon icon={faBookOpen} className="mr-2 h-5 w-5" />
                                        Library
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>

                        <div className="">
                            <Menu.Item>
                                {({ active }) => (
                                    <Tab.Group as="div" selectedIndex={2}>
                                        <Tab.List className="flex space-x-1 p-2">
                                            <Tab
                                                className={({ selected }) =>
                                                    clsx(
                                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
                                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                        selected ? 'bg-white shadow' : 'text-gray-700'
                                                    )
                                                }
                                            >
                                                <FontAwesomeIcon icon={faMobile} fixedWidth className="text-base" />
                                            </Tab>

                                            <Tab
                                                className={({ selected }) =>
                                                    clsx(
                                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
                                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                        selected ? 'bg-white shadow' : 'text-gray-700'
                                                    )
                                                }
                                            >
                                                <FontAwesomeIcon icon={faTablet} fixedWidth className="text-base" />
                                            </Tab>

                                            <Tab
                                                className={({ selected }) =>
                                                    clsx(
                                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
                                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                        selected ? 'bg-white shadow' : 'text-gray-700'
                                                    )
                                                }
                                            >
                                                <FontAwesomeIcon icon={faDesktop} fixedWidth className="text-base" />
                                            </Tab>
                                        </Tab.List>
                                        <Tab.Panels className="" />
                                    </Tab.Group>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
