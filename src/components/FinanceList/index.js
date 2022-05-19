export const FinanceList = (props) => {
    return (
        <ul>
            {
                props.finances.map(finance => <li>{finance.description}</li>)
            }
        </ul>
    )
}