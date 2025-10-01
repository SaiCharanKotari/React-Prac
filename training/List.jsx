import React from "react";


class List extends React.Component {
  render(){
    const {category,items}=this.props;
    const listItems=items.map(fruit =>(
      <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b>
      </li>
    ));
    return (
      <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
      </>
    );
  }
}

List.defaultProps={
  category:"Category",
  items:[],
}

export default List;