import  React from "react";
import { Link } from "react-router-dom";

const Header = () =>{

	document.addEventListener("DOMContentLoaded", function(){
		window.addEventListener('scroll', function() {
			if (window.scrollY > 10) {
				console.log(window.scroll)
				document.getElementById('navbar_top').classList.add('fixed-top');
				let navbar_height = document.querySelector('.navbar').offsetHeight;
				document.body.style.paddingTop = navbar_height + 'px';
			} else {
				document.getElementById('navbar_top').classList.remove('fixed-top');
				document.body.style.paddingTop = '0';
			}
		});
	});

	return (

				<React.Fragment>
					<div>
						<nav className=" navbar navbar-dark navbar-expand-md bg-dark justify-content-center">
							<button className="navbar-toggler" type="button" data-toggle="collapse"
							        data-target="#topBar">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="navbar-collapse collapse w-100" id="topBar">
								<ul className="nav navbar-nav ml-auto w-100 justify-content-end">
									<li className="nav-item"><Link to='#' className='nav-link'>Register</Link></li>
									<li className="nav-item"><Link to='#' className='nav-link'>Login</Link></li>
								</ul>
							</div>
						</nav>
					</div>
					<div>
						<nav id="navbar_top" className=" navbar navbar-dark navbar-expand-md bg-success justify-content-center">
							<img src="https://www.eurofoodsgroup.co.uk/wp-content/uploads/2017/11/construction_logo.png" alt="logo" />
							<button className="navbar-toggler" type="button" data-toggle="collapse"
							        data-target="#secondTopBar">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="navbar-collapse collapse w-100" id="secondTopBar">
								<ul className="nav navbar-nav ml-auto w-100 justify-content-center">
										<li className="nav-item"><Link className="nav-link" to="#"> About Us </Link></li>
										<li className="nav-item"><Link className="nav-link" to="#"> Products </Link></li>
										<li className="nav-item"><Link className="nav-link" to="#"> Careers </Link></li>
								</ul>
							</div>
						</nav>
					</div>
				</React.Fragment>

			)
}

export default Header;