import React, { useEffect, useState } from 'react';

function Footeer() {
  const [allTea, setAllTea] = useState([{
    name: '',
    img: '',
    description: '',
    location: '',
    x: 0.00,
    y: 0.00,
  }]);

  useEffect(() => {
    fetch('/api/teas')
      .then((res) => res.json())
      .then((data) => setAllTea(data));
  }, []);
  return (
    <>
      <div className="container p-4">
        <section className="">
          <div className="row">
            {allTea?.map((el) => (
              <div key={el.id} className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div className="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">
                  <a href={`/tea/${el.id}`}>
                  <img src={el.img} className="w-100" />
                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                  </a>
                </div>
              </div>
            ))}

          </div>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className="text-white" href="https://elbrusboot.camp">ElbrusBootCamp || JAYS</a>
      </div>
    </>
  );
}

export default Footeer;
