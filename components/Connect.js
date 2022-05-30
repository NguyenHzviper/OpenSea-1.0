import React from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'
import { useEffect } from 'react'
import {client} from '../lib/sanityClient'
import toast, {Toaster} from 'react-hot-toast'

const style ={
    button:   `h-[40px] w-[40px]`,
}

const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Connect Success${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    )
  }

function Connect() {
    const { address, connectWallet, disconnectWallet } = useWeb3()
    //Get wallet name and waller address to database
    useEffect(() => {
        if (!address) return
        ;(async () => {
          const userDoc = {
            _type: 'users',
            _id: address,
            userName: 'Unnamed',
            walletAddress: address,
          }
    
          const result = await client.createIfNotExists(userDoc)

          welcomeUser(result.userName)
        })()
      }, [address])

  return (
    <div>
      {address && (
          <button className={style.button} onClick={disconnectWallet}>
          <MdOutlineAccountBalanceWallet/>
          <Toaster position='top-center' reverseOrder={false}/>
      </button>
      )}
      {!address &&(
         <button className={style.button} onClick={() => connectWallet('injected')}>
         <MdOutlineAccountBalanceWallet/>
         <Toaster position='top-center' reverseOrder={false}/>
         </button>
      )}
    </div>   
  )
}

export default Connect