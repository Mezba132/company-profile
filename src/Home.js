import React, {Fragment} from 'react'
import Header from "./Shared/Layout/Header";
import Footer from "./Shared/Layout/Footer";
import Carousel from "./Shared/Carousel";
import ProductCard from "./Shared/Card";
import ProductCard2 from "./Shared/Card2";
import { Pagination } from 'antd';
import Contact from "./Shared/Contact";
import {Link} from "react-router-dom";

const Home = () => {

	return (
				<Fragment>
					<Header/>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-md-2'>
								<div className='m-3'>
									<h3 className="font-weight-bold">Our Products</h3>
									<ul className="list-unstyled pl-3">
										<Link to="#" ><li className="text-danger"><p>Meat & Poultry</p></li></Link>
										<Link to="#" ><li className="text-danger"><p>Fish & Seafood</p></li></Link>
										<Link to="#" ><li className="text-danger"><p>Fruit & Vegetables</p></li></Link>
										<Link to="#" ><li className="text-danger"><p>Herbs & Spices</p></li></Link>
										<Link to="#" ><li className="text-danger"><p>Dairy Products</p></li></Link>
										<Link to="#" ><li className="text-danger"><p>Oil, Fat & Ghee</p></li></Link>
										<Link to="#" ><li className="text-danger"><p>Drinks</p></li></Link>
										<Link to="#" ><li className="text-danger"><p>Packaging</p></li></Link>
									</ul>
								</div>
							</div>
							<div className='col-md-10'>
								<Carousel/>
							</div>

							<div className='col-md-12'>
								<div className="bg-warning text-center">
									<h2>Meat & Poultry</h2>
								</div>
								<div className='m-5 d-flex'>
									<ProductCard/>
									<ProductCard/>
									<ProductCard/>
									<ProductCard/>
								</div>
								<div className="float-right mb-3">
									<Pagination defaultCurrent={1} total={20}  />
								</div>
							</div>
							<div className='col-md-12'>
								<div className="bg-warning text-center">
									<h2>Fruit & Vegetables</h2>
								</div>
								<div className='m-5 d-flex'>
									<ProductCard2/>
									<ProductCard2/>
									<ProductCard2/>
									<ProductCard2/>
								</div>
								<div className="float-right mb-3">
									<Pagination defaultCurrent={1} total={20}  />
								</div>
							</div>
							<div className="col-md-12">
								<Contact/>
							</div>
						</div>
					</div>
					<Footer/>
				</Fragment>
	)
}

export default Home;
