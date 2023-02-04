import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function List(props) {
  let nav = useNavigate();

  return props.load ? (
    <h3>검색 중입니다...</h3>
  ) : (
    <Table className="table-bordered table-hover">
      <thead>
        <tr>
          <th>상품명</th>
          <th>종류</th>
          <th>생산업체</th>
        </tr>
      </thead>
      <tbody>
        {props.foods.map((e, idx) => {
          return (
            <tr key={idx}>
              <td
                className="table-hover tablecursor"
                onClick={() => {
                  nav("/food/chart", {
                    state: {
                      name: e[0],
                      calorie: e[3],
                      carbohydrate: e[4],
                      protein: e[5],
                      fat: e[6],
                      sugars: e[7],
                    },
                  });
                }}
              >
                {e[0]}
              </td>
              <td>{e[1]}</td>
              <td>{e[2]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default List;
