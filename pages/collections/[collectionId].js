import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
const Collection= () => {
    const router = useRouter()
    console.log(router.query)
    console.log(router.query.CollectionId)
  return (
      <Link href="/">
          <h2>{router.query.CollectionId}</h2>
      </Link>
  )
}

export default Collection