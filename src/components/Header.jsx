// import React from 'react'

const Header = () => {
  return (
      <>
    <div id="carouselExampleAutoplaying" className="carousel slide d-flex align-items-center bg-body-secondary" data-bs-ride="carousel">
  <div className="carousel-inner d-flex align-items-center">
    <p className="carousel-item active">Grab BestSelling Book&lsquo;s Upto 50% off!
    </p>
    <p className="carousel-item">Flat 10% off(Maximum Discount Rs.50)
    </p>
    <p className="carousel-item">India&lsquo;s Largest Online Bookstore
    </p>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </>
  )
}

export default Header