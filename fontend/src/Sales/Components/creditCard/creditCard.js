import './CreditCard.css'
import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from 'reactjs-credit-card/form'
import Card from 'reactjs-credit-card/card'
import { useCardForm } from 'reactjs-credit-card'
import { useState } from 'react'

function CreditCard() {
  //useCardForm is a hook which returns a function.If this function calls,function returns credit card form data values and their validations
  const getFormData = useCardForm()
  const [numberValid, setNumberValid] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const [data, isValid] = getFormData()
    console.log(data, isValid)
    if (!data.number.isValid) setNumberValid(false) //we'll set a hook to show a error if card number is invalid

    if (!isValid)
      alert(
        `${data.holder.value} form data values invalid :) and holder also ${
          data.holder.isValid ? 'valid' : 'invalid'
        }`
      )
  }

  //We can set any form element attribute
  function handleFocus() {
    setNumberValid(true)
  }

  return (
    <div className="container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <CardNumber
            placeholder="Card Number"
            className={`input-text${!numberValid ? ' error' : ''}`}
            onFocus={handleFocus}
          />
          <CardHolder placeholder="Card Holder" className="input-text" />
          <div className="flex-wrapper">
            <div className="semi flex-wrapper">
              <ValidThruMonth
                placeholder="Card Holder"
                className="input-text semi"
              />
              <ValidThruYear
                placeholder="Card Holder"
                className="input-text semi"
              />
            </div>
            <CardSecurityCode placeholder="CVV" className="input-text semi" />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
      <Card fixClass="fix-new" cardClass="card-new" />
    </div>
  )
}

export default CreditCard
