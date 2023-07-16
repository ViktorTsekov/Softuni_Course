function winningTicket(input) {
  let validTicketRegex = /^[!-~]{20}$/g
  let winningTicketRegex = /^.*(?<symbol>[@#$^])\1{5,9}.*$/g
  let jackpotTicketRegex = /^(?<symbol>[@#$^])\1{19}$/g

  let getMaxLengthOfConsecutiveSymbols = (str) => {
    let symbol = str.replace(/[^^#$@]/g, '-').split("-").sort((a, b) => b.length - a.length)[0][0]
    let symbolLength = str.replace(/[^^#$@]/g, '-').split("-").sort((a, b) => b.length - a.length)[0].length

    return `${symbol}-${symbolLength}`
  }

  input.replace(/\s/g, '').split(',').forEach(ticket => {
    if(ticket.match(validTicketRegex) !== null) {
      if(ticket.match(jackpotTicketRegex) === null) {
        let ticketFirstHalf = ticket.slice(0, 10)
        let ticketSecondHalf = ticket.slice(10, 20)

        if(ticketFirstHalf.match(winningTicketRegex) !== null && ticketSecondHalf.match(winningTicketRegex) !== null) {
          let ticketFirstHalfMatch = getMaxLengthOfConsecutiveSymbols(ticketFirstHalf)
          let ticketSecondHalfMatch = getMaxLengthOfConsecutiveSymbols(ticketSecondHalf)

          if((ticketFirstHalfMatch.split('-')[0] === ticketSecondHalfMatch.split('-')[0]) &&
            (ticketFirstHalfMatch.split('-')[1] === ticketSecondHalfMatch.split('-')[1])) {
            let symbol = ticketFirstHalfMatch.split('-')[0]
            let length = ticketFirstHalfMatch.split('-')[1]

            console.log(`ticket "${ticket}" - ${length}${symbol}`)
          } else {
            console.log(`ticket "${ticket}" - no match`)
          }
        } else {
          console.log(`ticket "${ticket}" - no match`)
        }
      } else {
        let jackpotTicketMatch = ticket.matchAll(jackpotTicketRegex)

        for(match of jackpotTicketMatch) {
          console.log(`ticket "${ticket}" - 10${match.groups.symbol} Jackpot!`)
        }
      }
    } else {
      console.log(`invalid ticket`)
    }
  })
}

winningTicket('$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey')
