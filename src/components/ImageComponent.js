import React from 'react';
import { Image } from 'react-native';

//Functional component for showing image
const ImageComponent = (props) => {
return(
<Image
style={{width: 100, height: 100}}
source={{uri: props.imageUrl}}
></Image>
);
}

export default ImageComponent