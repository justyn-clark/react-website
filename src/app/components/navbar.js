import React from 'react';
import {Link} from 'react-router';
import Headroom from 'react-headroom';
import {
  Row,
  Column,
  TopBar,
  TopBarTitle,
  TopBarRight,
  Menu,
  MenuItem,
  ResponsiveNavigation
} from 'react-foundation';

const Navbar = () => (
  <Headroom>
    <ResponsiveNavigation>
      <TopBar className="navbar">
        <Row>
          <Column>
            <TopBarTitle className="navbar__title">
              <Link to="/">jcCode</Link>
            </TopBarTitle>
            <TopBarRight className="navbar__right">
              <Menu>
                <MenuItem><Link to="/about">About</Link></MenuItem>
                <MenuItem><Link to="/work">Work</Link></MenuItem>
                <MenuItem><Link to="/gallery">Gallery</Link></MenuItem>
                <MenuItem><Link to="/blog">Blog</Link></MenuItem>
                <MenuItem><Link to="/contact">Contact</Link></MenuItem>
              </Menu>
            </TopBarRight>
          </Column>
        </Row>
      </TopBar>
    </ResponsiveNavigation>
  </Headroom>
);

export default Navbar;
