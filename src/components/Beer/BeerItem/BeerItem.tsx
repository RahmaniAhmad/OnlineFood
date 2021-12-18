import { MouseEventHandler, useState, useEffect } from "react";
import { fetchById } from "../../../store/actions/beerActions";
import { addToCart } from "../../../store/actions/cartActions";
import { RootState } from "../../../store/reducers/index";
import { useDispatch, useSelector } from "react-redux";
import {
  ScrollView,
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View
} from "react-native";
import Backdrop from "../../Backdrop/Backdrop";
import "./BeerItem.css";

interface beerItemProps {
  clicked: MouseEventHandler<HTMLButtonElement>;
  selectedId: number;
}
const BeerItem = (props: beerItemProps) => {
  const dispatch = useDispatch();
  const { selectedItem = {} } = {
    ...useSelector((state: RootState) => state.BeerReducer)
  };

  useEffect(() => {
    dispatch(fetchById(props.selectedId));
  }, []);
  const handleAddToCart = () => {
    dispatch(
      addToCart(selectedItem.id, selectedItem.name, 1, selectedItem.abv)
    );
  };
  return (
    <>
      <Modal animationType="slide" transparent={true}>
        <Backdrop />
        <div className="item-container">
          <button className="close" onClick={props.clicked}>
            close
          </button>
          <ScrollView>
            <div className="item">
              <button onClick={handleAddToCart}>ADD TO CART</button>
              <div className="item-info">
                <div className="text">
                  <h2>{selectedItem.name}</h2>
                  <span>{selectedItem.tagline}</span>
                  <span>{selectedItem.abv}</span>
                  <span>{selectedItem.description}</span>
                  <span>{selectedItem.abv}</span>
                </div>
                <div className="image">
                  <img title={selectedItem.name} src={selectedItem.image_url} />
                </div>
              </div>
            </div>
          </ScrollView>{" "}
        </div>
      </Modal>
    </>
  );
};

export default BeerItem;
