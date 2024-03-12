"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/legacy/image";
import { useState } from "react";

import cn from "../../../utils/class-names";

// import dp from "@/assets/header/dp.png";
import iconUser from "@/assets/icon/iconuser.png";
// import iconCrown from "../../../assets/icon/IconCrown1.svg";
// import icon2 from "../../../assets/icon/IconCrown2.svg";
// import icon3 from "../../../assets/icon/IconCrown3.svg";

import sidebar35 from "../../../assets/icon/sidebar35.svg";
import semblyIcon from "../../../assets/icon/sembly.png";
import airgramIcon from "../../../assets/icon/airgram.png";
import otterIcon from "../../../assets/icon/otter.png";
import krispIcon from "../../../assets/icon/krisp.png";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaYoutube } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { RiVoiceprintFill } from "react-icons/ri";
import { AiFillPicture } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useWorkspaceContext } from "../../../context/workspaceProvider";
// import StatusBadge from "@/components/get-status-badge";
import { GiSpellBook } from "react-icons/gi";
import { MdVideoLibrary } from "react-icons/md";
import { TbChartInfographic } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { MdManageHistory } from "react-icons/md";
import { ImSmile2 } from "react-icons/im";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { ImFolderUpload } from "react-icons/im";
import { PiBrainFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const templates = [
  {
    label: "VISUAL ASSETS",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/workspace",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/workspace",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/workspace/comics",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/workspace",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "VOICES",
    icon: <BsSoundwave className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/workspace",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/workspace",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/workspace",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/workspace",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "INFORGRAPHICS",
    icon: <TbChartInfographic className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/workspace",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/workspace",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/workspace",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/workspace",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "WRITING FORMATS",
    icon: <GiNetworkBars className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/workspace",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/workspace",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/workspace",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/workspace",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "EXPERTS",
    icon: <SlBadge className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/workspace",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/workspace",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/workspace",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/workspace",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "CRITICAL THINKING",
    icon: <GiBrain className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/workspace",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/workspace",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/workspace",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/workspace",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "TEST PREP",
    icon: <BsFileEarmarkBarGraphFill className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/workspace",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/workspace",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/workspace",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/workspace",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "KNOWLEDGE MANAGEMENT",
    icon: <MdManageHistory className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/workspace",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/workspace",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/workspace",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/workspace",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "BEHAVIORAL OPTIMIZATION",
    icon: <ImSmile2 className="eye_icons" />,
    options: [
      {
        label: "Inroduction Video",
        route: "/workspace",
        icon: <FaYoutube className="eye_icons" />,
      },
      {
        label: "Pictures",
        route: "/workspace",
        icon: <AiFillPicture className="eye_icons" />,
      },
      {
        label: "Comics",
        route: "/workspace",
        icon: <GiSpellBook className="eye_icons" />,
      },
      {
        label: "Video series",
        route: "/workspace",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
];
const templates2 = [
  {
    label: "VOCABULARY",
    icon: <MdVideoLibrary className="eye_icons" />,
    options: [
      {
        label: "Visual Vocabulary",
        route: "/workspace/learning-modules/vocabulary/visual-vocabulary",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Comic (Contextual Dialogue)",
        route: "/workspace/learning-modules/vocabulary/comic",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Flash Card",
        route: "/workspace/learning-modules/vocabulary/flash-card",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Tic-Tac-Toe",
        route: "/workspace/learning-modules/vocabulary/tic-tac-toe",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Synonym and Antonym",
        route: "/workspace/learning-modules/vocabulary/synonym-antonym",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Roots, Prefix, Suffix",
        route: "/workspace/learning-modules/vocabulary/roots-prefix-suffix",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Phrases",
        route: "/workspace/learning-modules/vocabulary/phrases",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Paragraph",
        route: "/workspace/learning-modules/vocabulary/paragraph",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Passage Reading",
        route: "/workspace/learning-modules/vocabulary/passage",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Basic Fill in the Blank",
        route: "/workspace/learning-modules/vocabulary/basic-blank",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Scene Based Dialogue Fill in the Blank",
        route: "/workspace/learning-modules/vocabulary/scene-based-dialogue",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Theme Based Reading",
        route: "/workspace/learning-modules/vocabulary/theme-based-reading",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "ACT Level Question",
        route: "/workspace/learning-modules/vocabulary/act-level-question",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "SAT Level Question",
        route: "/workspace/learning-modules/vocabulary/sat-level-question",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "GRE Level Question",
        route: "/workspace/learning-modules/vocabulary/gre-level-question",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
      {
        label: "Mock Exam",
        route: "/workspace/learning-modules/vocabulary/mock-exam",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "Audio to Comic",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Audio to Comic",
        route: "/workspace/learning-modules/audio-to-comic",
        icon: <FaEye className="eye_icons" />,
      },
    ],
  },
  {
    label: "Book to Summary",
    icon: <MdVideoLibrary className="eye_icons" />,
    options: [
      {
        label: "Book to Summary",
        route: "/workspace/learning-modules/book-to-summary",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "Book to Comic",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Book to Comic",
        route: "/workspace/learning-modules/book-to-comic",
        icon: <FaEye className="eye_icons" />,
      },
    ],
  },
  {
    label: "Mindmap",
    icon: <MdVideoLibrary className="eye_icons" />,
    options: [
      {
        label: "Visual Vocabulary",
        route: "/workspace",
        icon: <MdVideoLibrary className="eye_icons" />,
      },
    ],
  },
  {
    label: "Book to Mindmap",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Visual Vocabulary",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
    ],
  },
  {
    label: "Universal Self Learning Module",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Book to Comics to  Real World  Application Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Book to Comics Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Book to Video Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Knowledge Summary Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Concept Mapping  Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Mind Mapping Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Study Measurement Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      }
    ],
  },
  {
    label: "Understanding Acceleration Module",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Socratic Questioning Worksheets",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Debate Cards",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Comparative Analysis",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Concept Maps",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Argument Diagrams",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Case Studies",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Critical Book Reviews",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Critical Reading Journals",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Analytical Storyboards",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Ethical Dilemma  Scenarios",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Text to Mind Visualization",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
    ],
  },
  {
    label: "Special Training Modules",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Test and Exams Preparation Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Soeed Reading for Reading Comprehension Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "How to Read a Book with Four Methods",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Powerpoint Slides Skimming and  Logical Reasoning Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Memory Techniques for  Test Success Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Critical Thinking in Exam Answers Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Effective  Note-Taking Strategies Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Problem-Solving Techniques Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      }
    ],
  },
  {
    label: "Logical Writting Module",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Essay Writing Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Blogging Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Creative Writing Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Editorial Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Scripting Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Writing Workshops Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Research Paper Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Business Proposal Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Journalism  Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Technical  Writing Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
    ],
  },
  {
    label: "Knowledge to Action Module",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Project Based Learning Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Presentation Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Problem Solving Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Entrepreneurship Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Volunteer and Outreach Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Innovation Challenge Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "A.I. Based Internship and Apprenticeship Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Research Projects Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Policy Advocacy and Change Initiatives Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Start-Up Incubator  and Innovation Lab Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
    ],
  },
  {
    label: "Knowledge Architect Module",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Socrates Conversaional  Learning",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Mind Process and Knowledge Visualization",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Content Study-toMind Process Mapping",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Concurrent Multiple Dimensions Decision Making Training",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Algorithmic Structural Analysis for  Contents with Object-Oriented Abstraction Learning Method",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Solution Architecture Design Training Critical Thinkingin Exam Answer",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Thought Experiemnt and Hypothetical Scenario Analysis",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Mindfulness and Cognitive Flexibility Development",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Decision Trees and Logical Frameworks",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Complex Systems Thinking  and Mapping",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
    ],
  },
  {
    label: "Creative & Design Thinking Module",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Design Thinking Workshops",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "User-Centered Design Projects",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Visual Storytelling  Lego",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Innovation Labs and Hackathon",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Design Thinking for Business",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Creative Ideation Sessions",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Design Sprints",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Design Critique and Feedback",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Human-Centered Product Design",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Design Challenges and Competitions",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
    ],
  },
  {
    label: "Memory Training  Module",
    icon: <FaEye className="eye_icons" />,
    options: [
      {
        label: "Visual",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Mind Maps",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Visual Aids (Diagrams, Charts, Illustrations)",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Flashcards",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Color Coding",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Keyword  Mnemonics",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Imagery",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Audio",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Audio Summaries",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Podcasts",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Writing",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Summary Notes",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Anki Flashcards",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Interactive Quizzes",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Video Summaies",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Narrative Storytelling",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Memory Mindset Training",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Emotional Connections",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Spacced Repetition Notes",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Teach Others",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Mindful Reading",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Role-Playing",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Gamification",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Physical Engagement",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Kinesthetic Learning",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Handwritten Summaries",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Social Interaction",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Study Groups",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      },
      {
        label: "Peer Reviews",
        route: "/workspace",
        icon: <FaEye className="eye_icons" />,
      }
    ],
  },
  
];

