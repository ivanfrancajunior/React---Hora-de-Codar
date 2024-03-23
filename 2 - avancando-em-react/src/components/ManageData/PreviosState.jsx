import { useState } from "react";

const PreviosState = () => {
  const usersList = [
    {
      id: 1,
      name: "João",
    },
    {
      id: 2,
      name: "Maria",
    },
    {
      id: 3,
      name: "Josefina",
    },
    {
      id: 4,
      name: "Carla",
    },
    {
      id: 5,
      name: "Antonio",
    },
  ];
  const [users, setUsers] = useState(usersList);

  const handleDelete = () => {
    let randomValue = Math.floor(Math.random() * usersList.length + 1);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== randomValue);
    });
  };
  return (
    <>
      <h2 style={{ margin: "20px" }}> Trabalhando com prevState</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {users.map((user) => (
          <p key={user.id} style={{ margin: "20px", fontSize: "28px" }}>
            {user.name}
          </p>
        ))}
      </div>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default PreviosState;
