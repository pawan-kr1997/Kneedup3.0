import { NavigateFunction } from "react-router-dom";
import { GetFeedUrlAndHeaderReturnType } from "../TscTypes/Functions";

export const getFeedUrlAndHeader = (paramsCategory: string | undefined, navigate: NavigateFunction): GetFeedUrlAndHeaderReturnType => {
    let url = "";
    let headerText = "";

    switch (paramsCategory) {
        case "newsOnAir_National":
            url = "http://localhost:8090/newsOnAir/national";
            headerText = "News On Air / National news";
            break;

        case "newsOnAir_International":
            url = "http://localhost:8090/newsOnAir/international";
            headerText = "News On Air / International news";
            break;

        case "newsOnAir_Business":
            url = "http://localhost:8090/newsOnAir/business";
            headerText = "News On Air / Business news";
            break;

        case "newsOnAir_Sports":
            url = "http://localhost:8090/newsOnAir/sports";
            headerText = "News On Air / Sports news";
            break;

        case "poi_Speeches":
            url = "http://localhost:8090/presidentOfIndia/speeches";
            headerText = "President of India / Speeches";
            break;

        case "poi_pressReleases":
            url = "http://localhost:8090/presidentOfIndia/pressReleases";
            headerText = "President of India / Press releases";
            break;

        case "pib_pressReleases":
            url = "http://localhost:8090/pressInformationBureau/pressReleases";
            headerText = "Press Information Bureau / Press releases";
            break;

        case "prs_Blogs":
            url = "http://localhost:8090/prsIndia/blogs";
            headerText = "PRS India / Blogs";
            break;

        case "prs_Articles":
            url = "http://localhost:8090/prsIndia/articles";
            headerText = "PRS India / Articles";
            break;

        default:
            navigate("/pagenotfound");
    }

    return { url: url, headerText: headerText };
};