const studyToolkit = [
  {
    label: "NOTE TAKING TOOLS",
    options: [
      {
        label: "Sembly AI",
        route: "/workspace",
        icon: semblyIcon,
      },
      {
        label: "Otter AI",
        route: "/workspace",
        icon: otterIcon,
      },
      {
        label: "Krisp AI",
        route: "/workspace",
        icon: krispIcon,
      },
      {
        label: "Airgram AI",
        route: "/workspace",
        icon: airgramIcon,
      },
    ],
  },
  {
    label: "TUTOT_GPT",
    options: [
      {
        label: "Sembly AI",
        route: "/workspace",
        icon: semblyIcon,
      },
      {
        label: "Otter AI",
        route: "/workspace",
        icon: otterIcon,
      },
      {
        label: "Krisp AI",
        route: "/workspace",
        icon: krispIcon,
      },
      {
        label: "Airgram AI",
        route: "/workspace",
        icon: airgramIcon,
      },
    ],
  },
  {
    label: "TRANSLATOR/ INTERPRETER_GPT",
    options: [
      {
        label: "Sembly AI",
        route: "/workspace",
        icon: semblyIcon,
      },
      {
        label: "Otter AI",
        route: "/workspace",
        icon: otterIcon,
      },
      {
        label: "Krisp AI",
        route: "/workspace",
        icon: krispIcon,
      },
      {
        label: "Airgram AI",
        route: "/workspace",
        icon: airgramIcon,
      },
    ],
  },
  {
    label: "TOOLKIT FOR KIDS",
    options: [
      {
        label: "Sembly AI",
        route: "/workspace",
        icon: semblyIcon,
      },
      {
        label: "Otter AI",
        route: "/workspace",
        icon: otterIcon,
      },
      {
        label: "Krisp AI",
        route: "/workspace",
        icon: krispIcon,
      },
      {
        label: "Airgram AI",
        route: "/workspace",
        icon: airgramIcon,
      },
    ],
  },
];

