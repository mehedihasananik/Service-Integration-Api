import axios from "axios";

const OrderRequirementDetails = async (
  orderID,
  setDeliveryDetails,
  setLoading
) => {
  setLoading(true);
  try {
    const response = await axios.post(
      `
http://192.168.10.14:8000/api/order_delivery`,
      {
        order_id: orderID,
      }
    );
    // console.log(response.data);
    setDeliveryDetails(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error (e.g., show an error message)
  } finally {
    setLoading(false); // Set loading to false regardless of success or failure
  }
};

export default OrderRequirementDetails;
