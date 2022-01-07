import React,{useState} from 'react'
import MenuList from '../MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import "./style.css";

const Restaurant = () => {
const [menu,setMenu] = useState(MenuList); 
const categories = [...new Set(MenuList.map((curElem)=> {return curElem.category;})),"All"];
const filterItem = (category) => {
    if (category === "All") {
        setMenu(MenuList);
      return;
    }

    const updatedList = MenuList.filter((curElem) => {
      return curElem.category === category;
    });

    setMenu(updatedList);
  }; 
return (
        <div>
            <Navbar categories={categories} filterItem={filterItem}/>
            <MenuCard menuList={menu}/>
        </div>
    )
}

export default Restaurant