const recentSearch = ["UI Design", "word", "UI Develop", "mobile", "UI Design"];
export default function Sidebar({ className }) {
  const pathname = usePathname();
  const [template, setTemplate] = useState(true);
  const [module, setModule] = useState('')
  // learning-assets, learning-modules 
  // const [sidebar, setSidebar] = useState(true);
  const { sidebar, setSidebar } = useWorkspaceContext();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    spaceBetween: 20,
    initialSlide: 0,
  };

  const mytemplates = module == "learning-assets" ? templates :  templates2
  return (
    <aside
      className={cn(
        "fixed bottom-0 start-0 z-50 w-[400px] border-gray-100 rounded-[30px] dark:bg-gray-100/50  mx-4 h-full",
        className
      )}
    >
      <div className="relative flex flex-row h-full ">
        <div
          className={`${
            sidebar ? "w-[150px]" : "w-[100px]"
          } transition-width h-full  duration-500 bg-[#2B8CFF] rounded-[30px] py-10`}
        >
          <div className="flex flex-col h-full justify-between w-[100px]">
            <div className="flex flex-col h-fit gap-8 text-sm font-light justify-around">
              <button className="flex flex-col items-center text-[#aad1ff] hover:text-white">
                <FaUser className="w-8 h-8 mb-2" />
                Profile
              </button>
              <button
                 onClick={() => {
                  setModule("learning-assets");
                }}
                className={`flex flex-col items-center  hover:text-white ${module=="learning-assets"?"text-white":"text-[#aad1ff]"}`}
              >
                <PiBrainFill className="w-8 h-8 mb-2" />
                Learning <br /> Assets
              </button>
              <button
                onClick={() => {
                  setModule("learning-modules");
                }}
                className={`flex flex-col items-center  hover:text-white ${module=='learning-modules'?'text-white':'text-[#aad1ff]'}`}
              >
                <PiBrainFill className="w-8 h-8 mb-2" />
                Learning <br /> Modules
              </button>
              {/* <button className="flex flex-col items-center text-[#aad1ff] hover:text-white">
                <FaCloudUploadAlt className="w-8 h-8 mb-2" />
                Upload <br />
                File
              </button> */}
            </div>
            <div className="flex cursor-pointer mt-5 flex-col py-4 w-[60px] h-[220px] bg-white mx-auto  items-center rounded-2xl">
              <Image
                src={sidebar35}
                alt={"items.label"}
                width="40"
                height="40"
                className={`h-8 w-8 bg-transparent mb-3`}
              />
              <span className="flex flex-row  text-[#2B8CFF] -rotate-90 mt-14 text-center justify-center w-max h-[20px] font-semibold">
                Try PhoenEdx Pro
              </span>
            </div>
          </div>
        </div>
        <div
          className={`${
            sidebar ? "w-[calc(100%-100px)] " : "w-[0%]"
          } overflow-hidden duration-500 absolute h-full transition-width left-[100px]  top-0 z-40 bg-gray-0/10 rounded-[30px] bg-white pb-5 pt-2  dark:bg-gray-100/5`}
        >
          <div
            className={`${
              sidebar ? "flex" : ""
            } min-w-[calc(300px)] h-full px-4 pt-2 flex-col`}
          >
            <div className="border-[#D8D8D8] border-b w-full">
              <div className="mb-4 bg-[#F4F8FC] border border-[#D8D8D8] text-[14px] text-[#9E9E9E] w-full flex justify-between rounded-3xl">
                <button
                  onClick={() => {
                    setTemplate(true);
                  }}
                  className={`
                    ${
                      template ? "bg-[#2B8CFF] text-white " : `bg-transparent`
                    } rounded-3xl w-[50%]  py-3`}
                >
                  Templates
                </button>
                <button
                  onClick={() => {
                    setTemplate(false);
                  }}
                  className={`${
                    template ? "bg-transparent" : `bg-[#2B8CFF] text-white `
                  }  rounded-3xl  w-[50%] py-3`}
                >
                  Study Toolkit
                </button>
              </div>
              <input
                className="bg-[#F4F8FC] mb-4 border-none text-[14px] text-[#9E9E9E] w-full flex justify-between rounded-3xl"
                type="text"
                placeholder="Search"
              />
              <div
                className={`${
                  sidebar ? "" : "overflow-hidden"
                }  mb-4 bg-transparent text-[11px] w-full text-[#9E9E9E] `}
              >
                <Slider {...settings}>
                  {recentSearch.map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        sidebar ? "" : "overflow-hidden"
                      }  mb-4 bg-transparent text-[11px] w-full text-[#9E9E9E]   `}
                    >
                      <label className=" flex cursor-pointer items-center justify-center gap-4 bg-[#F4F8FC] mr-2 rounded-3xl p-[6px] ">
                        {item}
                      </label>
                    </div>
                  ))}
                </Slider>
              </div>

              {/* <Slider {...settings}>
                {recentSearch.map((item, index) => (
                  <div
                    className={`${
                      sidebar ? "" : "overflow-hidden"
                    }  mb-4 bg-transparent text-[11px] w-full text-[#9E9E9E]   `}
                  >
                    <label className=" flex cursor-pointer items-center justify-center gap-4 bg-[#F4F8FC] mr-2 rounded-3xl p-[6px] ">
                   {item} 
                    </label>
                  </div>
                ))}
              </Slider> */}
            </div>
            <div className="mx-auto w-full max-w-md h-full bg-white overflow-y-auto ">
              {template
                ? mytemplates.map((item, index) => (
                    <Disclosure key={index}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={` visual_assests  ${
                              open ? "text-black active" : "text-[#9E9E9E]"
                            } rounded-2xl flex w-full justify-between mt-2 px-2 py-3 text-left  hover:text-white hover:bg-[#2b8cff] focus:outline-none focus-visible:ring-[#2B8CFF] focus-visible:ring-purple-500/75`}
                          >
                            <div className="flex items-center">
                              <div className="">{item.icon}</div>
                              <div className="flex flex-col items-start ml-3">
                                <label className=" text-[14px] mb-1">
                                  {item.label}
                                </label>
                              </div>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pb-2  text-sm text-gray-500">
                            {item.options.map((option, index2) => (
                              <button
                                key={index2}
                                className="flex w-full rounded-2xl justify-between mt-2 px-2 py-3 text-left text-[#9E9E9E]  focus:outline-none hover:text-white hover:bg-[#2B8CFF] focus-visible:ring focus-visible:ring-purple-500/75"
                              >
                                <Link href={option.route}>
                                <div className="flex items-center ">
                                  <div>{option.icon}</div>
                                  <div className="flex flex-col items-start ml-6">
                                    
                                    <label className="text-[14px]">
                                      {option.label}
                                    </label>
                                  </div>
                                </div>
                                </Link>
                                
                              </button>
                            ))}

                            {/* <button className="flex w-full rounded-2xl justify-between mt-2 px-2 py-3 text-left text-[#9E9E9E]  focus:outline-none hover:text-white hover:bg-[#2B8CFF] focus-visible:ring focus-visible:ring-purple-500/75">
                          <div className="flex items-center ">
                            <Image
                            src={items.icon}
                            alt={items.label}
                            width="40"
                            height="40"
                            className={`h-6 w-6 `}
                          />
                            <div className="flex flex-col items-start ml-6">
                              <label className="text-[16px]">Options2</label>
                            </div>
                          </div>
                        </button> */}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))
                : studyToolkit.map((item, index) => (
                    <Disclosure key={index}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={` visual_assests  ${
                              open ? "text-black active" : "text-[#9E9E9E]"
                            } rounded-2xl flex w-full justify-between mt-2 px-2 py-3 text-left  hover:text-white hover:bg-[#2b8cff] focus:outline-none focus-visible:ring-[#2B8CFF] focus-visible:ring-purple-500/75`}
                          >
                            <div className="flex items-start">
                              <div className="flex flex-col items-start ">
                                <label className=" text-[14px] mb-1">
                                  {item.label}
                                </label>
                              </div>
                            </div>
                            <ChevronUpIcon
                              className={`${
                                open ? "" : "rotate-180"
                              } h-5 w-5 transform transition duration-300 `}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-2 pb-2 flex flex-wrap text-sm text-gray-500">
                            {item.options.map((option, index2) => (
                              <button
                                key={index2}
                                className="block bg-[#F4F8FC] rounded-xl justify-between mt-2 ml-2 p-2 text-[#9E9E9E]  focus:outline-none hover:text-white hover:bg-[#2B8CFF] focus-visible:ring focus-visible:ring-purple-500/75"
                              >
                                <div className="flex flex-col justify-center items-center m-auto h-14 w-14  ">
                                  <Image
                                    src={option.icon}
                                    alt={option.label}
                                    width="40"
                                    height="40"
                                    className={`h-[40px] w-[40px] `}
                                  />
                                  <label className="text-[10px]">
                                    {option.label}
                                  </label>
                                </div>
                              </button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
