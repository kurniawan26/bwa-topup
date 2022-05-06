import React from 'react';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';

export default function TransactionsDetails() {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <TransactionDetailContent />
      </section>
    </>
  );
}
