import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import EditUser from './Components/EditUser';
import CreateUser from './Components/CreateUser';

function App() {
  const [users, setUsers] = useState([
    {
      name: "random name",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/518.jpg",
      email: "Isom_Zieme56@yahoo.com",
      contact: "474-788-7696",
      about: "District",
      id: "3"
    },
    {
      name: "Lorraine Powlowski🛑",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1240.jpg",
      email: "Cortney.Sporer16@yahoo.com",
      contact: "473-918-0265",
      about: "Chief",
      id: "4"
    },
    {
      name: "Lawrence Gulgowski",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/529.jpg",
      email: "Treva.Abbott@gmail.com",
      contact: "935-934-0642",
      about: "Dynamic",
      id: "5"
    },
    {
      name: "Ms. Sonia Kuphal",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1080.jpg",
      email: "Hank_Stanton31@yahoo.com",
      contact: "735-785-4987",
      about: "Dynamic",
      id: "6"
    },
    {
      name: "Percy Wehner",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1034.jpg",
      email: "Mittie.Ward@hotmail.com",
      contact: "885-826-3345",
      about: "Dynamic",
      id: "7"
    },
    {
      name: "Bill Funk Jr.",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/892.jpg",
      email: "Elmo.Kessler@gmail.com",
      contact: "711-746-8963",
      about: "Investor",
      id: "8"
    },
    {
      name: "Everett Turner",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/862.jpg",
      email: "Juanita.OConnell28@yahoo.com",
      contact: "655-916-5473",
      about: "Regional",
      id: "9"
    },
    {
      name: "Sarah Bernhard",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/754.jpg",
      email: "Bonita_Keeling16@gmail.com",
      contact: "981-887-3416",
      about: "Corporate",
      id: "10"
    },
    {
      name: "Nettie Gibson",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1121.jpg",
      email: "Chauncey_Lubowitz@hotmail.com",
      contact: "896-682-4555",
      about: "Central",
      id: "11"
    },
    {
      name: "Ian Franey",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/296.jpg",
      email: "Abe56@gmail.com",
      contact: "743-629-8886",
      about: "Dynamic",
      id: "12"
    },
    {
      name: "kuch bhi",
      avatar: "data:image/jpeg;base64,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",
      email: "ogomkargavhane@gmail.com",
      contact: 9082732814,
      about: "dfgfg",
      id: "13"
    }
  ])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage users={users} setUsers={setUsers} />} />
        <Route path="/edit-user/:id" element={<EditUser users={users} setUsers={setUsers} />} />
        <Route path="/create-user" element={<CreateUser users={users} setUsers={setUsers} />} />
      </Routes>
    </div>
  );
}

export default App;
