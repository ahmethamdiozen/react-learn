import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import ArrayRender from './ArrayRender'

const root = createRoot(document.getElementById("root"))


root.render(
  <>
  {/* 'CMD + /' to un/comment */}
  
    {/* <App setup="Yes" name="Hamdike"/> */}
    {/* <App setup="yeah" name=""/> */} 
    {/* <App setup="" name="Ahmet"/> */}
    <ArrayRender />
  </>
)