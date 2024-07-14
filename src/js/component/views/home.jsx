import React, { useState } from "react";

//create your first component
const Home = () => {

	const initialState = {
		"list": "",
	}

	const [theList,setTheList] = useState(initialState);
	const [ListsArr,setListArr] = useState([]);

	const  handleList = (e) => {
			setTheList(
				{
					...theList,
					[e.target.name]:e.target.value

				}
			);

		// setListArr([...list,])
	}
	const handleSubmit = (e) =>{
		e.preventDefault();

		setListArr([...ListsArr,theList])
		console.log(theList)

	}
	return (
		<>
			<div className="row">
					<div className="col-12 md-7">
						<div className="container">
							<h1 className="text-center mt-5 mb-3">TODOS
								<i className="fas fa-tasks ms-3"></i>
							</h1>
						<ul className="list-group " style={{"maxWidth":"50rem"}}>
							<form 
								className="list-group-item"
								action=""
								onSubmit={handleSubmit}
							>
							<input
								className="border rounded-1 p-2 w-100" 
								type="text" 
								placeholder="Type your task"
								onChange={handleList}
								name="list"
							/>
							</form>

							{ListsArr.map((item)=> {
								return (
									<li className="list-group-item d-flex justify-content-between align-items-center">
										{item.list}
									<i className="fas fa-trash"></i>
							</li>
								)
							})}


{/* 
							<li className="list-group-item d-flex justify-content-between align-items-center">
							
								<i className="fas fa-trash"></i>
							</li>
							<li className="list-group-item d-flex justify-content-between align-items-center">
							
								<i className="fas fa-trash"></i>
							</li>
							<li className="list-group-item d-flex justify-content-between align-items-center">
								A third list item
								<i className="fas fa-trash"></i>
							</li> */}
						<small className="text-muted text-start list-group-item">{ListsArr.length == 0 ? "No items " : ListsArr.length  }</small>
						</ul>
						
						</div>
					</div>
			</div>
		</>
	);
};

export default Home;
