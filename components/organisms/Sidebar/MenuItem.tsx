import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MenuProps {
  menuItem:
    | 'Overview'
    | 'Transactions'
    | 'Messages'
    | 'Card'
    | 'Rewards'
    | 'Settings'
    | 'Logout';
  isActive?: boolean;
  href: string;
}

export default function MenuItem(props: MenuProps) {
  const { menuItem, href, isActive = false } = props;
  return (
    <>
      <div className={`item ${isActive ? 'active' : ''} mb-30`}>
        <div className="me-3">
          <Image src={`/icon/${menuItem}.svg`} width={25} height={25} />
        </div>
        <p className="item-title m-0">
          <Link href={href}>
            <a className="text-lg text-decoration-none">{menuItem}</a>
          </Link>
        </p>
      </div>
    </>
  );
}
