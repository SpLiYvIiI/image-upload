import React from 'react'
import {Card,Button} from 'react-bootstrap'
import '../styles.css'


const Images = ({allImages,delPhoto}) =>{
return(
    <div className="res">
	{allImages.map((photo) => {
		return (
		<div key = {photo.url}>
		<Card style={{ width: '18rem' }}>
  			<Card.Img src={photo.url} fluid="true" />
		</Card>												
		<div> 
		{photo.name}
		<Button onClick={()=>{delPhoto(photo)}}>delete</Button>
		</div>
		</div>
		);
	})}
	</div>
)
}

export default Images