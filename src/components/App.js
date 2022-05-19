import React, { useState, useEffect } from 'react';
import { getFinances } from '../connectors/personalFinance';
import { Header } from './Core/Header';
import { FinanceList } from './FinanceList';

const App = () => {
    const [listFinances, setFinances] = useState([]);
    const [timesCalled, setFetch] = useState(0);

    useEffect(() => {
        const fetchFinancesHook = async () => {
          const result = await getFinances();
          setFinances(result);
        }
        fetchFinancesHook();
    }, [timesCalled]);

    if (listFinances.length === 0) {
        return <h1>loading...</h1>
    }

    return (
        <>
            <Header />
            <FinanceList finances={listFinances} />
            <button onClick={() => setFetch(timesCalled +1)}>Fetch Again!!!</button>           
        </>
    );
}

export default App;
