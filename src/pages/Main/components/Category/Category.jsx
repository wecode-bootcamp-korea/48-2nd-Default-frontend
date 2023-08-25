import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.scss';

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <button>
          <div>
            <img src="/images/beach.jpeg" alt="" />
          </div>
          해변 근처
        </button>
        <button>
          <div>
            <img src="/images/camping.jpeg" alt="" />
          </div>
          캠핑장
        </button>
        <button>
          <div>
            <img src="/images/hanok.jpeg" alt="" />
          </div>
          한옥
        </button>
        <button>
          <div>
            <img src="/images/hot.jpg" alt="" />
          </div>
          인기 급상승
        </button>
        <button>
          <div>
            <img src="/images/room.jpeg" alt="" />
          </div>
          방
        </button>
      </div>
    </div>
  );
};

export default Category;
