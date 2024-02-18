import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 360px;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 14px;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Input = styled.input`
    height: 32px;
    border-radius: 8px;
    outline: transparent;
    border: 1px solid #000;
    padding: 0px 20px;
`

export const Button = styled.button`
    height: 42px;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 8px;
    border: 1px solid #000;
    cursor: pointer;
`