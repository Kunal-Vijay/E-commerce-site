import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
import { emptyCart } from "../redux/cartRedux";
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();
  const TOKEN = currentUser?.accessToken;

  useEffect(() => {
    console.log(TOKEN);
    const createOrder = async () => {
      try {
        const res = await userRequest(TOKEN).post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: "test address",
        });
        if(res){
          dispatch(emptyCart());
          setOrderId(res.data._id);
        }
      } catch(err) {
        console.log(err);
      }
    };
    cart.products.length>=1&&createOrder();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }} onClick={()=>navigate("/")}>Go to Homepage</button>
    </div>
  );
};

export default Success;