import { NavigateFunction } from "react-router-dom";
import { CategoryListProps } from "./TscTypes";

export type GetFeedUrlAndHeaderReturnType = {
    url: string;
    headerText: string;
};

export type LoginDataType = {
    emailId: string;
    password: string;
};

export type SignupDataType = {
    emailId: string;
    password: string;
    confirmPassword: string;
};

export type PostApiDataType = LoginDataType | SignupDataType;

export type HandleLoginParamTypes = {
    e: React.FormEvent<EventTarget>;
    navigate: NavigateFunction;
    data: LoginDataType;
    setError: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
    list: CategoryListProps;
};

export type HandleSignupParamTypes = {
    e: React.FormEvent<EventTarget>;
    navigate: NavigateFunction;
    data: SignupDataType;
    setError: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};