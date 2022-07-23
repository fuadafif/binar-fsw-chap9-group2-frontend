import HomeNav from "../components/navbar/HomeNav";
import Footer from "../components/Footer/Footer";
import PicProfile from "../assets/home/img/pic-profile.png";
import { useEffect } from "react";
import { Button, Table } from "reactstrap";

function Profile() {
  useEffect(() => {
    const emailKey = localStorage.getItem("email");
    if (emailKey) {
      document.getElementById("name").innerHTML = `Hola!! ${emailKey}`;
    }
  });

  return (
    <div>
      <HomeNav />
      <div className="text-left">
        <img src={PicProfile} alt="profile pic" className="profile"></img>
        <br />
        <h2 id="name"></h2>
      </div>
      <div>
        <Table striped bordered hover size="sm">
          <tbody>
            <tr>
              <th>Username</th>
              <th>username</th>
            </tr>
            <tr>
              <td>Email</td>
              <td>email</td>
            </tr>
            <tr>
              <td>City</td>
              <td>city</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button>Edit Profile</Button>
      <Footer />
    </div>
  );
}

export default Profile;
