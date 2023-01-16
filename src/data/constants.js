import User from "../assets/user.png";
import Parents from "../assets/Parents.png";
import Group from "../assets/Group.png";
import Group1 from "../assets/Group-1.png";
import Group2 from "../assets/Group-2.png";

export const initialFormData = {
  planType: null,
  name: "John Doe",
  emailID: "",
  phone: "",
  address_1: "",
  address_2: "",
  pincode: "",
  state: "",
  amount: 300000,
};

export const optionsData = [
  {
    id: 1,
    planName: "One",
    planType: "Individual",
    planMembers: "Self",
    imgSrc: User,
    premium: 600,
  },
  {
    id: 2,
    planName: "Pro",
    planType: "Individual",
    planMembers: "Parents",
    imgSrc: Parents,
    premium: 0,
  },
  {
    id: 3,
    planName: "Pro",
    planType: "Individual + Individual",
    planMembers: "Self + Parents",
    imgSrc: Group,
    premium: 0,
  },
  {
    id: 4,
    planName: "Max",
    planType: "Floater",
    planMembers: "Self + Spouse + Kids",
    imgSrc: Group1,
    premium: 1800,
  },
  {
    id: 5,
    planName: "Grand",
    planType: "Floater + Individual",
    planMembers: "Self + Spouse + Kids + Parents",
    imgSrc: Group2,
    premium: 2400,
  },
];

export const inputData = [
  {
    id: 1,
    name: "emailID",
    label: "Personal email address",
    type: "email",
    required: true,
  },
  {
    id: 2,
    name: "phone",
    label: "Mobile Number",
    type: "number",
    min: 1000000000,
    max: 9999999999,
    pattern: /^\d{10}$/,
    required: true,
  },
  {
    id: 3,
    name: "address_1",
    label: "Address Line 1",
    pattern: "^[a-zA-Z0-9,-./s]+$",
    type: "text",
    required: true,
  },
  {
    id: 4,
    name: "address_2",
    label: "Address Line 2",
    type: "text",
  },
  {
    id: 5,
    name: "pincode",
    label: "Pincode",
    min: 100000,
    max: 999999,
    type: "number",
    pattern: /^\d{6}$/,
    required: true,
  },
  {
    id: 6,
    name: "state",
    label: "State",
    type: "text",
    pattern: "^[a-zA-Z]+$",
    required: true,
  },
];

export const errorValues = {
  phone: "Mobile number should be 10 digits long",
  pincode: "Pincode should be 6 digits long",
  address_1: "Address line 1 is a required field",
  emailID: "Personal Email ID is a required field",
  state: "State is a required field and can only contain alphabets",
};

export const REGEX = {
  PHONE: new RegExp(/^\d{10}$/),
  EMAIL: new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{1,}$/),
  PINCODE: new RegExp(/^\d{6}$/),
  STATE: new RegExp(/^[a-zA-Z\s]{3,20}$/),
  ADDRESS: new RegExp(/^[a-zA-Z0-9,-./\s]+$/),
};

export const sliderData = ["₹1L", "₹2L", "₹3L", "₹4L", "₹5L"];
