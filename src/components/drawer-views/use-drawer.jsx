"use client";

import { useAtomValue, useSetAtom } from "jotai";

// export type DrawerPlacements = 'left' | 'right' | 'top' | 'bottom';

// type DrawerTypes = {
//   view: React.ReactNode;
//   isOpen: boolean;
//   placement?: DrawerPlacements;
//   customSize?: string;
// };

const drawerAtom = {
  isOpen: false,
  view: null,
  placement: "right",
  customSize: "320px",
};

export function useDrawer() {
  const state = useAtomValue(drawerAtom);
  const setState = useSetAtom(drawerAtom);

  const openDrawer = ({ view, placement, customSize }) => {
    setState({
      ...state,
      isOpen: true,
      view,
      placement,
      customSize,
    });
  };

  const closeDrawer = () => {
    setState({
      ...state,
      isOpen: false,
    });
  };

  return {
    ...state,
    openDrawer,
    closeDrawer,
  };
}
