import React from 'react';
interface TableRowProps {
  imageOverview: 'overview-1' | 'overview-2' | 'overview-3' | 'overview-4';
  title: string;
  platform: string;
  item: number;
  nominal: number;
  status: 'Success' | 'Pending' | 'Failed';
}

export default function TableRow(props: TableRowProps) {
  const { imageOverview, title, platform, item, nominal, status } = props;
  return (
    <>
      <tr className="align-middle">
        <th scope="row">
          <img
            className="float-start me-3 mb-lg-0 mb-3"
            src={`/img/${imageOverview}.png`}
            width="80"
            height="60"
            alt=""
          />
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">
              {title}
            </p>
            <p className="text-xs fw-normal text-start color-palette-2 m-0">
              {platform}
            </p>
          </div>
        </th>
        <td>
          <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
        </td>
        <td>
          <p className="fw-medium text-start color-palette-1 m-0">
            Rp {nominal}
          </p>
        </td>
        <td>
          <div>
            <span
              className={`float-start icon-status ${status.toLowerCase()}`}
            ></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              {status}
            </p>
          </div>
        </td>
      </tr>
    </>
  );
}
