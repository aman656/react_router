import { useState } from 'react';
import CommentsList from '../comments/CommentsList'
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { useEffect,useCallback } from 'react';

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const[allcomments,setAllcommens] = useState([])
  const startAddCommentHandler = () => {
    setIsAddingComment(previous =>!previous);
  };
  const addingComment = (comment)=>{
    const sendingComment = async()=>{
       await fetch(`https://webapp-e180b-default-rtdb.firebaseio.com/comments/${props.path}.json`,{
        method:"POST",
        body:JSON.stringify(comment),
        headers: {
          'Content-Type': 'application/json',
        }
    })
}
    try{
        sendingComment()
        
    }
    catch(err){
         throw new Error ("Something went wrong!");
    }   
    console.log(props.path)
}
  const fetchingfromDatabase = useCallback(async()=>{

    try{
    const response = await fetch(`https://webapp-e180b-default-rtdb.firebaseio.com/comments/${props.path}.json`)
    if(!response.ok){
        throw new Error("Something went wrong")
    }

    const data = await response.json()
    
    const list = []
    for (const key in data){
        list.push({
            id:key,
            text:data[key].text
        })
    }
    setAllcommens(list)
}catch(err){
        console.log(err)

    } 
  },)
  useEffect(()=>{
      fetchingfromDatabase()
    },[fetchingfromDatabase])
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm  onAddingComment = {addingComment}  />}
      <p>Comments...</p>
      <CommentsList  comments = {allcomments}             />
    </section>
  );
};

export default Comments;
