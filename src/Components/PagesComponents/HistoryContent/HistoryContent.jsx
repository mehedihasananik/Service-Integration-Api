"use client";

import { Table } from "flowbite-react";
import { useState } from "react";

const HistoryContent = () => {
  return (
    <div className="px-6">
      {/* table */}
      <div className="overflow-x-auto">
        <Table hoverable className="cursor-pointer">
          <Table.Head>
            <Table.HeadCell className="order_title">Order ID</Table.HeadCell>
            <Table.HeadCell className="order_title">
              Service Name & Package
            </Table.HeadCell>
            <Table.HeadCell className="order_title">Price</Table.HeadCell>
            <Table.HeadCell className="order_title">Date & Time</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[600]"
              >
                JUN120322
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                Logo Design - Standard
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                <div className="flex items-center gap-x-0.5">
                  <span>$ </span>
                  <span>39</span>
                </div>
              </Table.Cell>
              <Table.Cell
                className="text-[#3371F2] text-[16px] font-Roboto 
              font-[600] "
              >
                10.00 AM, June 13, 2023
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[600]"
              >
                JUN120322
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                Logo Design - Standard
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                <div className="flex items-center gap-x-0.5">
                  <span>$ </span>
                  <span>39</span>
                </div>
              </Table.Cell>
              <Table.Cell
                className="text-[#3371F2] text-[16px] font-Roboto 
              font-[600] "
              >
                10.00 AM, June 13, 2023
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[600]"
              >
                JUN120322
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                Logo Design - Standard
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                <div className="flex items-center gap-x-0.5">
                  <span>$ </span>
                  <span>39</span>
                </div>
              </Table.Cell>
              <Table.Cell
                className="text-[#3371F2] text-[16px] font-Roboto 
              font-[600] "
              >
                10.00 AM, June 13, 2023
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[600]"
              >
                JUN120322
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                Logo Design - Standard
              </Table.Cell>
              <Table.Cell
                className="text-[#555] text-[14px] font-Raleway 
              font-[500]"
              >
                <div className="flex items-center gap-x-0.5">
                  <span>$ </span>
                  <span>39</span>
                </div>
              </Table.Cell>
              <Table.Cell
                className="text-[#3371F2] text-[16px] font-Roboto 
              font-[600] "
              >
                10.00 AM, June 13, 2023
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default HistoryContent;
