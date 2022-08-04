import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser({ users, setUsers }) {

    const navigate = useNavigate();
    const params = useParams();
    const [userData, setUserData] = useState(users.find(elem => elem.id === params.id));

    const [id, setId] = useState(userData?.id);
    const [name, setName] = useState(userData?.name);
    const [avatar, setAvatar] = useState(userData?.avatar);
    const [email, setEmail] = useState(userData?.email);
    const [about, setAbout] = useState(userData?.about);
    const [contact, setContact] = useState(userData?.contact);


    const edited_user = {
        name: name,
        avatar: avatar,
        email: email,
        about: about,
        contact: contact,
        id: id
    }

    const handleSave = (e) => {
        e.preventDefault();
        let index_of_user = users.indexOf(userData);
        let copy = users;
        copy[index_of_user] = edited_user;
        setUsers(copy)
        navigate("/")
    }

    return (
        <div className="edit-container">
            <Button className="mt-4" onClick={() => navigate("/")}>Go to Home Page</Button>
            <div className="my-5">
                <form>
                    <div>
                        <Form.Label className="input_label">Name</Form.Label>
                        <input type="text" className="input_elem mb-3" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <Form.Label className="input_label">Avatar</Form.Label>
                        <input type="url" className="input_elem mb-3" placeholder="Enter Avatar link" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
                    </div>
                    <div>
                        <Form.Label className="input_label">Email Id</Form.Label>
                        <input type="email" className="input_elem mb-3" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <Form.Label className="input_label">About</Form.Label>
                        <input type="text" className="input_elem mb-3" placeholder="Select date" value={about} onChange={(e) => setAbout(e.target.value)} />
                    </div>
                    <div>
                        <Form.Label className="input_label">Contact</Form.Label>
                        <input type="tel" className="input_elem mb-3" placeholder="Enter Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} />
                    </div>
                </form>


                <Button variant="success" type="submit" onClick={handleSave}>
                    Save
                </Button>
            </div >
        </div>
    )
}
