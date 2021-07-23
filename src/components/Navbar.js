import React from 'react';
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui';
import 'react-sidebar-ui/dist/index.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <div>
      <Sidebar bgColor='black' isCollapsed={true}>
        <Logo
          image=''
          imageName='react logo'/>
        <LogoText>Lillie Jirapattanalak</LogoText>
      <NavLink to="/">
      <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
          Home
        </Item>
      </NavLink>

        <NavLink to="/about">
        <Item bgColor='black'>
          <Icon><i className="fas fa-info"/></Icon>
          About Me
        </Item>
        </NavLink>
       
       <NavLink to="/project">
       <Item bgColor='black'>
          <Icon><i className="fas fa-sitemap"/></Icon>
          Projects
          </Item>
       </NavLink>

        <NavLink to="/contact">
        <Item bgColor='black'>
          <Icon><i className="far fa-address-book"/></Icon>
          Contact
        </Item>
        </NavLink>

        <Item bgColor='black'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Resume
        </Item>
      </Sidebar>
      </div>
    </div>
  )
};

export default Navbar;