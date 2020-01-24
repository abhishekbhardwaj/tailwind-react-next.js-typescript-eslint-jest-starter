import Error, { ErrorProps } from 'next/error'
import Router from 'next/router'

export default Error

// Doing this to support trailing slash on URL's: https://github.com/zeit/next.js/issues/5214#issuecomment-564724632
// Now `/dashboard/` will redirect to `/dashboard`. Earlier `/dashboard/` would redirect to 404.
Error.getInitialProps = ({
  res,
  err,
  asPath
}): ErrorProps | Promise<ErrorProps> => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res
    ? res.statusCode
    : err && err.statusCode
    ? err.statusCode
    : 404

  if (statusCode && statusCode === 404 && asPath) {
    if (asPath.match(/\/$/)) {
      const withoutTrailingSlash = asPath.substr(0, asPath.length - 1)
      if (res) {
        res.writeHead(302, {
          Location: withoutTrailingSlash
        })
        res.end()
      } else {
        Router.push(withoutTrailingSlash)
      }
    }
  }

  return { statusCode }
}
