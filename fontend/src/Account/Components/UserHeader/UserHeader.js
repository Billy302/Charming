import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { RiNotification3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function UserHeader() {
  return (
    <header>
      <nav>
        <ul>
          <img
            className="logo"
            src={require('../../images/charming_logo.png')}
            alt="logo"
          />
          <li>
            <Link to="/" className="navLeft">
              柴米 Charming
            </Link>
          </li>
          <li>
            <Link to="/account" className="navRigh">
              <img
                className="navRight"
                src={require('../../images/Avatar3.png')}
                alt="avatar"
              />
            </Link>
          </li>
          <li>
            <Link to="/notice" className="navRight">
              <RiNotification3Fill />
            </Link>
          </li>
          <li>
            <Link to="/shoppinglist" className="navRight">
              <FaShoppingCart />
            </Link>
          </li>
          <li>
            <Link to="/signin/recover" className="navRight">
              柴社
            </Link>
          </li>
          <li>
            <Link to="/signin/recover" className="navRight">
              柴訊
            </Link>
          </li>
          <li>
            <Link to="/signin/identify" className="navRight">
              柴米人
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default UserHeader
