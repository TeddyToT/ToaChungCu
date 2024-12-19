import React from "react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Contexts";
import { useNavigate } from "react-router-dom";
const UserContracts = () => {
  const navigate = useNavigate()
    const {userContract, fetchUserContract} = useContext(AppContext)
    const userID = localStorage.getItem("userID");

      const [firstLoad, setFirstLoad] = useState(true);
    
      useEffect(() => {
        if (userID && firstLoad) {
            fetchUserContract(userID);
          setFirstLoad(false);
        }
      }, [fetchUserContract, firstLoad, userID]);
    
    const sortedContracts = userContract.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });


  return (
    <div className="">
      <div className="w-11/12 place-self-center place-items-center py-10">
      <div className="w-full flex-col">
      

      {sortedContracts.map((contract) => (
           <div key={contract._id} className="bg-white rounded-lg flex flex-col gap-5 font-medium text-lg shadow-xl p-10 mb-5">
           <div className="flex flex-row gap-2 items-center">
               <p>Mã hợp đồng:</p>
               <p className="font-normal"> {contract._id}</p>
           </div>
           <div className="flex flex-row">
               <p className="w-1/2">Căn hộ: Phòng {contract.roomId.roomNumber} - Tầng {contract.roomId.floor}</p>
               <div className="w-1/2 flex flex-row gap-2 justify-end">
               <p >Trạng thái hợp đồng: </p>
               <p className={`${contract.state == "Pending"?"text-orange-600":contract.state == "Cancel"?"text-red-600":"text-green-600"}`}>
               {contract.state == "Pending"?"Chờ xét duyệt":contract.state == "Cancel"?"Đã hủy":"Thành công"}
                </p>
                </div>
               
           </div>
           <div className="flex justify-end">
               <button 
               onClick={()=>navigate(`/tai-khoan/hop-dong/${contract._id}`)}
               className="py-4 w-1/4 text-white bg-orange-700 hover:bg-slate-600 font-semibold rounded-xl">Chi tiết</button>
           </div>

       </div>
        ))}
        
        
       
      </div>

      </div>
    </div>
  );
};

export default UserContracts;
