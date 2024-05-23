import React, { useState, useEffect, useRef } from 'react';
import {Container, Row, Col, Input, Button} from 'reactstrap';

import axios from 'axios';

// import Loading from './loading';

const ChatGPTBotPage7 = () => {


  

    // console.log('hello')


    const [forceUpdateFlag, setForceUpdateFlag] = useState(false);

    const [readyforAnswer1, setReadyForAnswer1] = useState(false);
    const [readyforAnswer2, setReadyForAnswer2] = useState(false);
    const [readyforAnswer3, setReadyForAnswer3] = useState(false);
    const [readyforAnswer4, setReadyForAnswer4] = useState(false);
    const [readyforAnswer5, setReadyForAnswer5] = useState(false);
    const [readyforAnswer6, setReadyForAnswer6] = useState(false);
    const [readyforAnswer7, setReadyForAnswer7] = useState(false);
    const [readyforAnswer8, setReadyForAnswer8] = useState(false);
    const [readyforAnswer9, setReadyForAnswer9] = useState(false);
    const [readyforAnswer10, setReadyForAnswer10] = useState(false);
    const [readyforAnswer11, setReadyForAnswer11] = useState(false);
    const [readyforAnswer12, setReadyForAnswer12] = useState(false);
    const [readyforAnswer13, setReadyForAnswer13] = useState(false);
    const [readyforAnswer14, setReadyForAnswer14] = useState(false);
    const [readyforAnswer15, setReadyForAnswer15] = useState(false);

    const [bottomPage, setBottomPage] = useState(1);

    const [updateEntryRendered, setUpdateEntryRendered] = useState(false);
    const [updateEntryRendered2, setUpdateEntryRendered2] = useState(false);
    const [updateEntryRendered3, setUpdateEntryRendered3] = useState(false);
    const [updateEntryRendered4, setUpdateEntryRendered4] = useState(false);
    const [updateEntryRendered5, setUpdateEntryRendered5] = useState(false);
    const [updateEntryRendered6, setUpdateEntryRendered6] = useState(false);
    const [updateEntryRendered7, setUpdateEntryRendered7] = useState(false);
    const [updateEntryRendered8, setUpdateEntryRendered8] = useState(false);
    const [updateEntryRendered9, setUpdateEntryRendered9] = useState(false);
    const [updateEntryRendered10, setUpdateEntryRendered10] = useState(false);
    const [updateEntryRendered11, setUpdateEntryRendered11] = useState(false);
    const [updateEntryRendered12, setUpdateEntryRendered12] = useState(false);
    const [updateEntryRendered13, setUpdateEntryRendered13] = useState(false);
    const [updateEntryRendered14, setUpdateEntryRendered14] = useState(false);
    const [updateEntryRendered15, setUpdateEntryRendered15] = useState(false);

    

    const forceUpdate = () => {
        setForceUpdateFlag(prevFlag => !prevFlag);
    };
    
    const [userInput, setUserInput] = useState('');
    const [userInput2, setUserInput2] = useState('');
    const [scroll, setScroll] = useState('');

    // const containerStyle = {
    //     maxWidth: '45%', // Adjust the width as needed
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    // }; 

    const [variableCounter, setVariableCounter] = useState(1);
    const [responses, setResponses] = useState([]);
    const [entries, setEntries] = useState([]);
    const [inputValue, setInputValue] = useState('');
   let recMessages = [{ role: 'user', content: 'hello' }];
   let answer1 = ''
   let answer2 = ''
   let answer3 = ''
   let answer4 = ''
   let answer5 = ''
   let answer6 = ''
   let answer7 = ''
   let answer8 = ''
   let answer9 = ''
   let answer10 = ''
   let answer11 = ''
   let answer12 = ''
   let answer13 = ''
   let answer14 = ''
   let answer15 = ''

   let entry1 = ''
   let entry2 = ''
   let entry3 = ''
   let entry4 = ''
   let entry5 = ''
   let entry6 = ''
   let entry7 = ''
   let entry8 = ''
   let entry9 = ''
   let entry10 = ''
   let entry11 = ''
   let entry12 = ''
   let entry13 = ''
   let entry14 = ''
   let entry15 = ''

   const [ent1, setEnt1] = useState('');
   const [ent2, setEnt2] = useState('');
   const [ent3, setEnt3] = useState('');
   const [ent4, setEnt4] = useState('');
   const [ent5, setEnt5] = useState('');
   const [ent6, setEnt6] = useState('');
   const [ent7, setEnt7] = useState('');
   const [ent8, setEnt8] = useState('');
   const [ent9, setEnt9] = useState('');
   const [ent10, setEnt10] = useState('');
   const [ent11, setEnt11] = useState('');
   const [ent12, setEnt12] = useState('');
   const [ent13, setEnt13] = useState('');
   const [ent14, setEnt14] = useState('');
   const [ent15, setEnt15] = useState('');
   
   
   const inputRef = useRef(null);

   useEffect(() => {
       if (inputRef.current) {
           inputRef.current.focus();
       }
   }, []);

   useEffect(() => {
    // This code will run every time myState is set
    console.log('State changed:');
    window.scrollTo(0, document.body.scrollHeight);

    // You can perform any actions or logic here based on the state change

    // Don't forget to clean up any resources if needed when the component unmounts
    return () => {
      console.log('unmount')
    };
  }, [variableCounter]);

  useEffect(() => {
    // This code will run every time myState is set
    console.log('State changed:');
    window.scrollTo(0, document.body.scrollHeight);

    // You can perform any actions or logic here based on the state change

    // Don't forget to clean up any resources if needed when the component unmounts
    return () => {
      console.log('unmount')
    };
  }, [bottomPage]);


    
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    };

    const updateEntry = () =>{
        console.log('short time')
        console.log(variableCounter)
        setUserInput('');
        if (variableCounter === 1) {
            setEnt1(userInput2)
            setUpdateEntryRendered(true);
            setReadyForAnswer1(true);
        }else if (variableCounter === 2) {
            setEnt2(userInput2)
            setUpdateEntryRendered2(true);
            setReadyForAnswer2(true);
        }else if (variableCounter === 3) {
            setEnt3(userInput2)
            setUpdateEntryRendered3(true);
            setReadyForAnswer3(true);
        }else if (variableCounter === 4) {
            setEnt4(userInput2)
            setUpdateEntryRendered4(true);
            setReadyForAnswer4(true);
        }else if (variableCounter === 5) {
            setEnt5(userInput2)
            setUpdateEntryRendered5(true);
            setReadyForAnswer5(true);
        }else if (variableCounter === 6) {
            setEnt6(userInput2)
            setUpdateEntryRendered6(true);
            setReadyForAnswer6(true);
        }else if (variableCounter === 7) {
            setEnt7(userInput2)
            setUpdateEntryRendered7(true);
            setReadyForAnswer7(true);
        }else if (variableCounter === 8) {
            setEnt8(userInput2)
            setUpdateEntryRendered8(true);
            setReadyForAnswer8(true);
        }else if (variableCounter === 9) {
            setEnt9(userInput2)
            setUpdateEntryRendered9(true);
            setReadyForAnswer9(true);
        }else if (variableCounter === 10) {
            setEnt10(userInput2)
            setUpdateEntryRendered10(true);
            setReadyForAnswer10(true);
        }else if (variableCounter === 11) {
            setEnt11(userInput2)
            setUpdateEntryRendered11(true);
            setReadyForAnswer11(true);
        }else if (variableCounter === 12) {
            setEnt12(userInput2)
            setUpdateEntryRendered12(true);
            setReadyForAnswer12(true);
        }else if (variableCounter === 13) {
            setEnt13(userInput2)
            setUpdateEntryRendered13(true);
            setReadyForAnswer13(true);
        }else if (variableCounter === 14) {
            setEnt14(userInput2)
            setUpdateEntryRendered14(true);
            setReadyForAnswer14(true);
        }else if (variableCounter === 15) {
            setEnt15(userInput2)
            setUpdateEntryRendered15(true);
            setReadyForAnswer15(true);
        }
        
    }

    const handleUserInput = (e) => {
        // console.log(e.target.value)
        
        setUserInput(e.target.value);
        setUserInput2(e.target.value);
    };


    const handleChatRequest = async () => {
        
        // setEntries(prevResponses => [...prevResponses, { [`${variableCounter}`]: userInput }]);
       
        setBottomPage(prevBottom => prevBottom + 1);


        const data = {
            model: 'gpt-3.5-turbo', 
            messages: [
                { role: 'system', content:'# CONTEXT # You are a librarian bot. You are consulting a freshman writing student who needs help selecting a topic for their research paper.# OBJECTIVE # Students should select a topic that fits their assignment requirements and interests them. # TONE # Empathetic # AUDIENCE # Freshmen writing student that has no experience with academic writing # RESPONSE # Please respond in 4 sentences or less each response and ask the students questions in each response.You should have at least 4 responses before you finish the conversation. Start the conversation off by asking them about the requirements of their assignment and then move helping them explore topics that fit their assignment requirements and that they find interesting. If they are not required to write about a certain topic consider asking them "Is there a particular class or subject that you have enjoyed or found interesting recently?"  If they are required to write about a specific topic help them find a subtopic that they are interested in learning more about. Continually reminds students that it is okay to narrow down the question as there are lots of sources available.'
                },
                {role: 'user', content: 'hello' },
                { role: 'assistant', content: 'Hi there! I am a librarian chat bot. I am here to help you in selecting a topic for your research paper. Are there specific guidlines or constraints you need to follow when selecting a topic?  ' },
                ...recMessages,
                { role: 'user', content: userInput2 }
            ]
        };

        // Hello! I'm the librarian bot, and I'm here to help you choose a topic for your research paper. Can you tell me what the requirements are for your assignment? Specifically, what is the subject or theme you need to write about?

        try {
            // const response = await axios.post(apiUrl, data, { headers });

            

            const response = await axios.post(process.env.REACT_APP_API_URL, data, { headers });
            setEntries(prevResponses => [...prevResponses, { [`${variableCounter}`]: userInput2 }]);
            setResponses(prevResponses => [...prevResponses, { [`${variableCounter}`]: response.data.choices[0].message.content }]);
            
            setVariableCounter(prevCounter => prevCounter + 1);

            

            if (inputRef.current) {
                inputRef.current.focus(); // Set focus on the input field after processing the chat request
            }

            console.log('long time')
            
            // console.log(responses[0])

        } catch (error) {
            // console.error(error.response.data);
            // setBotResponse(`Error: ${error.response.status}, ${error.response.data}`);
            // console.error(error.response.status)
        } 
 
    };

    useEffect(() => {
        if (updateEntryRendered) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered]);

      useEffect(() => {
        if (updateEntryRendered2) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered2]);

      useEffect(() => {
        if (updateEntryRendered3) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered3]);

      useEffect(() => {
        if (updateEntryRendered4) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered4]);

      useEffect(() => {
        if (updateEntryRendered5) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered5]);

      useEffect(() => {
        if (updateEntryRendered6) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered6]);

      useEffect(() => {
        if (updateEntryRendered7) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered7]);

      useEffect(() => {
        if (updateEntryRendered8) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered8]);

      useEffect(() => {
        if (updateEntryRendered9) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered9]);

      useEffect(() => {
        if (updateEntryRendered10) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered10]);

      useEffect(() => {
        if (updateEntryRendered11) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered11]);

      useEffect(() => {
        if (updateEntryRendered12) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered12]);

      useEffect(() => {
        if (updateEntryRendered13) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered13]);

      useEffect(() => {
        if (updateEntryRendered14) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered14]);

      useEffect(() => {
        if (updateEntryRendered15) {
          // Update entry has been rendered, perform any actions or set additional state
          handleChatRequest(); // Trigger the next action
        }
      }, [updateEntryRendered15]);

