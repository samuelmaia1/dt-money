export interface Transaction{
    title: string,
    amount: number,
    date: string,
    id: string,
    type: string,
    category: string
}

export interface TransacctionInput{
    title: string,
    amount: number,
    type: string,
    category: string
}