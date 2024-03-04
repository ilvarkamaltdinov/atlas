export type Bank = {
    id: number
    name: string
    title: string
    slug: string
    license_title?: string
    license_file?: string
    image: string
}
export type BankData = {
    banks: Bank[]
}
