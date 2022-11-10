import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  h1 {
    color: #565656;
  }

  form {
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #fff;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  gap: 10px;
  input {
    opacity: 0;
    width: 1px;
  }
`

export const Input = styled.input`
  background-color: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding-left: 10px;
  height: 40px;
  width: 100%;
  border: none;
  outline: none;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
  }
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  min-width: 250px;
  margin-top: 25px;
`

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    height: 15px;
    cursor: pointer;
  }
`

export const Label = styled.p`
  color: #fff;
`
