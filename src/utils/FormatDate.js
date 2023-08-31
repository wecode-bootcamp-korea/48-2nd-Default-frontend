export const FormatDate = review => {
  const reviewDate = new Date(review).toLocaleDateString().split('');
  reviewDate.pop();
  const formattedReviewDate = reviewDate
    .join('')
    .replaceAll('.', '-')
    .replaceAll(' ', '');
  return formattedReviewDate;
};

export const FormatDateToReservation = date => {
  const reservationDate = new Date(date).toLocaleDateString().split('');
  reservationDate.pop();
  const formattedReservationDate = reservationDate
    .join('')
    .replaceAll('.', '-')
    .replaceAll(' ', '');
  return formattedReservationDate;
};
