import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useTransactionError } from 'gamba-react-v2'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Modal } from './components/Modal'
import { StyledSection } from './components/Slider'
import { useToast } from './hooks/useToast'
import Dashboard from './sections/Dashboard/Dashboard'
import Game from './sections/Game/Game'
import Header from './sections/Header'
import RecentPlays from './sections/RecentPlays/RecentPlays'
import Toasts from './sections/Toasts'
import { useUserStore } from './hooks/useUserStore'
import { GambaUi } from 'gamba-react-ui-v2'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function ErrorHandler() {
  const walletModal = useWalletModal()
  const toast = useToast()
  const [error, setError] = React.useState<Error>()

  useTransactionError(
    (error) => {
      if (error.message === 'NOT_CONNECTED') {
        walletModal.setVisible(true)
        return
      }
      toast({ title: '❌ Transaction error', description: error?.error?.errorMessage ?? error.message })
    },
  )

  return (
    <>
      {error && (
        <Modal onClose={() => setError(undefined)}>
          <h1>Error occured</h1>
          <p>{error.message}</p>
        </Modal>
      )}
    </>
  )
}

export default function App() {
  const newcomer = useUserStore((state) => state.newcomer)
  const set = useUserStore((state) => state.set)
  return (
    <>
      {newcomer && (
        <Modal>
          <h1>Welcome to DOGGO GAMES</h1>
          <div style={{ position: 'relative' }}>
            <div style={{ maxHeight: '400px', padding: '10px', overflow: 'auto', position: 'relative' }}>
              <p><b>🐶 DOGGO$: Where Casino Games and crypto collide, bringing you laid-back meme fiesta and daily LIVE NIGHT CASINO EVENT</b></p>
              <p><b>🐾 20+ International and local groups/channel</b></p>
              <p><b>🚀 100+ KOLS</b></p>
              <p><b>🔒 10+ International YouTubers</b></p>
              <p><b>⚙️ CMC Fast Tracking Listing PAID</b></p>
              <p><b>🥶 50k+ Marketing Budget</b> </p>
              <p><b>💻 Shilling + Raids 24/7</b> </p>
              <p><b>🔍 AMA + DOXX + AUDIT + KYC Badges on PinkSale</b> </p>
              <p><b>💯 AIRDROP is LIVE with 2.1000.000 DOGGO$</b></p>
              <p><b>😁 MEME CONTEST prize pool 500$</b></p>
              <p><b>💰 No private sale No VCs</b></p>
              <a href="https://doggogames.com/"><p><b>https://doggogames.com/</b></p></a>
              <a href="https://twitter.com/SolDoggoGames"><p><b>https://twitter.com/SolDoggoGames</b></p></a>
              <a href="https://t.me/doggogames"><p><b>https://t.me/doggogames</b></p></a>
            </div>
            <div style={{ background: 'linear-gradient(180deg, transparent, #15151f)', height: '50px', pointerEvents: 'none', width: '100%', position: 'absolute', bottom: '0px', left: '0px' }}></div>
          </div>
          <p>
            By playing on our platform, you confirm your compliance.
          </p>
          <GambaUi.Button main onClick={() => set({ newcomer: false })}>
            Acknowledge
          </GambaUi.Button>
        </Modal>
      )}
      <ScrollToTop />
      <ErrorHandler />
      <Header />
      <Toasts />
      <StyledSection>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:gameId" element={<Game />} />
        </Routes>
        <h2 style={{ textAlign: 'center' }}>Recent Plays</h2>
        <RecentPlays />
      </StyledSection>
    </>
  )
}