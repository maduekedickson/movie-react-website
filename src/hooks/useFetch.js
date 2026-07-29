import { useEffect, useState } from 'react'

const useFetch = (fetcher, deps = []) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)

    fetcher()
      .then((response) => {
        if (mounted) {
          setData(response)
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err)
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false)
        }
      })

    return () => {
      mounted = false
    }
  }, deps)

  return { data, loading, error }
}

export default useFetch
