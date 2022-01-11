import {Card, Avatar, Modal} from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React, {useState} from "react";

const { Meta } = Card;

const ProductCard = () => {

	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
			<React.Fragment>
				<Modal title="Product" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
					<img
							alt="example"
							src="https://www.kemin.com/content/dam/kft/food-technologies-asia-pacific/Shelf-Life-Extension-For-Meat-&-Poultry.jpg"
							className="d-block w-50 "
					/>
					<h1>Produdct Title</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
					</p>
				</Modal>
				<Card
						style={{width: 300, marginLeft: 40}}
						cover={
							<img
									alt="example"
									src="https://www.kemin.com/content/dam/kft/food-technologies-asia-pacific/Shelf-Life-Extension-For-Meat-&-Poultry.jpg"
							/>
						}
						actions={[
							<span
									onClick={showModal}
							>
								<EyeOutlined key="quick_view"/>
							</span>,
							<ShoppingCartOutlined key="cart"/>,
						]}
				>
					<Meta
							avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
							title="Product title"
							description="This is the description"
					/>
				</Card>
			</React.Fragment>
	)
}

export default ProductCard