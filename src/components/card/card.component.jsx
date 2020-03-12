import React from 'react'

import './card.style.scss'

// import { FaFeatherAlt, FaGitkraken, FaHotjar } from 'react-icons/fa'

const Card = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="pricing-table">
          <div className="table-item">
            <i class="fas fa-feather"></i>
            <h5 className="subcription-type">Personal</h5>
            <ul className="features-list">
              <li className="fratures-item">fratures-item 1</li>
              <li className="fratures-item">fratures-item 2</li>
              <li className="fratures-item">fratures-item 3</li>
            </ul>
            <span className="subcription-price"> Free</span>
            <a href="#" className="cta">
              Add To Card
            </a>
          </div>
          <div className="table-item">
            <i class="fab fa-gitkraken"></i>
            <h5 className="subcription-type">Teams</h5>
            <ul className="features-list">
              <li className="fratures-item">fratures-item 1</li>
              <li className="fratures-item">fratures-item 2</li>
              <li className="fratures-item">fratures-item 3</li>
            </ul>
            <span className="subcription-price"> $200</span>
            <a href="#any" className="cta">
              Add To Card
            </a>
          </div>
          <div className="table-item">
            <i class="fab fa-hotjar"></i>
            <h5 className="subcription-type">Enterprise</h5>
            <ul className="features-list">
              <li className="fratures-item">fratures-item 1</li>
              <li className="fratures-item">fratures-item 2</li>
              <li className="fratures-item">fratures-item 3</li>
            </ul>
            <span className="subcription-price">$500</span>
            <a href="#" className="cta">
              Add To Card
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
