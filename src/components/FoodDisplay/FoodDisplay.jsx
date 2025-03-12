// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContextProvider'
// import FoodItem from '../FoodItem/FoodItem'

// const FoodDisplay = ({category}) => {
//     const {food_list}= useContext(StoreContext)
//   return (
//     <div>
//         <div className="food-display" id='food-display'></div>
//       <h2>Top Dishes Near You</h2>
//       <div className="food-display-list">
//         {food_list.map((item,index)=>{
//             return <FoodItem key={index} id={item.id}
//             description={item.description} price={item.price} image={item.image}/>
//         })}
//       </div>
//     </div>
//   )
// }

// export default  FoodDisplay
import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContextProvider';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="food-display">
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
                {food_list.length > 0 ? (
                    food_list.map((item) => (
                        <FoodItem 
                            key={item.id} 
                            id={item.id} 
                            name={item.name}
                            description={item.description} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))
                ) : (
                    <p>No food items available.</p>
                )}
            </div>
        </div>
    );
};

export default FoodDisplay;
