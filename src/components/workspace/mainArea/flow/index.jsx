"use client";

import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import MindMapNode from "./MindMapNode";
import MindMapEdge from "./MindMapEdge";
import { BsFillFileTextFill } from "react-icons/bs";
import { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaHeading } from "react-icons/fa6";
import bg from "../../../../assets/header/bg.png";
import Image from "next/legacy/image";
import { MdNoteAdd } from "react-icons/md";
import { AiFillHighlight } from "react-icons/ai";
import { IoDuplicate } from "react-icons/io5";
import { HiDuplicate } from "react-icons/hi";
import { LuMove } from "react-icons/lu";
import { VscMention } from "react-icons/vsc";
const initialNodes = [
  {
    id: "root1",
    type: "mindmap",
    data: {
      icon: <BsFillFileTextFill />,
      label: "Website Development",
      nodeType: "topic",
      option: [
        {
          label: "PhoenEX Ai",
          icon: <Image className="w-4 h-3" src={bg} alt="logo" />,
        },
        {
          label: "Comment",
          icon: <FaCommentDots className="text-[12px]" />,
        },
        {
          label: "Reaction",
          icon: <FaSmile className="text-[12px]" />,
        },
        {
          label: "Delete",
          icon: <MdDeleteForever className="text-[12px]" />,
        },
      ],
    },
    position: { x: 0, y: 0 },
    dragHandle: ".dragHandle",
  },
  {
    id: "root2",
    type: "mindmap",
    data: {
      label: "1. Planning",
      option: [
        {
          label: "Heading",
          icon: <FaHeading className="text-[12px]" />,
        },
        {
          label: "Add Note",
          icon: <MdNoteAdd className="text-[12px]" />,
        },
        {
          label: "Highlight",
          icon: <AiFillHighlight className="text-[12px]" />,
        },
        {
          label: "Duplicate",
          icon: <HiDuplicate className="text-[12px]" />,
        },
        {
          label: "Copy To",
          icon: <IoDuplicate className="text-[12px]" />,
        },
        {
          label: "Move To",
          icon: <LuMove className="text-[12px]" />,
        },
        {
          label: "Mention",
          icon: <VscMention className="text-[12px]" />,
        },
      ],
    },
    position: { x: 300, y: -50 },
    dragHandle: ".dragHandle",
  },
  {
    id: "root3",
    type: "mindmap",
    data: {
      label: "2. Design",
      option: [
        {
          label: "Heading",
          icon: <FaHeading className="text-[12px]" />,
        },
        {
          label: "Add Note",
          icon: <MdNoteAdd className="text-[12px]" />,
        },
        {
          label: "Highlight",
          icon: <AiFillHighlight className="text-[12px]" />,
        },
        {
          label: "Duplicate",
          icon: <HiDuplicate className="text-[12px]" />,
        },
        {
          label: "Copy To",
          icon: <IoDuplicate className="text-[12px]" />,
        },
        {
          label: "Move To",
          icon: <LuMove className="text-[12px]" />,
        },
        {
          label: "Mention",
          icon: <VscMention className="text-[12px]" />,
        },
      ],
    },
    position: { x: 300, y: 50 },
    dragHandle: ".dragHandle",
  },
  {
    id: "root4",
    type: "mindmap",
    data: {
      label: "Identify Purpose of Website",
      option: [
        {
          label: "Heading",
          icon: <FaHeading className="text-[12px]" />,
        },
        {
          label: "Add Note",
          icon: <MdNoteAdd className="text-[12px]" />,
        },
        {
          label: "Highlight",
          icon: <AiFillHighlight className="text-[12px]" />,
        },
        {
          label: "Duplicate",
          icon: <HiDuplicate className="text-[12px]" />,
        },
        {
          label: "Copy To",
          icon: <IoDuplicate className="text-[12px]" />,
        },
        {
          label: "Move To",
          icon: <LuMove className="text-[12px]" />,
        },
        {
          label: "Mention",
          icon: <VscMention className="text-[12px]" />,
        },
      ],
    },
    position: { x: 600, y: -80 },
    dragHandle: ".dragHandle",
  },
  {
    id: "root5",
    type: "mindmap",
    data: {
      label: "Define Target Audience ",
      option: [
        {
          label: "Heading",
          icon: <FaHeading className="text-[12px]" />,
        },
        {
          label: "Add Note",
          icon: <MdNoteAdd className="text-[12px]" />,
        },
        {
          label: "Highlight",
          icon: <AiFillHighlight className="text-[12px]" />,
        },
        {
          label: "Duplicate",
          icon: <HiDuplicate className="text-[12px]" />,
        },
        {
          label: "Copy To",
          icon: <IoDuplicate className="text-[12px]" />,
        },
        {
          label: "Move To",
          icon: <LuMove className="text-[12px]" />,
        },
        {
          label: "Mention",
          icon: <VscMention className="text-[12px]" />,
        },
      ],
    },
    position: { x: 600, y: -20 },
    dragHandle: ".dragHandle",
  },
  {
    id: "root6",
    type: "mindmap",
    data: {
      label: "Determine Website Branding (colors, fonts, logo)",
      option: [
        {
          label: "Heading",
          icon: <FaHeading className="text-[12px]" />,
        },
        {
          label: "Add Note",
          icon: <MdNoteAdd className="text-[12px]" />,
        },
        {
          label: "Highlight",
          icon: <AiFillHighlight className="text-[12px]" />,
        },
        {
          label: "Duplicate",
          icon: <HiDuplicate className="text-[12px]" />,
        },
        {
          label: "Copy To",
          icon: <IoDuplicate className="text-[12px]" />,
        },
        {
          label: "Move To",
          icon: <LuMove className="text-[12px]" />,
        },
        {
          label: "Mention",
          icon: <VscMention className="text-[12px]" />,
        },
      ],
    },
    position: { x: 600, y: 30 },
    dragHandle: ".dragHandle",
  },
  {
    id: "root7",
    type: "mindmap",
    data: {
      label: "Sketch Website Layout",
      option: [
        {
          label: "Heading",
          icon: <FaHeading className="text-[12px]" />,
        },
        {
          label: "Add Note",
          icon: <MdNoteAdd className="text-[12px]" />,
        },
        {
          label: "Highlight",
          icon: <AiFillHighlight className="text-[12px]" />,
        },
        {
          label: "Duplicate",
          icon: <HiDuplicate className="text-[12px]" />,
        },
        {
          label: "Copy To",
          icon: <IoDuplicate className="text-[12px]" />,
        },
        {
          label: "Move To",
          icon: <LuMove className="text-[12px]" />,
        },
        {
          label: "Mention",
          icon: <VscMention className="text-[12px]" />,
        },
      ],
    },
    position: { x: 600, y: 90 },
    dragHandle: ".dragHandle",
  },
  // {
  //   id: "root8",
  //   type: "mindmap",
  //   data: { label: "2. Design" },
  //   position: { x: 500, y: 150 },
  //   dragHandle: ".dragHandle",
  // },
];
const initialEdges = [
  { id: "edge1", source: "root1", target: "root2" },
  { id: "edge2", source: "root1", target: "root3" },
  { id: "edge3", source: "root2", target: "root4" },
  { id: "edge4", source: "root2", target: "root5" },
  { id: "edge5", source: "root3", target: "root6" },
  { id: "edge6", source: "root3", target: "root7" },
  // { id: "edge7", source: "root3", target: "root8" },

  // { id: "edge2", source: "root2", target: "root3", type: "mindmap" },
];

