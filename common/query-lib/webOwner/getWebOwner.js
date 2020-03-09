import { query, METHOD } from "../../query";
import { API_URL, SERVICE } from "../../service";

export const getWebOwner = ({ webOwnerId, email, token }) =>
  query({
    method: METHOD.GET,
    url: `${API_URL}/${SERVICE.WEB_OWNER}/api/web-owner`,
    data: { webOwnerId: webOwnerId, email: email },
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  });
