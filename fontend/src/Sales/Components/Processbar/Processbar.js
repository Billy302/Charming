import React from 'react'
import './ProcessBar.css'
function Processbar(props) {
  const { step } = props
  let start = step
  return (
    <>
      <div className="progressBar">
        <div>
          <div className="progressRound progressActive"></div>
          <div>步驟一</div>
          <div>購物車</div>
        </div>
        {start >= 2 ? (
          <div className="progressLine progressActive"></div>
        ) : (
          <div className="progressLine"></div>
        )}
        <div>
          {start >= 2 ? (
            <div className="progressRound progressActive"></div>
          ) : (
            <div className="progressRound"></div>
          )}
          <div>步驟二</div>
          <div>填資料</div>
        </div>
        {start > 2 ? (
          <div className="progressLine progressActive"></div>
        ) : (
          <div className="progressLine"></div>
        )}
        <div>
          {start > 2 ? (
            <div className="progressRound progressActive"></div>
          ) : (
            <div className="progressRound"></div>
          )}
          <div>步驟三</div>
          <div>付款</div>
        </div>
      </div>
    </>
  )
}
export default Processbar
