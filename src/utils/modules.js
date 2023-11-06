//React-Icons
import { BiSolidVideo, BiQuestionMark } from "react-icons/bi";
import { HiMiniDocumentCheck } from "react-icons/hi2";
import { RiAttachment2 } from "react-icons/ri";

//Image
import Image from "../../public/vite.svg"

export const modules = [
 {
  id: 1,
  title: "Module1",
  description:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  imageUrl: '',
  content: [
   {
    type: "link",
    icon: RiAttachment2,
    description: "Link Description",
   },
   {
    type: "video",
    icon: BiSolidVideo,
    description: "Video Description",
    downloadLink: "#",
   },
   {
    type: "document",
    icon: HiMiniDocumentCheck,
    description: "Document Description",
    downloadLink: "#",
   },
   {
    type: "Template Test 1",
    icon: BiQuestionMark,
   },
   {
    type: "Template Test 2",
    icon: BiQuestionMark,
   },
   {
    type: "Template Test 3",
    icon: BiQuestionMark,
   },
  ],
 },
 {
  id: 2,
  title: "Module2",
  description:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  imageUrl: Image,
  content: [
   {
    type: "Template Test 1",
    icon: BiQuestionMark,
   },
   {
    type: "Template Test 2",
    icon: BiQuestionMark,
   },
   {
    type: "Template Test 3",
    icon: BiQuestionMark,
   },
  ],
 },
 {
  id: 3,
  title: "Module3",
  description:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  imageUrl: '',
  content: [
   {
    type: "Template Test 1",
    icon: BiQuestionMark,
   },
   {
    type: "Template Test 2",
    icon: BiQuestionMark,
   },
   {
    type: "Template Test 3",
    icon: BiQuestionMark,
   },
  ],
 },
//  {
//   id: 4,
//   title: "Module4",
//   description:
//    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   imageUrl: Image,
//   content: [
//    {
//     type: "Template Test 1",
//     icon: BiQuestionMark,
//    },
//    {
//     type: "Template Test 2",
//     icon: BiQuestionMark,
//    },
//    {
//     type: "Template Test 3",
//     icon: BiQuestionMark,
//    },
//   ],
//  },
];
