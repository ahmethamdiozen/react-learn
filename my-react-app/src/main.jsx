import { createRoot } from 'react-dom/client'
import './index.css'

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
  </table>
);

createRoot(document.getElementById('sandy')).render(
  myelement
)