import { getFeedUrlAndHeader } from "../Functions/componentFunctions";
import { useParams, useNavigate } from "react-router-dom";
import { useScrollTop } from "./useScrollTop";
import { useQuery } from "react-query";
import { fetchFeeds } from "../Functions/axiosFunctions";
import { Post } from "../TscTypes/TscTypes";
import { useToast } from "@chakra-ui/react";

export const useFeeds = () => {
    const params = useParams();
    const navigate = useNavigate();
    const toast = useToast();
    const feedsData = getFeedUrlAndHeader(params.category, navigate);
    const url = feedsData.url;
    useScrollTop();

    const fallback: Post[] = [];
    const { data = fallback } = useQuery(["feeds", feedsData.headerText], () => fetchFeeds(url), {
        onError: (error) => {
            console.log(error);
            toast({ title: "Something went wrong, please refresh", status: "error", duration: 3000, isClosable: true });
        },
    });

    return [data, feedsData.headerText] as const;
};
