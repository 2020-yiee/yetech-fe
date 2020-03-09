import { query, METHOD } from "../../query";
import { API_URL, SERVICE } from "../../service";

export const getCheckedInfo = ({ webId,trackingUrl  }) =>
  query({
    method: METHOD.POST,
    url: `${API_URL}/${SERVICE.TRACKING}/api/tracking/check`,
    data: { webId:webId,trackingUrl: trackingUrl },
    headers: {
      "Content-Type": "application/json"
    }
  });