import React, { useState } from "react";


//create your first component
const Home = () => {

	const initialState = {
		"list": "",
	}

	const [theList,setTheList] = useState(initialState);
	const [ListsArr,setListArr] = useState([]);
	const [error,setError] = useState("");

	const  handleList = (e) => {
			setTheList(
				{
					...theList,
					[e.target.name]:e.target.value

				}
				
			);
			// console.log(theList)
	}
	const handleSubmit = (e) =>{
		e.preventDefault();	
		if(theList.list.trim() == ""){
			console.log('los campos son obligatorios!')
			setError("border-3 border-danger")
			return
		}
		setListArr([...ListsArr,theList])
		setTheList(initialState)
	}
	const handleDelete = (item) => {

		if (!ListsArr.includes(item)) {
			console.log("elimina el elemento")
		}
		
		
	}//  eliminar el focus al aparecer la clase de error.
	// modificar el valor por defecto de Type your task a empty task here!
	return (
		<>
			<div className="row d-flex flex-column align-items-center">
					<div className="col-12 md-7">
						<div className="container">
							<h1 className="text-center mt-5 mb-3">TODOS
								<i className="fas fa-tasks ms-3 "></i>
							</h1>
						<ul className="list-group " style={{"margin":"auto","maxWidth":"50rem"}}>
							<form 
								className="list-group-item"
								action=""
								onSubmit={handleSubmit}
							>
							<input
								className={`border rounded-1 p-2 w-100 ${error}`} 
								type="text" 
								placeholder="Type your task"
								onChange={handleList}
								name="list"
								value={theList.list}
							/>
							</form>

							{ListsArr.map((item)=> {
								return (
									<li className="list-group-item d-flex justify-content-between align-items-center ">
										{item.list}
									<i onClick={handleDelete}  className="btn btn-sm fas fa-trash"></i>
							</li>
								)
							})}
						<small className="text-muted text-start list-group-item">{ListsArr.length == 0 ? "No items " :  ` ${ListsArr.length} items left ` }</small>
						</ul>
						
						</div>
					</div>
			</div>
		</>
	);
};

export default Home;
