import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../../store/actions/beerActions";
import { RootState } from "../../store/reducers/index";
import {
  ScrollView,
} from "react-native";

import "./BeerList.css";
import BeerItem from "../Beer/BeerItem/BeerItem";
import { limit } from "../../utility/utility";
const BeerList = () => {
  const [showItem, setShowItem] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>();
  const dispatch = useDispatch();
  const {
    data = [],
    pagingInfo = { perPage: 0, currentPage: 0, rowsCount: 0 },
    loading,
    refreshList
  } = {
    ...useSelector((state: RootState) => state.BeerReducer)
  };

  useEffect(() => {
    if (refreshList)
      dispatch(fetchAll(pagingInfo.perPage, pagingInfo.currentPage));
  }, [refreshList]);

  const handleItemClick = (id: number) => {
    setShowItem(true);
    setSelectedId(id);
  };
  const handleItemClode = () => {
    setShowItem(false);
  };

  return (
    <>
      {showItem && (
        <BeerItem clicked={handleItemClode} selectedId={selectedId} />
      )}
      <ScrollView>
        <div className="product-container">
          {data.map((item) => (
            <div className="product">
              <img
                title={item.name}
                src={item.image_url}
                onClick={(id) => handleItemClick(item.id)}
              />

              <span title={item.name}>{limit(item.name, 10)}</span>
              <span>{item.abv}</span>
            </div>
          ))}
        </div>
      </ScrollView>
    </>
  );
};

export default BeerList;
