import React from 'react';
import ContentOverview from '../../components/organisms/ContentOverview';
import Sidebar from '../../components/organisms/Sidebar';

export default function Index() {
  return (
    <>
      <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
        <ContentOverview />
      </section>
    </>
  );
}
