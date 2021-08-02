import React, { useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { SimpleSwitchButton } from "../shared/atoms/SimpleSwitchButton";

export const TopNavBar = ({ navigationLinks }) => {

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  };

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <>
      <Disclosure as="nav" className="top-nav-bar bg-indigo-800 dark:bg-gray-900 lg:fixed lg:z-50 lg:w-full lg:top-0 lg:h-16">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                    { /* Space for logo */ }
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigationLinks.map((item) => (
                      <a
                        key={ `${item.name}-desktop`  }
                        href={item.href}
                        className={classNames(
                          item.current ? 'dark:bg-yellow-300  bg-indigo-200 text-black' : 'text-gray-300 dark:hover:bg-yellow-300 dark:hover:text-black hover:bg-indigo-200 hover:text-black dark:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <SimpleSwitchButton description="Dark / Ligth mode" />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((item) => (
                <a
                  key={ `${item.name}-mobile` }
                  href={item.href}
                  className={classNames(
                    item.current ? 'dark:bg-yellow-300 bg-indigo-200 text-black' : 'text-gray-300 dark:hover:bg-yellow-300 hover:bg-indigo-400 hover:text-white dark:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  )
};
