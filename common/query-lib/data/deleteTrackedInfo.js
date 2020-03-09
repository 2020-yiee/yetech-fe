import { query, METHOD } from "../../query";
import { API_URL, SERVICE } from "../../service";

export const deleteTrackedInfo = ({ trackingId }) =>
  query({
    method: METHOD.POST,
    url: `${API_URL}/${SERVICE.TRACKING}/api/tracking/info`,
    params: { trackingId:trackingId},
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  });