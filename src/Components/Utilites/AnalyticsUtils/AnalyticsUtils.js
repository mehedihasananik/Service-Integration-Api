// analyticsUtils.js
export const handleOrderClick = ({
  eventType = "add_to_cart",
  itemId = "",
  packageData = {},
  serviceName = "Service Category",
  currency = "USD",
}) => {
  // Push event to dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventType,
    ecommerce: {
      currency: currency,
      value: packageData.package_price || 0,
      items: [
        {
          item_id: itemId,
          item_name: packageData.package_name || "Default Package",
          item_category: serviceName,
          item_brand: "Envobyte Ltd",
          price: packageData.package_price,
          price_period: packageData.monthly_subscription
            ? "monthly"
            : "one-time",
        },
      ],
    },
    "gtm.uniqueEventId": Date.now(),
  });
};
