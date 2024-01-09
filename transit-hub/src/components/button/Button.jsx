import React from "react"
import { Link } from 'react-router-dom'
import './button.scss'

function Button( {label, link} ) {
  return (
    <div className="button">
        <Link to={link}>
            <button>
                <span>{label}</span>
            </button>
        </Link>
    </div>
  );
}

export default Button;