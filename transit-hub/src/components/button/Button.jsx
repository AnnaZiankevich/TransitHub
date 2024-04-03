import React from "react"
import { Link } from 'react-router-dom'
import './button.scss'

function Button( {label, link, func} ) {
  return (
    <div className="button">
        <Link to={link}>
            <button onClick={func}>
                <span>{label}</span>
            </button>
        </Link>
    </div>
  );
}

export default Button;