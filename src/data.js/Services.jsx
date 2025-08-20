import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Services from "../component/Services";

const services = [
  {
    id: 1,
    title: "Free Shipping",
    desc: "On all orders over $50",
    Icon: LocalShippingIcon,
  },
  {
    id: 2,
    title: "Secure Payment",
    desc: "100% secure payment",
    Icon: PaymentIcon,
  },
  {
    id: 3,
    title: "Money Back",
    desc: "30 days guarantee",
    Icon: MonetizationOnIcon,
  },
  {
    id: 4,
    title: "24/7 Support",
    desc: "We are here to help",
    Icon: SupportAgentIcon,
  },
];

export default services;
