import React from 'react'
import { randomBytes } from "crypto-browserify";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { change, selectInput } from './inputSlice'

const Input = () => {
  const input = useAppSelector(selectInput);
  const dispatch = useAppDispatch();

  function generateCharacter() {
    return randomBytes(32).toString('hex');
  }

  return (
    <>
      <button type="button" onClick={() => dispatch(change(generateCharacter()))}>Random character</button>
      <p>{input}</p>
    </>
  )
}

export default Input