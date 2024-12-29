import { apiEndpoint } from "./config";
// homepage apis
const headerApi = `${apiEndpoint}/header`;
const bannerApi = `${apiEndpoint}/home_banner`;
const brandsApi = `${apiEndpoint}/home_brand`;
const servicesApi = `${apiEndpoint}/sevice_items`;
const about_us_homeApi = `${apiEndpoint}/about_us_home`;
const sevice_portfolioApi = `${apiEndpoint}/sevice_portfolio_update`;
const whyChoose_us = `${apiEndpoint}/home_choose_us`;

const serviceApi = `${apiEndpoint}/service`;
const testimonials_itemsApi = `${apiEndpoint}/testimonials_items`;
const faqApi = `${apiEndpoint}/faq`;
const user_feedbackApi = `${apiEndpoint}/user_feedback`;
const user_contactApi = `${apiEndpoint}/contact`;
const footer = `${apiEndpoint}/footer`;

// services page
const serviceListApi = `${apiEndpoint}/category`;
const allsServiceItemsApi = `${apiEndpoint}/sevice_items`;

// single service page

const singeServiceDetails = `${apiEndpoint}/sevice_items_details`;
const singleSliderPageDetails = `${apiEndpoint}/service_items_slider`;
const singleService_package = `${apiEndpoint}/service_package`;

// portfolio page
const searchServiceApi = `${apiEndpoint}/search_sevice_category`;
const updatePortfolio = `${apiEndpoint}/sevice_portfolio_update`;
const search_sevice_categoryAll = `${apiEndpoint}/search_sevice_category/all`;

// single Portfolio page
const singlePortfolio = `${apiEndpoint}/portfolio_details`;

// about page
const aboutUsApi = `${apiEndpoint}/aboutus_page`;
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

const successApi = `${apiEndpoint}/success`;
// service order
const serviceOrder = `${apiEndpoint}/service_order`;
// webscore

const business_webscore = `${apiEndpoint}/web-score`;
const customer_requirements = `${apiEndpoint}/customer/requirement`;
const onBoardingApiData = `${apiEndpoint}/onboarding`;
const onBoardingApiForm = `${apiEndpoint}/onboarding-form`;

// combopage
const comboTestimonial = `${apiEndpoint}/testimonials_items_landing`;
const comboPortfolioApi = `${apiEndpoint}/service_portfolio_landingpage`;
const comboCheckoutApi = `${apiEndpoint}/custom/checkout`;

// app page

const envobyteApps = `${apiEndpoint}/envobyte-apps`;
const envobyteComboLead = `${apiEndpoint}/combo-offer/lead`;

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
  business_webscore,
  successApi,
  customer_requirements,
  onBoardingApiData,
  onBoardingApiForm,
  updatePortfolio,
  comboTestimonial,
  comboPortfolioApi,
  comboCheckoutApi,
  envobyteApps,
  envobyteComboLead,
};
