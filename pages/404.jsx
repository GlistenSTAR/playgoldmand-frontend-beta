import Link from '../components/common/input/Link'
import cb from 'classnames'

const NotFoundPage = () => {
  return (
    <div className={cb(
      'w-screen h-screen opacity-100', 
      'flex justify-center items-center p-2 md:p-auto pt-10 md:pt-auto'
    )}>
      <div className="p-4 space-y-4">
        <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-6">
          <p className="font-semibold text-9xl text-yellow">404</p>
          <div className="space-y-4">
            <h1 id="pageTitle" className="flex items-center space-x-2">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-2xl font-medium  sm:text-3xl text-yellow">
                Oops! Page not found.
              </span>
            </h1>
            <p className="text-lg font-normal  text-gray-300">
              The page you are looking for was not found.
            </p>
            <p className="text-lg font-normal text-gray-300">
              You may return to the{' '}
              <Link href="/dashboard" className="text-yellow">
                <span className="cursor-pointer hover:underline uppercase">dashboard</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
