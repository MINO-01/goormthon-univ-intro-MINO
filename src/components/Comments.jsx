//src/components/Comments.jsx
import {useState} from "react";
import styled from "styled-components";

const Contcontainer = styled.div`
margin:10px
`;

const ToggleButton = styled.button`
background-color: #ffffff;
color: black;
border: none;
padding: 10px;
cursor: pointer;
border-radius: 5px;
&:hover {
  background-color: green;
}
`;

const CommentBox = styled.textarea`
width: 300px;
padding: 10px;
border: solid black 2px;
background-color:#ffffff;
color:black;
border-radius: 5px;
resize: none;
`;

const SubmitButton = styled.button`
margin-top: 5px;
padding: 8px 15px;
background-color: #ffffff;
color: black;
border: solid black 2px;
border-radius: 5px;
cursor: pointer;
text-align:right;
&:hover {
  background-color: #218838;
}
`;

const CommentList = styled.ul`
list-style: none;
padding: 0;
text-align: left;
`;

const CommentItem = styled.li`
background-color: #f1f1f1;
padding: 5px;
margin-top: 5px;
border-radius: 5px;
display:block;
`;

function Comments() {
    const [isOpen, setIsOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
  
    const toggleComments = () => {
      setIsOpen(!isOpen);
    };
  
    const handleInputChange = (event) => {
      setComment(event.target.value);
    };
  
    const addComment = () => {
      if (comment.trim()) {
        setComments([...comments, comment]);
        setComment("");
      }
    };
    return(
        <Contcontainer>
        <ToggleButton onClick={toggleComments}>
            {isOpen ? "▲ 닫기" : "▼ 댓글"}
        </ToggleButton>

        {isOpen && (
            <div>
            <CommentBox
                value={comment}
                onChange={handleInputChange}
                placeholder="댓글을 입력하세요"
                rows="4"
                cols="50"
            />
            <br />
            <SubmitButton onClick={addComment}>등록</SubmitButton>

            <CommentList>
                {comments.map((cmt, index) => (
                <CommentItem key={index}>{cmt}</CommentItem>
                ))}
            </CommentList>
            </div>
        )}
        </Contcontainer>
        );
};

export default Comments;


