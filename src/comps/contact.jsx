import React from 'react'

const Contact = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">
        If you have any questions, feedback, or need assistance, feel free to reach out to us.
      </p>
      <p className="mb-2">
        You can contact us via email at <a href="mailto:support@ourapp.com" className="text-blue-500">support@ourapp.com</a>.
      </p>
      <p className="mb-2">
        Alternatively, you can call us at <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>.
      </p>
      <p>
        We are here to help and look forward to hearing from you!
      </p>
    </div>
  )
}

export default Contact