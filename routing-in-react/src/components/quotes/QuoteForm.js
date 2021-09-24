import { useRef,Fragment,useState } from 'react';
import { Prompt } from 'react-router';

import Card from '../UI/Card';
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from './QuoteForm.module.css';


const QuoteForm = (props) => {
  const [focused,setFocused] = useState(false)
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAdding({ author: enteredAuthor, text: enteredText });
  }
  const focusHandler = ()=>{
    setFocused(true)

  }

  return (
    <Fragment>
      <Prompt  when={focused} message = {(location)=>
        'Are you sure you want to leave this page?'
      }      />
    <Card>
      <form  onFocus={focusHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button   onClick={()=>{setFocused(false)}}       className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;
