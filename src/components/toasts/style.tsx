import styled, { keyframes } from 'styled-components'
import { MEDIA_BREAK } from '../../layout'

export const ToastsContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 256px;
  background: transparent;
  pointer-events: none;
  z-index: 9997;

  @media (max-width: ${MEDIA_BREAK}px) {
    /* titlebars are ~56px */
    top: 60px;
    left: 0;
    right: 0;
    max-width: 100%;
  }
`

const toastFade = keyframes`

`

const Toast = styled.div``

export const WarnToast = styled(Toast)``
