
import "../components/uploadview.css";
import Header from "./header";
import { useNavigate } from "react-router-dom";


export default function UploadView({ setIndicators }) {
    const navigate = useNavigate();
    async function FormHandler(e) {
        e.preventDefault();
        console.log(e.target);
        let formData = new FormData(e.target);
        let dataFromForm = Object.fromEntries(formData.entries());
        console.log(dataFromForm);

        await fetch("https://instaserver1.onrender.com/posts", {
            method: "post",
            body: formData,
            redirect: "follow"
        })
            .then(res => {
                return res.text();
            })
            .then(text => {
                console.log(text);
            })
            .catch(err => {
                console.log(err);
            })
        navigate("/postview");
    }
    return <div>
        <Header />
        <form onSubmit={FormHandler} id="container">
            <input type={"file"} name="PostImage" id="input_file" accept=".jpg, .jpeg, .png, .pdf" required={true}></input>
            <input type={"text"} name="name" id="input_author" placeholder="Author" required={true}></input>
            <input type={"text"} name="location" id="input_location" placeholder="Location" required={true}></input>
            <input type={"text"} name="description" id="input_description" placeholder="Descirption" required={true}></input>
            <button id="button">Post</button>
        </form>
    </div>
}