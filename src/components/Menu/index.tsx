import { useRouter } from 'next/router'

import { PokemonTypesProps } from 'components/PokemonCard'

import * as S from './styles'
import React, { useState } from 'react'
import Modal from 'components/Modal'

export type MenuProps = {
  bgColor?: PokemonTypesProps | 'transparent'
  hasLogo?: boolean
  hasBackButton?: boolean
  positionLogo?: 'right' | 'left' | 'center'
  hasGitHubCorner?: boolean
}

const Menu = ({
  hasLogo,
  bgColor = 'transparent',
  positionLogo = 'center',
  hasBackButton
}: MenuProps) => {
  const router = useRouter()

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(!showModal)
  }

  return (
    <S.Wrapper positionLogo={positionLogo} bgColor={bgColor}>
      {hasBackButton && (
        <S.BackButton aria-label="back button" onClick={() => router.back()} />
      )}

      {hasLogo && (
        <>
          <img
            src="/img/pokemon-logo.svg"
            alt="Pokemon logo"
            height={59}
            width={200}
            role="button"
            onClick={openModal}
          />

          <Modal showModal={showModal} setShowModal={openModal} />
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
