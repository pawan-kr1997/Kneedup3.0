import React, { ReactNode } from "react";

export type LogoProps = {
    variant: string;
};

export type ChildrenProps = {
    children?: ReactNode | undefined;
};

export type NavListItemProps = ChildrenProps & {
    to?: string;
    icon?: JSX.Element;
    size?: string;
    color?: string;
    hoverColor?: string;
    weight?: string;
    pl?: string;
};

export type NavAccordionProps = ChildrenProps & {
    category: string;
    icon: JSX.Element;
};

export type ExtendedReactNavFC = React.FC<ChildrenProps> & {
    Item: React.FC<NavListItemProps>;
};

export type ExtendedReactNavBarFC = React.FC<ChildrenProps> & {
    ToolBar: () => JSX.Element;
    SideDrawer: () => JSX.Element;
};

export type NavBarContextType = {
    isDrawerOpen: boolean;
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CategoryListProps = {
    news: boolean;
    president: boolean;
    pib: boolean;
    prs: boolean;
};

export type CategoryListContextType = {
    list: CategoryListProps;
    loading: boolean;
};

export type NavBarProps = {
    variant: string;
    button?: JSX.Element;
};

export type DrawerProps = {
    isDrawerOpen: boolean;
    onIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type PrimaryToolbarProps = {
    onIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SecondaryToolbarProps = {
    btn?: JSX.Element;
};

export type FeatureIconProps = {
    icon: JSX.Element;
    title: string;
    onIconClick: () => void;
};

export type ListContainerProps = ChildrenProps & {
    heading: string;
};

export type ChecklistProps = {
    isOpen: boolean;
    onIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SidebarProps = {
    onIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
