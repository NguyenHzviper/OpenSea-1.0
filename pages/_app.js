import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

// 1. Ethereum Mainnet
// 4. Rinkeby (Ethereum testnet)
// 56. Binance Smart Chain Mainnet
// 137. Polygon Mainnet
const supportedChainIds = [4,1,56,137]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
