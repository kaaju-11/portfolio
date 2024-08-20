
import { ReactNode } from 'react'
import { UploadFileModalContainer } from 'style/Home'

interface PopupProps {
  children: ReactNode
  background?: string
}

const Popup: React.FC<PopupProps> = ({ children, background }) => {
  return (
    <>
      <div className="BlurredBackground" style={{ background: background }} />
      <UploadFileModalContainer>{children}</UploadFileModalContainer>
    </>
  )
}

export default Popup
