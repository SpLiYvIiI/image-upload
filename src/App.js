import React, {useState } from 'react'
import './styles.css'

const App  = () =>{
  const [allImages,setallImages] = useState([])
  
const updateImages = (e) => {
	e.preventDefault()
	const allNames = allImages.map(image => image.name)
	const filesArray = Array.from(e.target.files).filter((file) =>{ return !allNames.includes(file.name)});
	const toAdd = filesArray.map(file => {
		return {
			name : file.name,
			url : URL.createObjectURL(file)
		}
	})
	setallImages((prevImages) => prevImages.concat(toAdd));
};
const delPhoto = (photo)=>{
	setallImages(allImages.filter(image => photo.name !== image.name))
}
  return(
  <div>
	<input type="file" multiple onClick = {({target})=>{target.value= ''}}onChange={updateImages}></input>
	<div className="res">
	{allImages.map((photo) => {
		return (
		<div key = {photo.url}>
		<img src={photo.url} alt="" />
		<div> 
		{photo.name}
		<button onClick={()=>{delPhoto(photo)}}>delete</button>
		</div>
		</div>
		);
	})}
	</div>
  </div>
  )
}

export default App;
