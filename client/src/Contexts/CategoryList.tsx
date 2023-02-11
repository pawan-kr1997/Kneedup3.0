import { useContext, useState, createContext } from "react";
import { useQuery } from "react-query";
import { fetchCategoryList } from "../Functions/axiosFunctions";
import { useGetApi } from "../Hooks/useGetApi";
import { CategoryListContextType, CategoryListProps, ChildrenProps } from "../TscTypes/TscTypes";

const CategoryList = createContext<CategoryListContextType | null>(null);

export const useCategoryList = () => {
    const contextValue = useContext(CategoryList);
    if (!contextValue) {
        throw new Error("CategoryList context must be used inside CategoryList provider");
    }

    return contextValue;
};

export const CategoryListProvider: React.FC<ChildrenProps> = (props) => {
    // const [list, loading, setList] = useGetApi("/feeds/category");

    const fallback = {};
    const { data: list = fallback } = useQuery("categoryList", fetchCategoryList);

    const value = { list } as CategoryListContextType;

    return <CategoryList.Provider value={value}>{props.children}</CategoryList.Provider>;
};
