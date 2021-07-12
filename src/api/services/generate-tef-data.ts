interface TEFParams {
  cpfCnpj: string
  accountId: number
  amount: number
}

export const generateTefData = (params: TEFParams) => {
  // validate params
  return `${params.cpfCnpj};${params.accountId};${params.amount}`
}
