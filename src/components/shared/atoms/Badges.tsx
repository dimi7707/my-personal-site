import React from 'react'

export const Badges = ({ text }) => {
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 bg-indigo-800 text-white dark:bg-yellow-300 dark:text-black"
    >
     { text }
    </span>
  )
}
