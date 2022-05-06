import React from 'react';
import Sidebar from '../../components/organisms/Sidebar';
import TransactionContent from '../../components/organisms/TransactionContent';

export default function transactions() {
  return (
    <>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionContent />
      </section>
    </>
  );
}
