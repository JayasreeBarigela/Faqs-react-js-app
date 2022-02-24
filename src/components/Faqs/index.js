// Write your code here.

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div>
      <div>
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(eachFaqItem => (
            <FaqItem key={eachFaqItem.id} faqItem={eachFaqItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
