import React from 'react';
import ButtonTabs from './ButtonTabs';
import TableRow from './TableRow';

export default function TransactionContent() {
  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            My Transactions
          </h2>
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">
              Rp 4.518.000.500
            </h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                <ButtonTabs title="All Trx" filter="*" isActive />
                <ButtonTabs title="Success" filter="success" />
                <ButtonTabs title="Pending" filter="pending" />
                <ButtonTabs title="Failed" filter="failed" />
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  <TableRow
                    title="Mobile Legends: The New Battle 2021"
                    item={200}
                    nominal={290000}
                    status="Pending"
                    imageOverview="overview-1"
                    platform="Mobile"
                  />
                  <TableRow
                    title="Call of Duty:Modern"
                    item={550}
                    nominal={740000}
                    status="Success"
                    imageOverview="overview-2"
                    platform="Mobile"
                  />
                  <TableRow
                    title="Clash of Clans"
                    item={100}
                    nominal={120000}
                    status="Failed"
                    imageOverview="overview-3"
                    platform="Mobile"
                  />
                  <TableRow
                    title="The Royal Game"
                    item={225}
                    nominal={200000}
                    status="Pending"
                    imageOverview="overview-4"
                    platform="Mobile"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
