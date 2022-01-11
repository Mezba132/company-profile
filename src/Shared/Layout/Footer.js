import React from "react";

const Footer = () => {
	return (
			<div>
				<footer className="text-center text-lg-start bg-dark text-muted">
					<section
							className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
					>
						<div className="me-5 d-none d-lg-block">
							<span>Get connected with us on social networks:</span>
						</div>

						<div className='mr-5'>
							<a href="" className="text-reset ml-4">
								<i className="fa fa-facebook fa-lg"></i>
							</a>
							<a href="" className="text-reset ml-4">
								<i className="fa fa-twitter fa-lg"></i>
							</a>
							<a href="" className="text-reset ml-4">
								<i className="fa fa-google fa-lg"></i>
							</a>
							<a href="" className="text-reset ml-4">
								<i className="fa fa-instagram fa-lg"></i>
							</a>
							<a href="" className="text-reset ml-4">
								<i className="fa fa-linkedin fa-lg"></i>
							</a>
							<a href="" className="text-reset ml-4">
								<i className="fa fa-github fa-lg"></i>
							</a>
						</div>
					</section>

					<section className="">
						<div className="container text-center text-md-start mt-5">
							<div className="row mt-3">
								<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
									<img src="https://www.eurofoodsgroup.co.uk/wp-content/uploads/2017/11/construction_logo.png" alt="logo" />
									<p>
										Euro Foods Group is a leading international manufacturer and distributor of frozen and fresh foods, serving the restaurant, catering and specialist supermarket sectors.
									</p>
								</div>

								<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">
										Products
									</h6>
									<p>
										<a href="#!" className="text-reset">Meat & Poultry</a>
									</p>
									<p>
										<a href="#!" className="text-reset">Fish & Seafood</a>
									</p>
									<p>
										<a href="#!" className="text-reset">Dairy Products</a>
									</p>
									<p>
										<a href="#!" className="text-reset">Fruit & Vegetables</a>
									</p>
									<p>
										<a href="#!" className="text-reset">Herbs & Spices</a>
									</p>
								</div>

								<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
									<h6 className="text-uppercase fw-bold mb-4">
										Services
									</h6>
									<p>
										<a href="#!" className="text-reset">About Us</a>
									</p>
									<p>
										<a href="#!" className="text-reset">Careers</a>
									</p>
									<p>
										<a href="#!" className="text-reset">Terms and Conditions</a>
									</p>
									<p>
										<a href="#!" className="text-reset">Privacy Policy</a>
									</p>
								</div>

								<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
									<h6 className="text-uppercase fw-bold mb-4">
										Contact
									</h6>
									<p><i className="fa fa-home mr-3"></i>
										Head Office Location <br/>
										Euro Foods Group  <br/>
										EFG Food & Technology Park <br/>
										Llantarnam Park Way <br/>
										Cwmbran <br/>
										Torfaen <br/>
										NP44 3GA
									</p>
									<p>
										<i className="fa fa-envelope mr-3"></i>
										info@euro_food.com
									</p>
									<p><i className="fa fa-phone mr-3"></i> + 01633 636 000</p>
									<p><i className="fa fa-print mr-3"></i> + 01633 636 000</p>
								</div>
							</div>
						</div>
					</section>

					<div className="text-center p-4" style={{ backgroundColor : "rgba(0, 0, 0, 0.05)" }}>
						© 2021 Copyright:
						<a className="text-reset fw-bold" href="https://github.com/mezba132/">&nbsp; Nokibul Amin Mezba</a>
					</div>
				</footer>
			</div>
	)
}

export default Footer;