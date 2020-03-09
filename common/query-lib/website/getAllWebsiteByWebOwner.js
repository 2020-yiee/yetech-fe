import { query, METHOD } from "../../query";
import { API_URL, SERVICE } from "../../service";

export const getAllWebsiteByWebOwner = ({token }) =>
  query({
    method: METHOD.GET,
    url: `${API_URL}/${SERVICE.WEB_OWNER}/api/web-owner/websites`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  });
