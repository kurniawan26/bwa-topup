import React from 'react';
import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            href="/member"
            menuItem="Overview"
            isActive={activeMenu === 'overview'}
          />
          <MenuItem
            href="/member/transactions"
            menuItem="Transactions"
            isActive={activeMenu === 'transactions'}
          />
          <MenuItem href="#" menuItem="Messages" />
          <MenuItem href="#" menuItem="Card" />
          <MenuItem href="#" menuItem="Rewards" />
          <MenuItem
            href="/member/edit-profile"
            menuItem="Settings"
            isActive={activeMenu === 'settings'}
          />
          <MenuItem href="sign-in" menuItem="Logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
