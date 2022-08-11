import axios from "axios";
import { useState } from "react";
import UserCard from "../components/UserCard";

export default function Home() {
  const [userData, setUserData] = useState([]);
  const [genNumber, setGenNumber] = useState(1);
  const genUsers = async () => {
    if (genNumber < 1) {
      alert("Invalid number of user");
      return;
    } else {
      const resp = await axios.get(
        `https://randomuser.me/api/?results=${genNumber}`
      );
      const newUsers = [];
      for (const x of resp.data.results) {
        newUsers.push({
          name: `${x.name.first} ${x.name.last}`,
          email: x.email,
          imgUrl: x.picture.large,
          address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
        });
      }
      setUserData(newUsers);
    }
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setGenNumber(event.target.value);
          }}
          value={genNumber}
        />
        <button className="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>
      {userData.map((user) => (
        <UserCard
          key={user.name}
          name={user.name}
          profile={user.imgUrl}
          email={user.email}
          address={user.address}
        />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Atipat Daowraeng 640610674
      </p>
    </div>
  );
}