//   console.log(responses[0])
    
    // let answer1 = ''
    // if (response1.includes(':')){
    //      answer1 = response1[1]
    // }

    

    
    if (variableCounter >= 2){
        // console.log(variableCounter)
        // console.log('hello' + responses)
        let response1 = responses[0]
        answer1 = response1[1]
        let recAnswer1= { role: 'assistant', content: answer1 }
        recMessages.push(recAnswer1);
        

        let self1 = entries[0]
        entry1 = self1[1]
        let me1= { role: 'user', content: entry1 }
        recMessages.push(me1);
        // console.log(recMessages[2].content)

        // console.log(recMessages)
        // console.log(answer1)
    }
     if (variableCounter >= 3){
        // console.log(variableCounter)

        let self2 = entries[1]
        entry2 = self2[2]
        let me2= { role: 'user', content: entry2 }
        recMessages.push(me2);

        let response2 = responses[1]
        // console.log(response2)
        answer2 = response2[2]
        let recAnswer2= { role: 'assistant', content: answer2 }
        recMessages.push(recAnswer2);
        // console.log(recMessages)

        
    }
    if (variableCounter >= 4){
        // console.log(variableCounter)

        let self3 = entries[2]
        entry3 = self3[3]
        let me3= { role: 'user', content: entry3 }
        recMessages.push(me3);

        let response3 = responses[2]
        // console.log(response2)
        answer3 = response3[3]
        let recAnswer3= { role: 'assistant', content: answer3 }
        recMessages.push(recAnswer3);
        // console.log(recMessages)

        
    }
    if (variableCounter >= 5){
        // console.log(variableCounter)

        let self4 = entries[3]
        entry4 = self4[4]
        let me4= { role: 'user', content: entry4 }
        recMessages.push(me4);

        let response4 = responses[3]
        // console.log(response2)
        answer4 = response4[4]
        let recAnswer4= { role: 'assistant', content: answer4 }
        recMessages.push(recAnswer4);
        // console.log(recMessages)

        
    }
    if (variableCounter >= 6){
        // console.log(variableCounter)

        let self5 = entries[4]
        entry5 = self5[5]
        let me5= { role: 'user', content: entry5 }
        recMessages.push(me5);

        let response5 = responses[4]
        // console.log(response2)
        answer5 = response5[5]
        let recAnswer5= { role: 'assistant', content: answer5 }
        recMessages.push(recAnswer5);
        // console.log(recMessages)

        
    }

    if (variableCounter >= 7){
        // console.log(variableCounter)

        let self6 = entries[5]
        entry6 = self6[6]
        let me6= { role: 'user', content: entry6 }
        recMessages.push(me6);

        let response6 = responses[5]
        // console.log(response2)
        answer6 = response6[6]
        let recAnswer6= { role: 'assistant', content: answer6 }
        recMessages.push(recAnswer6);
        // console.log(recMessages)

        
    }

    if (variableCounter >= 8){
        // console.log(variableCounter)

        let self7 = entries[6]
        entry7 = self7[7]
        let me7= { role: 'user', content: entry7 }
        recMessages.push(me7);

        let response7 = responses[6]
        // console.log(response2)
        answer7 = response7[7]
        let recAnswer7= { role: 'assistant', content: answer7 }
        recMessages.push(recAnswer7);
        // console.log(recMessages)

        
    }

    if (variableCounter >= 9){
        // console.log(variableCounter)

        let self8 = entries[7]
        entry8 = self8[8]
        let me8= { role: 'user', content: entry8 }
        recMessages.push(me8);

        let response8 = responses[7]
        // console.log(response2)
        answer8 = response8[8]
        let recAnswer8= { role: 'assistant', content: answer8 }
        recMessages.push(recAnswer8);
        // console.log(recMessages)

        
    }

    if (variableCounter >= 10){
        let self9 = entries[8]
        entry9 = self9[9]
        let me9= { role: 'user', content: entry9 }
        recMessages.push(me9);

        let response9 = responses[8]
        // console.log(response2)
        answer9 = response9[9]
        let recAnswer9= { role: 'assistant', content: answer9 }
        recMessages.push(recAnswer9);
        // console.log(recMessages)
    }

    if (variableCounter >= 11){
        // console.log(variableCounter)
        let self10 = entries[9]
        entry10 = self10[10]
        let me10= { role: 'user', content: entry10 }
        recMessages.push(me10);

        let response10 = responses[9]
        // console.log(response2)
        answer10 = response10[10]
        let recAnswer10= { role: 'assistant', content: answer10 }
        recMessages.push(recAnswer10);
        // console.log(recMessages)
    }

    if (variableCounter >= 12){
        let self11 = entries[10]
        entry11 = self11[11]
        let me11= { role: 'user', content: entry11 }
        recMessages.push(me11);

        let response11 = responses[10]
        // console.log(response2)
        answer11 = response11[11]
        let recAnswer11= { role: 'assistant', content: answer11 }
        recMessages.push(recAnswer11);
        // console.log(recMessages)
    }

    if (variableCounter >= 13){
        let self12 = entries[11]
        entry12 = self12[12]
        let me12= { role: 'user', content: entry12 }
        recMessages.push(me12);

        let response12 = responses[11]
        // console.log(response2)
        answer12 = response12[12]
        let recAnswer12= { role: 'assistant', content: answer12 }
        recMessages.push(recAnswer12);
        // console.log(recMessages)
    }

    if (variableCounter >= 14){
        let self13 = entries[12]
        entry13 = self13[13]
        let me13= { role: 'user', content: entry13 }
        recMessages.push(me13);

        let response13 = responses[12]
        // console.log(response2)
        answer13 = response13[13]
        let recAnswer13= { role: 'assistant', content: answer13 }
        recMessages.push(recAnswer13);
        // console.log(recMessages)
    }

    if (variableCounter >= 15){
        let self14 = entries[13]
        entry14 = self14[14]
        let me14= { role: 'user', content: entry14 }
        recMessages.push(me14);

        let response14 = responses[13]
        // console.log(response2)
        answer14 = response14[14]
        let recAnswer14= { role: 'assistant', content: answer14 }
        recMessages.push(recAnswer14);
        // console.log(recMessages)
    }

    if (variableCounter >= 16){
        // console.log(variableCounter)
        let self15 = entries[14]
        entry15 = self15[15]
        let me15= { role: 'user', content: entry15 }
        recMessages.push(me15);

        let response15 = responses[14]
        // console.log(response2)
        answer15 = response15[15]
        let recAnswer15= { role: 'assistant', content: answer15 }
        recMessages.push(recAnswer15);
        // console.log(recMessages)
    }



    

 
    
    

        // console.log('answer1' + answer1)
        // console.log('answer2' + answer2)
        // console.log(answer1)
    
    // console.log(answer1)

    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            updateEntry();
        }
    };

    console.log(responses)
    console.log(entries)
    console.log(recMessages)

    function printPage() {
        window.print();
    }

    return (
        <>
            <Container>
                <Row className='my-3 text-center'>
                    <h1>Topic Development Chat</h1>
                </Row>
                <Row className='my-3 text-left'>
                    <Col></Col>
                    <Col>
                    <h4>This librarian chatbot can help you select a research topic for your research paper.</h4>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <h5>As you select a topic, remember that it should:
                        </h5>
                        <ul>
                            <li>Be interesting to you.</li>
                            <li>Fit your assignment's requirements.</li>
                            <li>Appeal to your audience.</li>
                        </ul>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>

                </Row>
                <Row>
                {/* <Container style={containerStyle} className='border rounded p-3 bg-light '> */}
                <Col xs={0} md={2}>
                </Col>
                <Col>
                <Container className='border rounded p-3 bg-light '>
                    <Row className='my-3'>
                        <Col xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={6}  className='border rounded p-3 bg-info'>
                        Hi there! I am a librarian chat bot. I am here to help you in selecting a topic for your research paper. Are there specific guidlines or constraints you need to follow when selecting a topic?  
                        </Col>
                        <Col xs={4} md={5}>
                        </Col>
                        
                    </Row>
                    {updateEntryRendered && (
                    <Row className='my-3'>
                        <Col xs={4} md={5}>
                        </Col>
                        <Col xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {/* {recMessages[2].content} */}
                            {ent1}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {/* {variableCounter >= 2 && (  */}
                    {(variableCounter >= 2) ? (
                        <Row className='my-3'>
                            <Col xs={0} md={1}>
                            </Col>
                            <Col xs={8} md={6} className='border rounded p-3 bg-info'>
                                {answer1}
                            </Col>
                            <Col xs={4}  md={5}>
                            </Col>
                        </Row>
                        ) : readyforAnswer1 ? (
                            <Row className='my-3'>
                            <Col xs={0} md={1}>
                            </Col>
                            <Col  xs={8} md={3} className='rounded p-3 '>
                                {/* <Loading/> */}
                                Loading
                            </Col>
                            <Col xs={4} md={8}>
                            </Col>
                        </Row>
                    ): null}
                    {updateEntryRendered2 && (
                    <Row className='my-3'>
                        <Col xs={4} md={5}>
                        </Col>
                        <Col xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                        {ent2}
                        </Col>
                        <Col xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 3 ? (
                    <Row className='my-3'>
                        <Col xs={0} md={1}>
                        </Col>
                        <Col xs={8}  md={6} className='border rounded p-3 bg-info'>
                            {answer2}
                        </Col>
                        <Col xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer2 ? (
                        <Row className='my-3'>
                        <Col xs={0} md={1}>
                        </Col>
                        <Col xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered3 && (
                    <Row className='my-3'>
                        <Col xs={4} md={5}>
                        </Col>
                        <Col xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent3}
                        </Col>
                        <Col xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 4 ? (
                    <Row className='my-3'>
                        <Col xs={0} md={1}>
                        </Col>
                        <Col xs={8} md={6} className='border rounded p-3 bg-info'>
                            {answer3} 
                        </Col>
                        <Col xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer3 ? (
                        <Row className='my-3'>
                        <Col xs={0} md={1}>
                        </Col>
                        <Col xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered4 && (
                    <Row className='my-3'>
                        <Col xs={4} md={5}>
                        </Col>
                        <Col xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent4}
                        </Col>
                        <Col xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 5 ? (
                    <Row className='my-3'>
                        <Col xs={0}  md={1}>
                        </Col>
                        <Col  xs={8} md={6} className='border rounded p-3 bg-info'>
                            {answer4}
                        </Col>
                        <Col  xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer4 ? (
                        <Row className='my-3'>
                        <Col xs={0}  md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                {updateEntryRendered5 && (
                    <Row className='my-3'>
                        <Col xs={4}  md={5}>
                        </Col>
                        <Col  xs={8}  md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent5}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 6 ? (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8}  md={6}  className='border rounded p-3 bg-info'>
                            {answer5}
                        </Col>
                        <Col xs={4}  md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer5 ? (
                        <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered6 && (
                    <Row className='my-3'>
                        <Col  xs={4} md={5}>
                        </Col>
                        <Col   xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent6}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 7 ? (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col   xs={8} md={6}  className='border rounded p-3 bg-info'>
                            {answer6}
                        </Col>
                        <Col  xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer6 ? (
                        <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered7 && (
                    <Row className='my-3'>
                        <Col  xs={4} md={5}>
                        </Col>
                        <Col   xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent7}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 8 ? (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col   xs={8} md={6}  className='border rounded p-3 bg-info'>
                            {answer7}
                        </Col>
                        <Col  xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer7 ? (
                        <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered8 && (
                    <Row className='my-3'>
                        <Col  xs={4} md={5}>
                        </Col>
                        <Col   xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent8}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 9 ? (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col   xs={8} md={6} id='yourDivId' className='border rounded p-3 bg-info'>
                            {answer8}
                        </Col>
                        <Col  xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer8 ? (
                        <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered9 && (
                    <Row className='my-3'>
                        <Col  xs={4} md={5}>
                        </Col>
                        <Col   xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent9}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 10 ? (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col   xs={8} md={6} id='yourDivId' className='border rounded p-3 bg-info'>
                            {answer9}
                        </Col>
                        <Col  xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer9 ? (
                        <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered10 && (
                    <Row className='my-3'>
                        <Col  xs={4} md={5}>
                        </Col>
                        <Col   xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent10}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 11 ? (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col   xs={8} md={6} id='yourDivId' className='border rounded p-3 bg-info'>
                            {answer10}
                        </Col>
                        <Col  xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer10 ? (
                        <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered11 && (
                    <Row className='my-3'>
                        <Col  xs={4} md={5}>
                        </Col>
                        <Col   xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent11}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 12 ? (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col   xs={8} md={6} id='yourDivId' className='border rounded p-3 bg-info'>
                            {answer11}
                        </Col>
                        <Col  xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer11 ? (
                        <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered12 && (
                    <Row className='my-3'>
                        <Col  xs={4} md={5}>
                        </Col>
                        <Col   xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent12}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 13 ? (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col   xs={8} md={6} id='yourDivId' className='border rounded p-3 bg-info'>
                            {answer12}
                        </Col>
                        <Col  xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer12 ? (
                        <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered13 && (
                    <Row className='my-3'>
                        <Col  xs={4} md={5}>
                        </Col>
                        <Col   xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent13}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 14 ? (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col   xs={8} md={6} id='yourDivId' className='border rounded p-3 bg-info'>
                            {answer13}
                        </Col>
                        <Col  xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer13 ? (
                        <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                           {/* <Loading/> */}
                           loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered14 && (
                    <Row className='my-3'>
                        <Col  xs={4} md={5}>
                        </Col>
                        <Col   xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent14}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 15 ? (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col   xs={8} md={6} id='yourDivId' className='border rounded p-3 bg-info'>
                            {answer14}
                        </Col>
                        <Col  xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer14 ? (
                        <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {updateEntryRendered15 && (
                    <Row className='my-3'>
                        <Col  xs={4} md={5}>
                        </Col>
                        <Col   xs={8} md={6} style={{backgroundColor:'#90EE90'}} className='border rounded p-3'>
                            {ent15}
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                    {variableCounter >= 16 ? (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col   xs={8} md={6} id='yourDivId' className='border rounded p-3 bg-info'>
                            {answer15}
                        </Col>
                        <Col  xs={4} md={5}>
                        </Col>
                    </Row>
                    ) : readyforAnswer15 ? (
                        <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col  xs={8} md={3} className='rounded p-3 '>
                            {/* <Loading/> */}
                            loading
                        </Col>
                        <Col  xs={4} md={8}>
                        </Col>
                    </Row>
                    ): null}
                    {variableCounter >= 16 && (
                    <Row className='my-3'>
                        <Col  xs={0} md={1}>
                        </Col>
                        <Col   xs={0} md={10} id='yourDivId' className='border rounded p-3 bg-warning'>
                            Sorry the limit for this chat has been reached. If needed, you can reload the website to try again.
                        </Col>
                        <Col  xs={0} md={1}>
                        </Col>
                    </Row>
                    )}
                </Container>
                <Container>
                    <Row className='my-3'>
                        
                        <Col md={2}>
                            {variableCounter >= 4 ? (
                                <Button onClick={printPage} color='warning' >Print Page</Button>
                            ) : readyforAnswer15 ? (
                                <div></div>
                            ): null}
                        </Col>
                        <Col md={8}>
                            <div className="d-flex">
                                <Input 
                                    className="w-100" 
                                    type="text" 
                                    value={userInput} 
                                    onChange={handleUserInput} 
                                    onKeyDown={handleEnterKeyPress}
                                    style={{ borderWidth: '2px', height: '50px' }} 
                                    // innerRef={inputRef} />
                                    />
                                <Button onClick={ () => {updateEntry()}} className="ml-2" color='primary'>Send</Button>
                            </div>
                        </Col> 
                        <Col md={2}></Col>

                            
                    </Row> 
                </Container>
                </Col>
                <Col xs={0} md={2}>
                </Col>
                </Row>
            {/* <Row>
                <Col>
                </Col>
                <Col>
                    <Button onClick={printPage}>Print Page</Button>
                </Col>
                <Col>
                </Col>
            </Row> */}
            </Container>
        </>
    );
};

export default ChatGPTBotPage7;