const nodeTypes = {
  mindmap: MindMapNode,
};

const edgeTypes = {
  mindmap: MindMapEdge,
};

const nodeOrigin = [0.5, 0.5];

const connectionLineStyle = { stroke: "#F6AD55", strokeWidth: 3 };
const defaultEdgeOptions = { style: connectionLineStyle, type: "mindmap" };

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [elementId, setElementId] = useState(1);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const handlePaneClick = (event) => {
    const position = { x: event.clientX, y: event.clientY };
    const newNode = {
      id: `newNode_${elementId}`,
      type: "mindmap",
      data: {
        icon: <BsFillFileTextFill />,
        label: `New Node ${elementId}`,
        nodeType: "topic",
      },
      position,
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
    setElementId((prevId) => prevId + 1);
  };

  return (
    <ReactFlow
      // nodes={nodes}
      // edges={edges}
      // onNodesChange={onNodesChange}
      // onEdgesChange={onEdgesChange}
      // onConnect={onConnect}
      // nodeTypes={nodeTypes}
      // edgeTypes={edgeTypes}

      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onPaneClick={handlePaneClick}
      // onConnectStart={onConnectStart}
      // onConnectEnd={onConnectEnd}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      nodeOrigin={nodeOrigin}
      // defaultEdgeOptions={defaultEdgeOptions}
      // connectionLineStyle={connectionLineStyle}
      // connectionLineType={ConnectionLineType.Straight}
      fitView
      elements={[...initialNodes, ...initialEdges]}
      onConnect={onConnect}
      // nodeTypes={nodeTypes}
      // edgeTypes={edgeTypes}
      // nodeOrigin={nodeOrigin}
      snapToGrid={true}
      snapGrid={[15, 15]}
      zoomOnScroll={true}
      zoomOnDoubleClick={true}
      panemoveable={"true"}
      defaultzoom={1.5}
      minZoom={0.5}
      maxZoom={4}
      nodesDraggable={true} // Enable node dragging
      nodesConnectable={false} // Disable nodes connecting
      connectionLineStyle={{ stroke: "#F6AD55", strokeWidth: 3 }}
      connectionLineType="straight"
      deleteKeyCode={46} // Use "Delete" key to delete elements
      multiSelectionKeyCode={17} // Use "Ctrl" key for multi selection
      selectNodesOnDrag={false} // Disable selecting nodes when dragging
    >
      {/* <MiniMap /> */}
      {/* <Controls /> */}
      <Background />
    </ReactFlow>
  );
}
