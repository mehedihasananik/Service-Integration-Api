import { apiEndpoint } from "./config";
// homepage apis
const headerApi = `${apiEndpoint}/header`;
const bannerApi = `${apiEndpoint}/home_banner`;
const brandsApi = `${apiEndpoint}/home_brand`;
const servicesApi = `http://192.168.10.14:8000/api/sevice_items`;
const about_us_homeApi = `${apiEndpoint}/about_us_home`;
const sevice_portfolioApi = "https://admin.envobyte.com/api/sevice_portfolio";
const whyChoose_us = `${apiEndpoint}/home_choose_us`;

const serviceApi = `${apiEndpoint}/service`;
const testimonials_itemsApi = `${apiEndpoint}/testimonials_items`;
const faqApi = `http://192.168.10.16:8000/api/faq`;
const user_feedbackApi = `http://192.168.10.16:8000/api/user_feedback`;
const user_contactApi = `${apiEndpoint}/contact`;
const footer = `${apiEndpoint}/footer`;

// services page
const serviceListApi = `${apiEndpoint}/category`;
const allsServiceItemsApi = `http://192.168.10.16:8000/api/sevice_items`;

// single service page

const singeServiceDetails = `http://192.168.10.16:8000/api/sevice_items_details`;
const singleSliderPageDetails = `http://192.168.10.16:8000/api/service_items_slider`;
const singleService_package = `http://192.168.10.16:8000/api/service_package`;

// portfolio page
const searchServiceApi = `${apiEndpoint}/search_sevice_category`;
const search_sevice_categoryAll = `${apiEndpoint}/search_sevice_category/all`;

// single Portfolio page
const singlePortfolio = `${apiEndpoint}/portfolio_details`;

// about page
const aboutUsApi = `http://192.168.10.16:8000/api/aboutus_page`;
const aboutUsItemApi = `${apiEndpoint}/aboutus_page_item`;

// register page page
const signupApi = `${apiEndpoint}/sign_up`;

// login
const loginApi = `${apiEndpoint}/user_login`;

// dashboard apis

const dashboardApis = `${apiEndpoint}/service_order_dashboard`;

// manage order
const manageOrderApi = `${apiEndpoint}/manage_order`;

// singeRequirement

const singleRequirement = `${apiEndpoint}/service_requirements`;

// checkout api
const checkoutApi = `${apiEndpoint}/checkout`;
// service order
const serviceOrder = `${apiEndpoint}/service_order`;

export {
  headerApi,
  bannerApi,
  brandsApi,
  servicesApi,
  about_us_homeApi,
  sevice_portfolioApi,
  whyChoose_us,
  serviceApi,
  testimonials_itemsApi,
  faqApi,
  user_contactApi,
  footer,
  user_feedbackApi,
  serviceListApi,
  allsServiceItemsApi,
  loginApi,
  searchServiceApi,
  search_sevice_categoryAll,
  aboutUsApi,
  aboutUsItemApi,
  singeServiceDetails,
  singleSliderPageDetails,
  singleService_package,
  signupApi,
  singlePortfolio,
  dashboardApis,
  manageOrderApi,
  singleRequirement,
  checkoutApi,
  serviceOrder,
};
