export const INSTRUCTION_TEXT = `
    This simulation is designed to help you practice business negotiation skills in a controlled environment.
    
    Team 1 is responsible for proposing terms by inputting values for EBITDA, Interest Rate, Multiple, Factor Score, Company Name, and Description.
    
    Team 2 reviews these terms and can mark each one as either "TBD" (To Be Determined) or "OK" (Approved).
    
    The valuation is calculated using the formula: EBITDA × Multiple × Factor Score.
    
    The pie chart represents the interest distribution based on the Interest Rate value.
    
    Use the timer to keep track of the current stage and remaining time. The simulation progresses through four stages: Briefing, Analysis, Deal Structuring, and Completion.
  `

export const GUIDANCE_TEXT = {
  title: `First Time Guidance`,
  content: `
    Welcome to the Business Negotiation Simulation! This interface allows Team 1 to input values 
    for negotiation terms while Team 2 can review and approve them. Modify the EBITDA, Interest Rate, 
    and Multiple to see how they affect the company valuation. Use the Factor Score slider to adjust 
    risk factors. When you're satisfied with your inputs, click SUBMIT to finalize your proposal.`,
}

export const TIME_ALERT_TEXT = {
  title: `Time Alert`,
  content: `
      You have less than 15 minutes left in the current stage. Please finalize
      your decisions.`,
}
