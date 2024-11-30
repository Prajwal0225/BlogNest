//@ts-ignore
import axios from "axios";
import { useEffect, useState } from "react";

interface Comment {
    id: number;
    comment: string;
    user: {
        username: string;
        profileimg: string;
    };
}

interface CommentsSectionInterface {
    image: string;
    blogpostId: number;
    userId: number;
}

export default function Comments({ image, blogpostId, userId }: CommentsSectionInterface) {
    const [comments, setComments] = useState<Comment[]>([]); 
    const [commentText, setCommentText] = useState(""); 
    const [commentadded,setCommentadded] = useState(true);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/getcomments?id=${blogpostId}`);
                setComments(response.data.comments);
            } catch (error) {
                console.error("Failed to fetch comments:", error);
            }
            setLoading(false);
        };
        fetchComments();
    }, [commentadded,blogpostId]);

    
    const handleCommentPost = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/comment`, {
                comment: commentText,
                blogpostId,
                userId,
            });
            if (response.data.message === "Comment added successfully") {
               setCommentadded((prev)=>!prev);
            }

            setCommentText("");
        } catch (error) {
            console.error("Failed to post comment:", error);
        }
    };

    return (
        <>
            <h1 className="text-2xl text-white font-bold my-8">Comments:</h1>
            {loading?  <h1 className="text-white mt-8 mb-10 font-bold text-center text-xl">Loading...</h1>
: 
// flex gap-5 mt-8 mb-10
            <div className="flex gap-5 mt-8 mb-10">
                <img className=" w-14 h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full" src={image} alt="User profile" />
                <input
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    // 
                    className="w-full rounded-xl px-5 bg-gray-800 text-white"
                    placeholder="Add Comment"
                />
                <button onClick={handleCommentPost} className="bg-green-500 rounded-xl px-8 font-bold">Post</button>
            </div>

}
            {comments?.map((comment) => (
                <div key={comment.id} className="flex gap-2 md:gap-5 border border-white p-5 rounded-xl mb-5">
                    <img
                        className="w-14 h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full"
                        src={comment.user.profileimg}
                        alt={`${comment.user.username}'s profile`}
                    />
                    <div className="w-full rounded-xl px-5 text-white">
                        <p className="text-xl font-bold mb-2 underline">{comment.user.username}</p>
                        <p>{comment.comment}</p>
                    </div>
                </div>
            ))}
        
        
            
        </>
    );
}
