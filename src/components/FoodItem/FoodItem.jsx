import React, { useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets'; // Assuming star images are stored here

const FoodItem = ({ id, name, description, price, image, rating }) => {
    const [itemCount, setItemCount] = useState(0);

    // Function to increase the item count
    const increaseCount = () => {
        setItemCount(prevCount => prevCount + 1);
    };

    // Function to decrease the item count (prevent going below 0)
    const decreaseCount = () => {
        if (itemCount > 0) {
            setItemCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className="food-item">
            
            <img src={image} alt={name}/>
            
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="price">{price}৳</p>
            
            <div className="rating">
                {Array.from({ length: 5 }, (_, i) => (
                    <img
                        key={i}
                        src={i < rating ? assets.filled_star : assets.star}
                        alt="star"
                        className="star-icon"
                    />
                ))}
            </div>

            {/* Order Counter */}
            <div className="order-counter">
                <button className="counter-btn" onClick={decreaseCount}>-</button>
                <span className="item-count">{itemCount}</span>
                <button className="counter-btn" onClick={increaseCount}>+</button>
            </div>
        </div>
    );
};

export default FoodItem;
