import React from "react";
import "./collection-preview.style.scss";

const ColllectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default ColllectionPreview;