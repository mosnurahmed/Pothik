import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { useAddBookingMutation } from "../../feature/booking/bookingApi";
import { useUpdatePackageMutation } from "../../feature/package/packageApi";

function Success() {
  const { packId } = useParams();
  const [addBooking, { isSuccess }] = useAddBookingMutation();
  const [updatePackage, {}] = useUpdatePackageMutation();
  const dispatch = useDispatch();

  const pkg = localStorage.getItem("pkg");
  const auth = localStorage.getItem("auth");
  const status = localStorage.getItem("status");
  const statusObj = JSON.parse(status);
  const user = JSON.parse(auth).user;
  const pkgObj = JSON.parse(pkg);
  const { id, name, route, totalPassenger } = pkgObj || {};
  const navigate = useNavigate();

  useEffect(() => {
    const data = {
      name,
      packageId: id,
      traveler: user,
      paymentStatus: true,
      group: statusObj.group,
      route,
    };
    addBooking(data);
  }, []);
  if (isSuccess) {
 

    navigate("/");
  }

  // {
  //   "id": 1,
  //   "name": "Kuakata",
  //   "packageId": 2,
  //   "traveler": {
  //     "email": "mosnur@gmail.com",
  //     "name": "Mosnur",
  //     "id": 1
  //   },
  //   "paymentStatus": true,
  //   "group": false,
  //   "route": "Dhaka Borishal Kuakata"
  // },

  // const data={
  //   packageId:
  // }

  return <div>Success</div>;
}

export default Success;
