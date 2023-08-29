
const reviews = [
  {
    imgURL: 'https://th.bing.com/th/id/OIG.fICjJMey8_1NbxeVHDi3?pid=ImgGn', 
    customerName: 'Zahara Nwadike',
    rating: 4.5,
    feedback: 'Great homes catalogue  I love it.',
  },
  {
    imgURL: 'https://th.bing.com/th/id/OIG.mw8dmHUDDaRuHCn5RTrl?pid=ImgGn', 
    customerName: 'Jae-Hoon Park',
    rating: 5,
    feedback: 'Amazing quality and fast booking.',
  },
  {
    imgURL: 'https://th.bing.com/th/id/OIG.omO4dgjJxo_k17z9XkEu?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn', 
    customerName: 'Jasper Mwesigwa',
    rating: 5,
    feedback: 'Easiest way to rent a home.',
  },
];

function CustomerReviews() {
  return (
    <div className="customer-reviews">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <span className='text-coral-red inline-block mt-3 text-lg'>Rentlify</span> Homes
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div key={index} className="bg-red-200 rounded shadow-md p-4">
            <img src={review.imgURL} alt={review.customerName} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">{review.customerName}</h3>
              <div className="text-yellow-500">{review.rating} stars</div>
              <p className="text-gray-700">{review.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;
