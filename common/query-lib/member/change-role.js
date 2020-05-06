import { query, METHOD } from '../../query';
import { API_URL, SERVICE } from '../../service';

export const changeRole = ({ email, organizationID, token }) =>
  query({
    method: METHOD.PUT,
    url: `${API_URL}/${SERVICE.USER}/api/user/organization/member/change-role`,
    //params: { email, organizationID },
    data: {
      email: email,
      organizationID: organizationID
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
