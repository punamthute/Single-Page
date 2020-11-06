import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

function Header() {
     return (
         <header className={styles.header}>
             <nav className={styles.nav}>
                 <div className={styles.appname}>
                       <NavLink  to="/Home">Simp <a style={{ color: '#34e1eb' }}>lex</a></NavLink>
                        </div>
                            <ul className={styles.menu}>
                               <li>
                                  <NavLink activeClassName="active" to="/Home" activeStyle={{backgroundColor:"#00e6e6"}} >HOME </NavLink>
                               </li>
                                   <li>
                                     <NavLink activeClassName="active" to="/Features" activeStyle={{backgroundColor:"#00e6e6"}}>FEATURES</NavLink>
                                  </li>
                                  <li>
                                     <NavLink activeClassName="active" to="/Blog" activeStyle={{backgroundColor:"#00e6e6"}}>BLOG</NavLink>
                                  </li>
                                  <li>
                                     <NavLink activeClassName="active" to="/contact" activeStyle={{backgroundColor:"#00e6e6"}}>CONTACT</NavLink>
                                  </li>
                            </ul> 
                         </nav>
             </header>
  );
}
export default Header;