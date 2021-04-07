export interface CasherParams{
    count: number
    prince: number
    discount: DiscountParams
}

export interface DiscountParams{
    type: string
    [propName: string]: any
}