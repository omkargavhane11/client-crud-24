import { useState } from "react";
import { Button, Form, Alert, Toast } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateUser({ users, setUsers }) {

    const navigate = useNavigate();
    const params = useParams();

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [email, setEmail] = useState("");
    const [about, setAbout] = useState("");
    const [contact, setContact] = useState("");

    const [show, setShow] = useState(false);


    const handleSave = (e) => {
        e.preventDefault();
        if (name.length || avatar.length || email.length || about.length || contact.length !== 0) {
            const newUser = {
                id: Math.random().toString(36).replace(/[^a-z]+/g, ''),
                name,
                avatar,
                email,
                about,
                contact
            }

            setUsers([newUser, ...users]);
            navigate("/");
        } else {
            setShow(true)
        }
    }

    return (
        <div className="create-user-div">
            <Button className="m-1" onClick={() => navigate("/")}>Go to Home Page</Button>
            <br></br>
            {/* <Button className="m-1" variant="outline-dark" onClick={getUser}>Get user</Button> */}
            {/* <br></br> */}
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className="toast">
                <Toast.Body>Please fill all fields</Toast.Body>
            </Toast>
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
                        <input type="number" className="input_elem mb-3" placeholder="Enter Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} />
                    </div>
                </form>


                <Button variant="success" type="submit" onClick={handleSave}>
                    Save
                </Button>
            </div >
        </div >
    )
}
