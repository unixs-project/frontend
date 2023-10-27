import React from 'react'
import { Cover } from '../../components/Cover'
import { Wrapper } from '../../components/Wrapper'
import { RecoverPasswordForm } from '../../views/RecoverPasswordForm'

export function RecoverPassoword() {
  return (
    <Wrapper position={'left'}>
      <RecoverPasswordForm />
      <Cover />
    </Wrapper>
  )
}
