import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className={'HomePage'}>
      <ul>
        <li><Link to={'/props'}>Props</Link></li>
      </ul>

      <Button variant="contained">asdas</Button>
      <TextField label='asd' />
    </div>
  )
}