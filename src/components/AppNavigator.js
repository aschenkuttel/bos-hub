import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faSubway } from '@fortawesome/free-solid-svg-icons'
import Connect from '@/components/Connect'

export default function AppNavigator() {
    return (
        <div className="fixed bottom-4 right-4 w-56 text-right z-[999]">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-800 border px-3 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        <FontAwesomeIcon icon={faBars} className='text-2xl' />
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
                    <Menu.Items className="absolute transform -top-2 -translate-y-full right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-2 py-2 ">
                            <Connect className='w-full'/>
                        </div>

                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'relative bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <FontAwesomeIcon icon={faSubway} className='mr-2 h-5 w-5' />
                                        Edit
                                    </button>
                                )}
                            </Menu.Item>
                        </div>

                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <FontAwesomeIcon icon={faSubway} className='mr-2 h-5 w-5' />
                                        Delete
                                    </button>
                                )}
                            </Menu.Item>
                        </div>

                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <FontAwesomeIcon icon={faXmark} className='mr-2 h-5 w-5' />
                                        Delete
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

