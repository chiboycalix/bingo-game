import { ModalWrapper, ModalContent } from './styles'

const WinModal = ({ children }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalWrapper>
  )
}

export default WinModal
