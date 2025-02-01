import { Avatar, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const CardCiv = ({civData})=>{
    const {name,left_image} = civData;
    console.log(left_image);
    

    return <ListItemButton>
        <ListItemIcon  sx={{height:"30px", width:"30px"}}>
            <img src={import.meta.env.VITE_API_BASE_IMG+left_image} alt={name}/>
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ sx: { fontWeight: 'bold' } }}>{name}</ListItemText>
    </ListItemButton>
}

export default CardCiv