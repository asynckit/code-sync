import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState("");
    const [username, setUsername] = useState("");

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        toast.success("New Room Created!");
    };
    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error("Room id and Username is required!");
            return;
        }
        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };
    const handleInputEnter = (e)=>{
      console.log('event', e.code);
      if(e.code === 'Enter'){
        joinRoom();
      }
    }
    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="/code-sync.png"
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel">
                    Please paste your room invitation ID
                </h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Room Id"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    ></input>
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}

                    ></input>
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        if you don't have an invite then create &nbsp;
                        <a
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn"
                        >
                            new room
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Built with ❤️ with <a href="www.google.com">Ankit k</a>
                </h4>
            </footer>
        </div>
    );
};

export default Home;
