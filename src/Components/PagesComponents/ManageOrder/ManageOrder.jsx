"use client";

import API_ROUTES from "@/app/api/confiq";
import { fetchData } from "@/config/apiRequests.js";
import { manageOrderApi } from "@/config/apis";
import { Pagination, Table } from "flowbite-react";
import { useEffect, useState } from "react";

const ManageOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [orders, setOrder] = useState(null);
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  const fetchOrderManageData = async () => {
    try {
      const data = await fetchData(`${manageOrderApi}`, "POST", {
        user_id: userData.id,
      });
      setOrder(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchOrderManageData();
  }, []);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="px-6">
      {/* table */}
      <div className="overflow-x-auto">
        <Table hoverable className="cursor-pointer">
          <Table.Head>
            <Table.HeadCell className="order_title">Order ID</Table.HeadCell>
            <Table.HeadCell className="order_title">Service</Table.HeadCell>
            <Table.HeadCell className="order_title">Order Date</Table.HeadCell>
            <Table.HeadCell className="order_title">Price</Table.HeadCell>
            <Table.HeadCell className="order_title">Status</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {orders?.map((order) => {
              const { sevice_items } = order;

              return (
                <Table.Row
                  key={order.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell
                    className="text-[#555] text-[14px] font-Raleway 
                font-[600]"
                  >
                    {order.order_id}
                  </Table.Cell>
                  <Table.Cell
                    className="text-[#555] text-[14px] font-Raleway 
                font-[500]"
                  >
                    {sevice_items[0].title}
                  </Table.Cell>
                  <Table.Cell
                    className="text-[#555] text-[14px] font-Raleway 
                font-[500]"
                  >
                    {order.order_date}
                  </Table.Cell>
                  <Table.Cell
                    className="text-[#3371F2] text-[16px] font-Roboto 
                font-[600] "
                  >
                    {order.order_price}
                  </Table.Cell>
                  <Table.Cell>
                    <button className="bg-[#FF8F5A] text-[14px] text-[#fff] font-[600] px-4 py-2 rounded-md">
                      {order.order_status}
                    </button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
      {/* pagination */}
      <div className="bg-[#fff] flex overflow-x-auto sm:justify-center py-5 md:py-10 ">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default ManageOrder;
