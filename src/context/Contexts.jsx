import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  // const[email, setEmail] = useState("")

  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [roomID, setRoomID] = useState([]);
  const [contracts , setContracts ] = useState([]);
  const [userContract, setUserContract] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const id = localStorage.getItem("id")

  
  const fetchUserInfo = (id) => {
    if (!id) {
        console.log("Không có user");
        return;
    }

    axios.get(`http://localhost:8081/v1/api/getUser/` + id)
        .then((res) => {
          setUserInfo(res.data);
            console.log(res.data);
            return
        })
        .catch((err) => {
            console.log(err);
        });
};

  const fetchRoomID = (id) => {

      axios.get(`http://localhost:8081/v1/api/getRoom/` + id)
          .then((res) => {
              setRoomID(res.data);
              console.log(res.data);
              return
          })
          .catch((err) => {
              console.log(err);
          });
  };

  const fetchRooms = () => {
    axios
      .get("http://localhost:8081/v1/api/getAllRoom")
      .then((res) => {
        setRooms(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchContracts = () => {
    axios
      .get("http://localhost:8081/v1/api/getAllContract")
      .then((res) => {
        setContracts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchUserContract = (id) => {

    axios.get(`http://localhost:8081/v1/api/getContract/` + id)
        .then((res) => {
          setUserContract(res.data);
            console.log(res.data);
            return
        })
        .catch((err) => {
            console.log(err);
        });
};


  const fetchUsers = () => {
    axios
      .get("http://localhost:8081/v1/api/getAllUser")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  useEffect(() => {
    fetchRooms();
    fetchContracts();
    fetchUsers();

  }, []);

  // useEffect(() => {
  //   if (!id) {
  //     console.log("User is not logged in. Redirecting to login.");
  //     return;
  //   }

  //   fetchCartUser(id);
  //   fetchUserInfo(id)
  // }, [id]);

  return (
    <AppContext.Provider
      value={{
        users, setUsers, fetchUsers,
        rooms, setRooms, fetchRooms,
        roomID, setRoomID, fetchRoomID,
        contracts , setContracts, fetchContracts,
        userContract, setUserContract, fetchUserContract,
        userInfo, setUserInfo, fetchUserInfo

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
