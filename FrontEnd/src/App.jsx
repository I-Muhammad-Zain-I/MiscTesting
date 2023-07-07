import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'
function App() {
    
    useEffect(() => {

        const fetchDB = async () => { 
            try {
                const response = await fetch("http://localhost:5000");
                const Items = await response.json();
                console.log(Items);
            } 
            catch (err) {
                console.log(err.message);
            }
            finally {
                console.log("Data Successfully Fetched And Displayed!..");
            }
        }
        fetchDB();
    }, []);
    
    // useEffect(() => {

    //     const fetchDB = async () => { 
    //         try {
    //             const response = await axios.get("http://localhost:5000");
    //             const dataPromise = promise.then((response) => response.data);
    //             console.log(dataPromise);
    //         } 
    //         catch (err) {
    //             console.log(err.message);
    //         }
    //         finally {
    //             console.log("Data Successfully Fetched And Displayed!..");
    //         }
    //     }
    //     fetchDB();
    // }, []);

    return (
        <>

        </>
    )
}

export default App
