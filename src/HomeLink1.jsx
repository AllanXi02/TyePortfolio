import React, { useState, useEffect } from 'react';
 import"./HomeLink1.css";

function Homelink1() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: 'Rosa rugosa alba',
      content: <HomeSub1 />,
    },
    {
      title: 'Rosa woodsii',
      content: <HomeSub2 />,
    },
    {
      title: 'Capitaine John Ingram',
      content: <HomeSub3 />,
    },
  ];

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // Enter key
      setActiveTab(event.target.dataset.index);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className="home">
      <h2 className="home__title">Rose Beloved</h2>
      <div className="home__tabs">
        {tabs.map((tab, index) => (
          <div
            className={`home__tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            data-index={index}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="home__content">{tabs[activeTab].content}</div>
    </div>
  );
}
function HomeSub1() {
  return (
    <div className="homelink1">
      <img
        src="https://images.unsplash.com/photo-1586963740689-b5928f8dda10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt="white rose"
        className="home__image"
      />
      <p className="home__description">
      Description
Also known by the common names, Japanese rose or beach tomato, this rose is native to East Asia and thrives along seashores with a tolerance for salty, sandy soils. A sprawling shrub, it produces large edible rose hips (hence, the ‘tomato’ common name) that can be made into rosehip jam. The species name ‘rugosa’ refers to the wrinkled appearance of the leaves.

 

Flowers
White, five petals

 

Range
North China, Korea, and Japan

 

Care
Very adaptable and tolerant of different soils
Partial shade to full sun
 
      </p>
    </div>
  );
}
function HomeSub2() {
  return (
    <div className="homelink1">
      <img
        src="https://images.unsplash.com/photo-1554486840-db3a33d9318e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHJvc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Rosa woodsili"
        className="home__image"
      />
      <p className="home__description">
     

Description
A common North American wildflower, woods rose is a deciduous shrub. Both fast-growing and long-lived, you can find them in meadow edges and forests across the continent. It plays a critical role in its native ecosystems, supporting both pollinators and bird populations.

 

Flowers
Five light to dark pink petals surrounding yellow stamen

 

Range
North America

 

Care
Partial to full sun
Drought tolerant
      </p>
    </div>
  );
}
function HomeSub3() {
  return (
    <div className="homelink1" aria-label="Kinds of Rose" >
      <img
        src="https://images.unsplash.com/photo-1541143011610-fe5c3458686e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt="Capitaine John Ingram"
        className="home__image"
      />
      <p className="home__description">
      Description 
Very fuzzy, mossed buds reveal many purple petals forming a double bloom. Be ready to have your noses charmed as these flowers are incredibly fragrant.

 

Hardiness Zone
6-9

 

Care
Full sun
Well-draining soil
      </p>
    </div>
  );
}

export default Homelink1;
