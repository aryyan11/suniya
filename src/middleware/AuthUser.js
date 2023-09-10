import jwt from "jsonwebtoken";

export const dynamic = "force-dynamic";

const AuthUser = async (req) => {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) return false;

  try {
    const extractAuthUserInfo = jwt.verify(token, "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NDA5ODQyNywiaWF0IjoxNjk0MDk4NDI3fQ.4UULfLx_piwIpAJwyDsOIsmYWEet6C9_nBvYhX2YOZY");
    if (extractAuthUserInfo) return extractAuthUserInfo;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default AuthUser;
