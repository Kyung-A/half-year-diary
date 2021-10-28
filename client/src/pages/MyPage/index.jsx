import React, { useEffect } from "react";
import Container from "../../components/atoms/Container";
// import Logout from "../components/user/Logout";

import { SilentRefresh } from "../SignIn/Refresh";

const MyPage = ({ user }) => {
  const { email, password, nickname, userThumb } = user[0] || {};

  useEffect(() => {
    SilentRefresh();
  }, []);

  return (
    <>
      <Container>
        <table>
          <tbody>
            <tr>
              <th>이메일</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>{password}</td>
            </tr>
            <tr>
              <th>닉네임</th>
              <td>{nickname}</td>
            </tr>
            <tr>
              <th>프로필 이미지</th>
              <td>
                <img src={`${userThumb}`} alt="프로필 이미지" />
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default MyPage;