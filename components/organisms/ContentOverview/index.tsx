import React from 'react';
import Category from './Category';
import TableRow from './TableRow';

export default function ContentOverview() {
  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                <Category platform="Desktop" spent={18000500} />
                <Category platform="Mobile" spent={8455000} />
                <Category platform="Other" spent={5000000} />
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
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    imageOverview="overview-1"
                    title="Mobile Legends: The New Battle 2021"
                    platform="Desktop"
                    item={200}
                    nominal={200000}
                    status={'Pending'}
                  />
                  <TableRow
                    imageOverview="overview-2"
                    title="Call of Duty:Modern"
                    platform="Desktop"
                    item={550}
                    nominal={740000}
                    status={'Success'}
                  />
                  <TableRow
                    imageOverview="overview-3"
                    title="Clash of Clans"
                    platform="Mobile"
                    item={100}
                    nominal={120000}
                    status={'Failed'}
                  />
                  <TableRow
                    imageOverview="overview-4"
                    title="The Royal Game"
                    platform="Mobile"
                    item={225}
                    nominal={200000}
                    status={'Pending'}
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
