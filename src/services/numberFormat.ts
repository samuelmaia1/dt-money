export function format(n: number){
    return n.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true
      })
}