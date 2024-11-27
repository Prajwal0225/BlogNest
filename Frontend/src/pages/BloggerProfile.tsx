import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BloggerProfile() {
  const { blogger } = useParams(); // Get the blogger username from the URL params
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    // Check if blogger username exists before making the API call
    if (blogger) {
      const profile = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile?blogger=${blogger}`);
          // Assuming the response has 'image', 'username', 'bio', and 'email' in the response data
          setImage(response.data.image);
          setUsername(response.data.username);
          setBio(response.data.bio);
          setEmail(response.data.email);
        } catch (error) {
          console.error("Error fetching blogger profile:", error);
          // Optionally, you can handle errors like showing a message to the user
        }
      };

      profile();
    }
  }, [blogger]); // Dependency array ensures useEffect only runs when 'blogger' changes

  return (
    <>
      <Navbar />
      <div className="p-8">
        <div>
          <div className="flex justify-center">
            <img
              className="md:w-1/4 md:h-1/4 avatar aspect-square rounded-full mb-10"
              src={image}
              alt={`${username}'s profile`} // Adding alt text for accessibility
            />
          </div>

          <div className="text-white text-xl px-3">
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">{username}</p>
              <br />
              <p className="text-gray-400 mb-2">{bio}</p>
              <br />
              <p className="text-gray-500">{email}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
