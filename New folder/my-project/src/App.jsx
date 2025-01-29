import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]); // Renamed count -> users for clarity
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <h1>loading....</h1>
        </>
      ) : (
        <>
          {users.map(
            (item) => (
              console.log(item),
              (
                <>
                  <li key={item.id}>
                    {item.firstName} {item.lastName} {item.age}
                  </li>
                </>
              )
            )
          )}
        </>
      )}
    </div>
  );
}

export default App;
