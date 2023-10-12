import {AppBar,Toolbar,styled} from "@mui/material";


const Container=styled(AppBar)`
 background:yellow;
 height:9vh;

`
const Header=()=>{
    return(
        <Container position="static">
            <Toolbar>
            
                <img src="./img/codepenicon.png" alt="Logo" />
            </Toolbar>

        </Container>
    )
}

export default Header