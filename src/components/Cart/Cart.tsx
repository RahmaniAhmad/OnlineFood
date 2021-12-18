import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import Backdrop from "../Backdrop/Backdrop";
import { removeFromCart } from "../../store/actions/cartActions";
import "./Cart.css";
import { limit } from "../../utility/utility";
import { ScrollView } from "react-native";
const Cart = () => {
  const dispatch = useDispatch();
  const { list = [], totalPrice } = {
    ...useSelector((state: RootState) => state.CartReducer)
  };
  const [classes, setClasses] = useState("cart");
  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => {
    setClasses("cart move-top");
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    if (list.length > 0) setClasses("cart move-bottom");
    else setClasses("cart move-bottom-empty");
    setOpenCart(false);
  };
  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      {openCart && <Backdrop clicked={handleCloseCart} />}
      <div className={classes} onClick={handleOpenCart}>
        <h3>Shopping Cart ( {list.length} )</h3>
        {list.length > 0 && (
          <>
            <ScrollView>
              <div className="cart-item-header">
                <span>name</span>
                <span>count</span>
                <span>price</span>
                <span>delete</span>
              </div>
              {list.map((item) => (
                <div className="cart-item">
                  <span title={item.name}>{limit(item.name, 6)}</span>
                  <span>{item.count}</span>
                  <span>{item.price}</span>
                  <button
                    className="delete"
                    onClick={() => handleRemove(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <div className="total">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>

              <button className="confirm">Confirm Payment</button>
            </ScrollView>
          </>
        )}
      </div>
    </>
  );
};
export default Cart;
