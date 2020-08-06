import React, {useEffect, useState} from 'react';
import './index.css'

const FizzBuzz = () => {
    const [numbersArray, setNumbersArray] = useState([1]);

    const createArrayWithNumbers = () => {
        let tempArray = [];
        for (let i = 1; i <= 100; i++) {
            tempArray.push(i);
        }
        setNumbersArray(tempArray);
    };

    const handleFizzBuzz = (number) => {
        if(number % 3 ===0 && number % 5 === 0)
        {
            return 'FizzBuzz'
        }
        else if(number % 5 === 0){
            return 'Buzz'
        }
        else if(number % 3 === 0) {
            return 'Fizz'
        }
        else {
            return number
        }
    }

    useEffect(() => {
        createArrayWithNumbers()
    }, []);

    return (
        <div className={'problem-container container-fluid'}>
            <div className="d-flex p-3 bg-secondary text-white flex-wrap">
                {numbersArray?.map((item, itemIndex) => (<div className="p-5 flex-fill" key={itemIndex}>{handleFizzBuzz(item)}</div>))}
            </div>

        </div>
    );
};

export default FizzBuzz;