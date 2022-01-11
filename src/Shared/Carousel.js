const Carousel = () => (
		<div id="carouselIndicators" className="carousel slide mb-3 mt-2" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
				<li data-target="#carouselIndicators" data-slide-to="1"></li>
				<li data-target="#carouselIndicators" data-slide-to="2"></li>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="https://imgk.timesnownews.com/story/Fruit_and_begetables_longevity_heart_health_diet.jpg?tr=w-400,h-300,fo-auto" className="d-block w-100 carousel_size" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src="https://www.bevindustry.com/ext/resources/issues/2019/June/The-Color-Psychology-Behind-Beverage-Ingredients-Beverage-Industry.jpg?1560462971" className="d-block w-100 carousel_size" alt="..."/>
				</div>
				<div className="carousel-item">
					<img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/dairyreporter.com/news/retail-shopper-insights/pandemic-leads-to-more-consumption-of-dairy-products/12201507-1-eng-GB/Pandemic-leads-to-more-consumption-of-dairy-products_wrbm_large.jpg" className="d-block w-100 carousel_size" alt="..."/>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselIndicators" role="button"
			   data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselIndicators" role="button"
			   data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
)

export default Carousel;