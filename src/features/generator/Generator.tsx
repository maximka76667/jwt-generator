import React from 'react'
import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { change, selectJwt } from './generatorSlice'
import "./Generator.sass"

const Generator = () => {
  const jwt = useAppSelector(selectJwt);
  const dispatch = useAppDispatch();

  function generateToken() {
    return nanoid(32);
  }

  return (
    <div className='generator'>
      <button className='generator__button' aria-label='Generate token' type="button" onClick={() => dispatch(change(generateToken()))}>Generate token</button>
      <p className='generator__text'>{jwt}</p>
    </div>
  )
}

export default Generator