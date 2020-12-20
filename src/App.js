import React, {useState,useRef } from 'react'
import Images from './components/Images'
import {Container,Form} from 'react-bootstrap'

const App  = () =>{
	const [allImages,setallImages] = useState([])
	const imageInput = useRef()
	const updateImages = (e) => {
		e.preventDefault()
		const allNames = allImages.map(image => image.name)
		const filesArray = Array.from(imageInput.current.files).filter((file) =>{ return !allNames.includes(file.name)});
		const toAdd = filesArray.map(file => {
			return {
				name : file.name,
				url : URL.createObjectURL(file)
			}
		})
		setallImages(allImages.concat(toAdd));
		console.log(imageInput.current.files)
	};
	const delPhoto = (photo)=>{
		setallImages(allImages.filter(image => photo.name !== image.name))
	}
  return(
  <div>
	<Container fluid>
	<Form>
	<Form.Group>
		<Form.File ref={imageInput} type="file" multiple onClick = {({target})=>{target.value= ''}}onChange={updateImages} />
	</Form.Group>
	</Form>
	<Images  allImages={allImages} delPhoto={delPhoto}/>
	</Container>
  </div>
  )
}

export default App;
