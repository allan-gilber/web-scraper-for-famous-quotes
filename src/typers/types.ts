export type quoteStructure = {
    text: string,
    tags: string[]
}

export type objectOfQuotesStructure ={
    [key: string]: quoteStructure[]
}