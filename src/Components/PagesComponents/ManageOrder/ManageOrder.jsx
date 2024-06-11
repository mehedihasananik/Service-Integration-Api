"use client";

import Loading from "@/Components/Utilites/Loading/Loading";
import { fetchData } from "@/config/apiRequests.js";
import { apiEndpoint } from "@/config/config";
import { Pagination, Table } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ManageOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orders, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userData"))
      : null;

  const fetchOrderManageData = async () => {
    try {
      const data = await fetchData(`${apiEndpoint}/manage_order`, "POST", {
        user_id: user.id,
      });
      setOrder(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    fetchOrderManageData();
  }, []);

  return (
    <div
      className="scroll-y px-6"
      style={{ maxHeight: "calc(100vh - 20px)", overflowY: "auto" }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="overflow-x-auto">
            <Table hoverable className="cursor-pointer">
              <Table.Head>
                <Table.HeadCell className="order_title">
                  Order ID
                </Table.HeadCell>
                <Table.HeadCell className="order_title">Service</Table.HeadCell>
                <Table.HeadCell className="order_title">
                  Order Date
                </Table.HeadCell>
                <Table.HeadCell className="order_title">Price</Table.HeadCell>
                <Table.HeadCell className="order_title">Status</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {orders?.map((order) => {
                  const { sevice_items, order_status } = order;
                  // console.log(order);

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
                        {sevice_items?.title}
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
                        ${order.order_price}
                      </Table.Cell>
                      <Table.Cell>
                        <Link
                          href={
                            order_status === "Requirement Needed"
                              ? `requirement-page/${sevice_items.service_id}`
                              : `/order-delivery`
                          }
                          className="bg-[#FF8F5A] text-[14px] text-[#fff] font-[600] px-4 py-2 rounded-md"
                        >
                          {order_status}
                        </Link>
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
        </>
      )}
      {/* table */}
    </div>
  );
};

export default ManageOrder;
